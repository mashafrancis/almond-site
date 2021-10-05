import { AnyAction, Dispatch, Store } from 'redux';
import { OurStore } from './rootReducer';
import { ServerResponse } from 'http';
import { GetServerSidePropsContext } from 'next';
import authService from '@utils/auth';
import http from '@utils/http';
import * as setCookie from 'set-cookie-parser';
import * as cookie from 'cookie';
import { wrapper } from './index';
import { getUserDetails } from '@modules/user';

export type ContextWithStore = Omit<
	GetServerSidePropsContext & {
		store: Store<OurStore, AnyAction>;
	},
	'resolvedUrl'
>;

export type Callback = (
	accessToken: string,
	res: ServerResponse
) => Record<string, unknown> | Promise<Record<string, unknown>>;

interface AuthorizeProps {
	context: ContextWithStore;
	callback: Callback;
}

export const authorize = async ({ context, callback }: AuthorizeProps) => {
	const { req, res } = context;
	const accessToken = authService.getToken(); // get accessToken from cookie store
	if (req) {
		// 1. We take cookies (refresh_token) from the client's browser and set it as ours (server-side)
		http.defaults.headers.cookie = req.headers.cookie || null;

		// 1a. If accessToken exists assign it as Authorization token in our axios instance.
		if (accessToken)
			http.defaults.headers.Authorization = `Bearer ${accessToken}`;

		if (!accessToken) {
			// No accessToken path:
			// You're probably revisiting the size cuz the accessToken
			// is not available in the server store. Or you refreshed the page.
			// In that case we need to go through the refresh token process.
			try {
				// 1. Call our proxy api refresh token route. Try to refresh the token
				// using the refresh token assigned in step 1 (global).
				const response = await http.get('/api/refreshToken');
				const newAccessToken = response.data.accessToken;
				// 2. We got new set of cookies from the response.
				// 2a. Parse the refreshToken cookie using 'set-cookie-parser' library
				const responseCookie = setCookie.parse(
					response.headers['set-cookie']
				)[0];
				// 3. Set a fresh cookie header for our axios instance.
				http.defaults.headers.cookie = cookie.serialize(
					responseCookie.name,
					responseCookie.value
				);
				// 4. Set a fresh Authorization header for our axios instance.
				http.defaults.headers.Authorization = `Bearer ${newAccessToken}`;
				// 5. Update the client's refresh token
				res.setHeader('set-cookie', response.headers['set-cookie']);
				// 6. And last step => update server's redux store accessToken
				authService.saveToken(newAccessToken);
				// dispatch(updateAccessToken({ token: newAccessToken }))
			} catch (error) {
				// Handle error case. The most possible error would be
				// axios.get('/api/refreshToken) failing
				// that would mean our refreshToken has expired or
				// it is simply wrong. So let's reset our auth slice.
				// So we get logged out :)
				return null;
			}
		}

		// Now we should be ready to call the authorized endpoint we want.
		// Disclaimer: its still not 100% sure that we will be able to get the resources
		// Our accessToken we got in line 31 could be INVALID / EXPIRED !
		try {
			// 1. We call the callback. ( some callback with api calls - for example fetching list of frogs )
			// If it fails axios interceptor defined in axios.ts will fire
			// will try to refresh the token for us and call that action once again.
			const cbResponse = await callback(accessToken, res);
			if (http.defaults.headers.setCookie) {
				// 2. Optional
				// If callback fired refreshing the token
				// then the interceptor set a helper header (see axios.ts file)
				// 2a. that we will use to update the client's refreshToken.
				res.setHeader('set-cookie', http.defaults.headers.setCookie);
				// 2b. We also update the accessToken
				authService.saveToken(
					http.defaults.headers.Authorization.split(' ')[1]
				);
				// 2c. Then we clean up the header.
				delete http.defaults.headers.setCookie;
			}
			// 3. We return response.
			return cbResponse;
		} catch (e) {
			// We're here when axios interceptor fails to refresh the token.
			// Here we should handle handling/ indicating that the user is not authorized.
			return null;
		}
	}
};

interface UserProps {
	callback: Callback;
}

export const user = ({ callback }: UserProps) =>
	// 1. We use wrapper from next-wrapper-redux library to wrap our gerServerSideProps
	// with our redux store.
	// property "context" contains store
	// @ts-ignore
	wrapper.getServerSideProps(async (context: ContextWithStore) => {
		const { dispatch }: { dispatch: Dispatch<any> } = context.store;
		// 2. Call our authorize Higher order Function
		return authorize({
			context,
			callback: async (...props) => {
				// 3. If we currently don't have our user fetched
				// Then we're not authorized.
				// So try to fetch the user.
				if (!context.store.getState().user.userDetails)
					dispatch(getUserDetails());
				// 4. return the response from the callback
				return callback(...props);
			},
		});
	});
