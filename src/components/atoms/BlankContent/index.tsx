import { Typography } from '@mui/material';

const BlankContent = ({ message }: { message: string }): JSX.Element => {
	return (
		<Typography
			variant="h6"
			color="textSecondary"
			sx={{
				fontFamily: 'San Francisco, serif !important',
				fontSize: 30,
				fontWeight: 300,
				letterSpacing: -2,
				wordSpacing: 2,
			}}
		>
			{message}
		</Typography>
	);
};

export default BlankContent;
