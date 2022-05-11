import BlogNewsroom from 'views/BlogNewsroom';
import { GetStaticProps } from 'next';
import client from '../apolloConfig';
import { LOGIN } from '../queries';

export default function BlogNewsroomPage({ allPosts, preview }): JSX.Element {
	return <BlogNewsroom allPosts={allPosts} preview={preview} />;
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
	const { data } = await client.query({ query: LOGIN });

	return {
		props: { allPosts: data?.posts, preview },
	};
};
