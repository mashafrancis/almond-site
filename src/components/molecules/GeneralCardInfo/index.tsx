import { ButtonBase, Grid, Typography, Box } from '@mui/material';
import { GeneralCardInfoProps } from './interfaces';
import { useTheme } from '@mui/material/styles';

const GeneralCardInfo = ({
	mainHeader,
	subHeader,
	actionItem,
	icon,
}: GeneralCardInfoProps): JSX.Element => {
	const theme = useTheme();

	return (
		<Grid
			xs={12}
			sx={{
				height: 'fit-content',
				border: `1px solid ${theme.palette.divider}`,
				borderRadius: 2,
				backgroundColor: theme.palette.background.paper,
				marginBottom: 2,
				[theme.breakpoints.up('sm')]: {
					marginRight: 1,
				},
			}}
		>
			<Box padding={2} display={'flex'} alignItems={'center'}>
				<Box marginRight={2}>
					<ButtonBase
						sx={{
							padding: 1,
							borderRadius: 2,
							backgroundColor: 'rgba(25, 103, 210, 0.11)',
							color: '#2573b5',
						}}
					>
						{icon}
					</ButtonBase>
				</Box>
				<Box
					display={'flex'}
					flexDirection={{ xs: 'column', sm: 'row' }}
					flex={'1 1 100%'}
					justifyContent={{ sm: 'space-between' }}
					alignItems={{ sm: 'center' }}
				>
					<Box marginBottom={{ xs: 1, sm: 0 }}>
						<Typography color="primary" variant={'subtitle1'} fontWeight={700}>
							{mainHeader}
						</Typography>
						<Typography color={'text.secondary'} fontSize={14}>
							{subHeader}
						</Typography>
					</Box>
				</Box>
				<Box marginLeft={2}>{actionItem}</Box>
			</Box>
		</Grid>
	);
	// return (
	// 	<Grid
	// 		item
	// 		xs={12}
	// 		sx={{
	// 			paddingBottom: 0,
	// 			[theme.breakpoints.down('sm')]: {
	// 				paddingTop: '0 !important',
	// 				marginBottom: 8,
	// 			},
	// 		}}
	// 	>
	// 		<Card
	// 			sx={{ borderRadius: 2 }}
	// 			variant="outlined"
	// 			data-testid="general-card-info"
	// 		>
	// 			<CardContent
	// 				sx={{ flex: '1 0 auto', flexDirection: 'row', width: '100%' }}
	// 			>
	// 				<Grid
	// 					item
	// 					container
	// 					direction="row"
	// 					justifyContent="space-between"
	// 					alignItems="center"
	// 					// spacing={2}
	// 					style={{ display: 'flex' }}
	// 					xs={12}
	// 				>
	// 					{icon && (
	// 						<Grid
	// 							item
	// 							container
	// 							xs={2}
	// 							direction="row"
	// 							alignItems="center"
	// 							justifyContent="center"
	// 						>
	// 							<ButtonBase
	// 								sx={{
	// 									padding: 1,
	// 									borderRadius: 2,
	// 									backgroundColor: 'rgba(25, 103, 210, 0.11)',
	// 									color: '#2573b5',
	// 								}}
	// 							>
	// 								{icon}
	// 							</ButtonBase>
	// 						</Grid>
	// 					)}
	// 					<Grid item container xs={icon ? 8 : 12}>
	// 						<Stack spacing={0}>
	// 							<Typography variant="h6" color="primary" data-testid="header">
	// 								{mainHeader}
	// 							</Typography>
	// 							<Typography
	// 								variant={isMd ? 'subtitle1' : 'body2'}
	// 								data-testid="sub-header"
	// 								fontSize={14}
	// 							>
	// 								{subHeader}
	// 							</Typography>
	// 						</Stack>
	// 					</Grid>
	// 					<Grid
	// 						item
	// 						container
	// 						xs={2}
	// 						direction="row"
	// 						alignItems="center"
	// 						justifyContent="flex-end"
	// 					>
	// 						{actionItem}
	// 					</Grid>
	// 				</Grid>
	// 			</CardContent>
	// 		</Card>
	// 	</Grid>
	// );
};

export default GeneralCardInfo;
