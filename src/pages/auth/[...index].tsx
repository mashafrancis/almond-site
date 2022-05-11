import { get } from 'lodash';
import withApollo from '@lib/withApollo';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GOOGLE_AUTH } from '../../queries';
import { initializeApollo } from '../../apolloConfig';

const AuthPage = () => {
	// const [page] = get(query, 'index', [null]);
	const router = useRouter();
	// const { code } = router.query;

	// console.log('Class: , Function: AuthPage, Line 9 code():', code);
	// const { data, loading, error } = useQuery(GOOGLE_AUTH, {
	// 	variables: { code },
	// });
	//
	// console.log('Class: , Function: AuthPage, Line 19 loading():', loading);

	// useEffect(() => {
	// 	if (code) {
	// 		const { data, loading, error } = useQuery(GOOGLE_AUTH, {
	// 			variables: { code },
	// 		});
	// 	}
	// }, [code]);

	return <div>Blah</div>;
};

AuthPage.getInitialProps = async ({ query }) => {
	const apolloClient = initializeApollo();
	const { code } = query;

	await apolloClient.query({
		query: GOOGLE_AUTH,
		variables: { code },
	});

	return {};
};

export default AuthPage;
