import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Chip from "@mui/material/Chip";
import {BookmarkAddOutlined} from "@mui/icons-material";
import {Stack} from "@mui/material";

const mock = [
	{
		image: 'https://assets.maccarianagency.com/backgrounds/img21.jpg',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		title: 'Eiusmod tempor incididunt',
		tags: ['UX', 'Design', 'Themes', 'Photography'],
		author: {
			name: 'Clara Bertoletti',
			avatar: 'https://assets.maccarianagency.com/avatars/img1.jpg',
		},
		date: '10 Sep',
		category: 'Design'
	},
	{
		image: 'https://assets.maccarianagency.com/backgrounds/img22.jpg',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		title: 'Sed ut perspiciatis',
		tags: ['UX', 'Design', 'Themes', 'Photography'],
		author: {
			name: 'Jhon Anderson',
			avatar: 'https://assets.maccarianagency.com/avatars/img2.jpg',
		},
		date: '02 Aug',
		category: 'Design'
	},
	{
		image: 'https://assets.maccarianagency.com/backgrounds/img23.jpg',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		title: 'Unde omnis iste natus',
		tags: ['UX', 'Design', 'Themes', 'Photography'],
		author: {
			name: 'Chary Smith',
			avatar: 'https://assets.maccarianagency.com/avatars/img3.jpg',
		},
		date: '05 Mar',
		category: 'Design'
	},
	{
		image: 'https://assets.maccarianagency.com/backgrounds/img24.jpg',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		title: 'Eiusmod tempor incididunt',
		tags: ['UX', 'Design', 'Themes', 'Photography'],
		author: {
			name: 'Clara Bertoletti',
			avatar: 'https://assets.maccarianagency.com/avatars/img1.jpg',
		},
		date: '10 Sep',
		category: 'Design'
	},
];

const MostViewedArticles = (): JSX.Element => {
	const theme = useTheme();
	return (
		<Box>
			<Box
				display={'flex'}
				justifyContent={'space-between'}
				alignItems={{ xs: 'flex-start', sm: 'center' }}
				flexDirection={{ xs: 'column', sm: 'row' }}
				marginBottom={4}
			>
				<Box>
					<Typography fontWeight={700} variant={'h6'} gutterBottom>
						Latest stories
					</Typography>
				</Box>
			</Box>
			<Grid container spacing={4}>
				{mock.map((item, i) => (
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
									src={item.image}
									alt="..."
									effect="blur"
									sx={{
										borderRadius: 1,
										objectFit: 'cover',
										maxHeight: 200,
										filter:
											theme.palette.mode === 'dark'
												? 'brightness(0.7)'
												: 'none',
									}}
								/>
							</Box>
							<CardContent
								sx={{
									width: { xs: 1, md: '70%' },
									display: 'flex',
									flexDirection: 'column',
									justifyContent: 'center',
									padding: { xs: 0, md: 1 }
								}}
							>
								<Typography
									fontWeight={700}
									marginTop={{xs: 1, md: 0}}
									// sx={{ textTransform: 'uppercase' }}
								>
									{item.title}
								</Typography>
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
												{item.author.name} - {item.date}
											</Typography>
											<Chip
												component={'a'}
												href={''}
												label={item.category}
												clickable
												sx={{ margin: 0.5, fontSize: 12 }}
												size={'small'}
											/>
										</div>
										<BookmarkAddOutlined sx={{ cursor: "pointer" }} />
									</Stack>
								</Box>
								<Typography color="text.secondary">
									{item.description}
								</Typography>
							</CardContent>
						</Box>
					</Grid>
				))}
			</Grid>
		</Box>
	);
};

export default MostViewedArticles;
