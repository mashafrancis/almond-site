import { AnalyticsCardProps } from './interfaces';
import {
	ButtonBase,
	Card,
	CardContent,
	Grid,
	Stack,
	Typography,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

const AnalyticsCard = ({
	icon,
	mainInfo,
	subInfo,
	colorClass,
	onClick,
}: AnalyticsCardProps): JSX.Element => {
	const theme = useTheme();
	const classes = {
		root: {
			flexGrow: 1,
		},
		details: {
			display: 'flex',
			flexDirection: 'row',
		},
		content: {
			flex: '1 0 auto',
			flexDirection: 'row',
			width: '100%',
		},
		title: {
			fontWeight: 500,
		},
		cardPaper: {
			borderRadius: 12,
		},
		image: {
			width: 128,
			height: 128,
		},
		mainInfoText: {
			fontWeight: 500,
			fontSize: 18,
		},
		subInfoText: {
			fontWeight: 600,
			// [theme.breakpoints.up('xl')]: {
			//   fontSize: 12
			// },
		},
		mainCard: {
			cursor: 'pointer',
			borderRadius: 2,
			[theme.breakpoints.down('sm')]: {
				paddingTop: '0 !important',
				marginBottom: 1,
			},
		},
		yellowCard: {
			color: '#f29900 !important',
			backgroundColor: '#fef7e0',
			borderColor: 'rgba(242, 153, 0, 0.2) !important',
		},

		blueCard: {
			color: '#1967d2 !important',
			backgroundColor: '#e8f0fe',
			borderColor: 'rgba(25, 103, 210, 0.2) !important',
		},

		purpleCard: {
			color: '#512da8 !important',
			backgroundColor: '#f3e8fd',
			borderColor: 'rgba(81, 45, 168, 0.2) !important',
		},

		brownCard: {
			color: '#3e2723 !important',
			backgroundColor: '#efebe9',
			borderColor: 'rgba(62, 39, 35, 0.2) !important',
		},

		redCard: {
			color: '#821721 !important',
			backgroundColor: '#e3d6d6',
			borderColor: 'rgba(210, 43, 53, 0.2) !important',
		},

		greenCard: {
			color: '#1b5e20 !important',
			backgroundColor: '#e8f5e9',
			borderColor: 'rgba(27, 94, 32, 0.2) !important',
		},
	};
	return (
		<Grid item lg={4} md={6} xs={12} sx={classes.mainCard}>
			<Card
				sx={{ ...classes[colorClass!], ...classes.mainCard }}
				variant="outlined"
				onClick={onClick}
				data-testid="analytics-card"
			>
				<CardContent classes={classes.content}>
					<Stack
						direction="row"
						justifyContent="space-between"
						alignItems="center"
						spacing={2}
					>
						<Grid item xs={1} md={2}>
							<ButtonBase>{icon}</ButtonBase>
						</Grid>
						<Grid item xs={10} sm container>
							<Grid
								item
								container
								justifyContent="space-between"
								alignItems="center"
								direction="row"
								style={{ display: 'flex', width: '100%' }}
							>
								<Typography
									sx={{ ...classes[colorClass!], ...classes.mainInfoText }}
									variant="h6"
									data-testid="main-info"
								>
									{mainInfo}
								</Typography>
								<Typography
									variant="h4"
									sx={{ ...classes[colorClass!], ...classes.subInfoText }}
									data-testid="sub-info"
								>
									{subInfo}
								</Typography>
							</Grid>
						</Grid>
					</Stack>
				</CardContent>
			</Card>
		</Grid>
	);
};

export default AnalyticsCard;
