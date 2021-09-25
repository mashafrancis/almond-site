import { Main } from '../../layouts';
import { useTheme } from '@mui/material/styles';
import { Box, Container, Grid, useMediaQuery } from '@mui/material';
import { Form } from './components';

export const EnterDeviceIdView = (): JSX.Element => {
	const theme = useTheme();
	const isMd = useMediaQuery(theme.breakpoints.up('md'), {
		defaultMatches: true,
	});

	return (
		<Main>
			<Box
				position={'relative'}
				minHeight={'calc(100vh - 247px)'}
				display={'flex'}
				alignItems={'center'}
				justifyContent={'center'}
				height={1}
			>
				<Container>
					<Grid container spacing={6}>
						{isMd ? (
							<Grid item container justifyContent={'center'} xs={12} md={6}>
								<Box height={1} width={1} maxWidth={500}>
									<Box
										component={'img'}
										src={
											'https://static.almondhydroponics.com/static/images/illustration_my_device.svg'
										}
										width={1}
										height={1}
										sx={{
											filter:
												theme.palette.mode === 'dark'
													? 'brightness(0.8)'
													: 'none',
										}}
									/>
								</Box>
							</Grid>
						) : null}
						<Grid
							item
							container
							alignItems={'center'}
							justifyContent={'center'}
							xs={12}
							md={6}
						>
							<Form />
						</Grid>
					</Grid>
				</Container>
			</Box>
		</Main>
	);
};

export default EnterDeviceIdView;
