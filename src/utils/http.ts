// third-party libraries
import { displayInternalServerErrorMessage } from '@modules/internalServerError';
import CacheHandler from '@utils/CacheHandler';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { setupCache } from 'axios-cache-adapter';
// helpers
import authService from '@utils/auth';
import store from '../store';
import createAuthRefreshInterceptor from 'axios-auth-refresh';
import * as setCookie from 'set-cookie-parser';
import * as cookie from 'cookie';

const cacheAdapter = setupCache({
	maxAge: 15 * 60 * 1000,
});

const token = authService.getToken();
const headers = {
	Authorization: `Bearer ${token}`,
};

// create axios instance
const http = axios.create({
	baseURL: process.env.NEXT_PUBLIC_ALMOND_API,
	headers: authService.isAuthenticated() ? headers : '',
	// withCredentials: true,
	adapter: cacheAdapter.adapter,
});

// create axios interceptors
createAuthRefreshInterceptor(http, (failedRequest) =>
	// 1. First try request fails - refresh the token.
	http.get('/api/refreshToken').then((resp) => {
		// 1a. Clear old helper cookie used in 'authorize.ts' higher order function.
		if (http.defaults.headers.setCookie) {
			delete http.defaults.headers.setCookie;
		}
		const { accessToken } = resp.data;
		// 2. Set up new access token
		const bearer = `Bearer ${accessToken}`;
		http.defaults.headers.Authorization = bearer;

		// 3. Set up new refresh token as cookie
		const responseCookie = setCookie.parse(resp.headers['set-cookie'])[0]; // 3a. We can't just acces it, we need to parse it first.
		http.defaults.headers.setCookie = resp.headers['set-cookie']; // 3b. Set helper cookie for 'authorize.ts' Higher order Function.
		http.defaults.headers.cookie = cookie.serialize(
			responseCookie.name,
			responseCookie.value
		);
		// 4. Set up access token of the failed request.
		failedRequest.response.config.headers.Authorization = bearer;

		// 5. Retry the request with new setup!
		return Promise.resolve();
	})
);

http.interceptors.request.use((config) => {
	if (token && authService.isExpired()) {
		return authService.redirectUser();
	}
	return config;
});

http.interceptors.response.use(
	(response: AxiosResponse<any>): AxiosResponse<any> => {
		const { method, url } = response.config;
		const endpoint: string = CacheHandler.extractUrlEndpoint(url ?? '');

		if (method !== 'get' && endpoint) {
			const requestTimestamp = new Date().getTime();
			CacheHandler.cacheInvalidationRegister[endpoint] = requestTimestamp;

			if (endpoint === '/dashboard') {
				CacheHandler.cacheInvalidationRegister['/dashboard'] =
					requestTimestamp;
			}
		}

		return response;
	},
	(error: AxiosError<any>) => {
		if (
			error.response?.status === 500 &&
			error.response?.data?.message.includes('token')
		) {
			authService.redirectUser();
		} else if (error.response?.status === 500) {
			store.dispatch(displayInternalServerErrorMessage(true));
		}

		return Promise.reject(error);
	}
);

export default http;
