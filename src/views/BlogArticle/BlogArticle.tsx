import { Box, Typography } from '@mui/material';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { useTheme } from '@mui/material/styles';
import Main from 'layouts/Main';
import Container from 'components/Container';
import { MDXRemote } from 'next-mdx-remote';
import { Content, FooterNewsletter, Hero, SimilarStories } from './components';
import dayjs from '@utils/dayjsTime';

const components = { Typography };

const BlogArticle = ({
	frontMatter: { title, date, avatar, thumbnailUrl },
	mdxSource,
}): JSX.Element => {
	const theme = useTheme();

	const fullName = 'Anonymous';
	// const formattedDate = dayjs(post?.date).fromNow();
	// const image = post?.featuredImage.node.sourceUrl;

	return (
		<Main>
			<Box>
				<Hero
					avatar={avatar}
					fullName={fullName}
					date={date}
					title={title}
					featuredImage={thumbnailUrl}
				/>
				<Container maxWidth={{ sm: 720, md: 960 }}>
					<MDXRemote {...mdxSource} components={components} />
					{/*<Content*/}
					{/*	content={post?.content}*/}
					{/*	avatar={avatar}*/}
					{/*	fullName={fullName}*/}
					{/*	date={formattedDate}*/}
					{/*/>*/}
				</Container>
				<Box
					component={'svg'}
					preserveAspectRatio="none"
					xmlns="http://www.w3.org/2000/svg"
					x="0px"
					y="0px"
					viewBox="0 0 1920 100.1"
					sx={{
						marginBottom: -1,
						width: 1,
					}}
				>
					<path
						fill={theme.palette.alternate.main}
						d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
					/>
				</Box>
			</Box>
			<Box bgcolor={'alternate.main'}>
				<Container>
					<SimilarStories />
				</Container>
				<Container>
					<FooterNewsletter />
				</Container>
				<Box
					component={'svg'}
					preserveAspectRatio="none"
					xmlns="http://www.w3.org/2000/svg"
					x="0px"
					y="0px"
					viewBox="0 0 1920 100.1"
					sx={{
						marginBottom: -1,
						width: 1,
					}}
				>
					<path
						fill={theme.palette.background.paper}
						d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
					/>
				</Box>
			</Box>
		</Main>
	);
};

export default BlogArticle;
