import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
	uri: 'http://139.162.235.186:8000/graphql',
	cache: new InMemoryCache(),
});

export default client;
