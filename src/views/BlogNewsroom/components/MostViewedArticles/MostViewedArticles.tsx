import Link from 'next/link';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useTheme } from '@mui/material/styles';
import {
	Box,
	Typography,
	Card,
	CardContent,
	Grid,
	Chip,
	Stack,
} from '@mui/material';
import { BookmarkAddOutlined } from '@mui/icons-material';
import dayjs from '@utils/dayjsTime';

const MostViewedArticles = ({ posts }): JSX.Element => {
	const theme = useTheme();

	return (
		<Box>
			<Box
				display={'flex'}
				justifyContent={'space-between'}
				alignItems={{ xs: 'flex-start', sm: 'center' }}
				flexDirection={{ xs: 'column', sm: 'row' }}
				marginBottom={4}
			/>
			<Grid container spacing={4}>
				{posts.map((post, i) => {
					const {
						frontMatter: { title, description, thumbnailUrl, date, tags },
						slug,
					} = post;

					const fullName = 'Anonymous';
					// const formattedDate = dayjs(date).fromNow();
					const tag = tags[0];

					return (
						<Grid item xs={12} key={i}>
							<Box
								component={Card}
								width={1}
								height={1}
								borderRadius={0}
								boxShadow={0}
								display={'flex'}
								flexDirection={{ xs: 'column', md: 'row' }}
								sx={{ backgroundImage: 'none', bgcolor: 'transparent' }}
							>
								<Link href={`/blog/${slug}`}>
									<Box
										sx={{
											width: { xs: 1, md: '30%' },
											'& .lazy-load-image-loaded': {
												height: 1,
												display: 'flex !important',
											},
										}}
									>
										<Box
											component={LazyLoadImage}
											height={1}
											width={1}
											src={thumbnailUrl}
											alt="..."
											effect="blur"
											sx={{
												borderRadius: 1,
												// objectFit: 'cover',
												height: 150,
												cursor: 'pointer',
												filter:
													theme.palette.mode === 'dark'
														? 'brightness(0.7)'
														: 'none',
											}}
										/>
									</Box>
								</Link>
								<CardContent
									sx={{
										width: { xs: 1, md: '70%' },
										display: 'flex',
										flexDirection: 'column',
										justifyContent: 'center',
										padding: { xs: 0, md: 1 },
									}}
								>
									<Link href={`/blog/${slug}`}>
										<Typography
											fontWeight={700}
											marginTop={{ xs: 1, md: 0 }}
											sx={{ cursor: 'pointer' }}
										>
											{title}
										</Typography>
									</Link>
									<Box marginY={1}>
										<Stack
											direction="row"
											justifyContent="space-between"
											alignItems="center"
											spacing={2}
										>
											<div>
												<Typography
													variant={'caption'}
													color={'text.secondary'}
													// component={'i'}
												>
													{fullName} - {date}
												</Typography>
												<Chip
													component={'a'}
													href={''}
													label={tag}
													clickable
													sx={{ margin: 0.5, fontSize: 12 }}
													size={'small'}
												/>
											</div>
											{/*<BookmarkAddOutlined sx={{ cursor: 'pointer' }} />*/}
										</Stack>
									</Box>
									<Typography color="text.secondary">{description}</Typography>
								</CardContent>
							</Box>
						</Grid>
					);
				})}
			</Grid>
		</Box>
	);
};

export default MostViewedArticles;
