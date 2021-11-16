import BlogNewsroom from 'views/BlogNewsroom';
import {GetStaticProps} from "next";
import {getAllPostsForHome} from "@utils/Wordpress/api";

export default function BlogNewsroomPage({ allPosts, preview }): JSX.Element {
	return <BlogNewsroom allPosts={allPosts} preview={preview} />;
};

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
	const allPosts = await getAllPostsForHome(preview);
	return {
		props: { allPosts, preview }
	}
}
