/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import fancyId from '@utils/fancyId';

const mock = [
	{
		title: 300,
		subtitle:
			'deliveries of our locally produced vermijuice with all nutrients.',
		suffix: '+',
	},
	{
		title: 21,
		subtitle: 'farms across all regions in Kenya and growing fast with us.',
		suffix: '+',
	},
	{
		title: 99,
		subtitle: 'of our customers rated 5-star our new way of growing.',
		suffix: '%',
	},
];

const Features = (): JSX.Element => {
	const theme = useTheme();
	const isMd = useMediaQuery(theme.breakpoints.up('md'), {
		defaultMatches: true,
	});

	const [viewPortEntered, setViewPortEntered] = useState(false);
	const setViewPortVisibility = (
		isVisible: boolean | ((prevState: boolean) => boolean)
	) => {
		if (viewPortEntered) {
			return;
		}

		setViewPortEntered(isVisible);
	};

	return (
		<Box>
			<Grid container spacing={4} direction={isMd ? 'row' : 'column-reverse'}>
				<Grid item xs={12} md={6} data-aos={isMd ? 'fade-right' : 'fade-up'}>
					<Box marginBottom={4}>
						<Typography sx={{ fontWeight: 700 }} variant={'h4'} gutterBottom>
							Try one of our produce.
						</Typography>
						<Typography
							variant={'h6'}
							component={'p'}
							color={'text.secondary'}
						>
							With our hydroponics home farm, we grow sweet strawberries,
							perfect for eating anytime.
						</Typography>
					</Box>
					<Grid container spacing={2}>
						{mock.map((item) => (
							<Grid key={fancyId()} item xs={12} md={4}>
								<Typography variant="h4" color={'primary'} gutterBottom>
									<VisibilitySensor
										onChange={(isVisible) => setViewPortVisibility(isVisible)}
										delayedCall
									>
										<CountUp
											redraw={false}
											end={viewPortEntered ? +item.title : 0}
											start={0}
											suffix={item.suffix}
										/>
									</VisibilitySensor>
								</Typography>
								<Typography color="text.secondary" component="p">
									{item.subtitle}
								</Typography>
							</Grid>
						))}
					</Grid>
				</Grid>
				<Grid
					item
					container
					justifyContent="center"
					alignItems="center"
					xs={12}
					md={6}
					data-aos={'zoom-in'}
					sx={{
						display: { xs: 'none', md: 'flex' },
					}}
				>
					<Box component={Card} boxShadow={4} height={1} width={1}>
						<Box
							component={CardMedia}
							height={1}
							width={1}
							minHeight={300}
							image="https://storage.googleapis.com/static.almondhydroponics.com/static/images/hydroponic-strawberries.jpg"
						/>
					</Box>
				</Grid>
			</Grid>
		</Box>
	);
};

export default Features;
