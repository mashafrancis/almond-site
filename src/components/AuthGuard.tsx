import { FC, ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { IRootState } from '../store/rootReducer';
import { Typography } from '@mui/material';

type Props = {
	readonly role?: 'admin';
	readonly customText?: ReactNode;
};

export const AuthGuard: FC<Props> = ({ children, role, customText }) => {
	const { isLoading } = useSelector(
		(globalState: IRootState) => globalState.authentication
	);
	const {
		userDetails: { currentRole },
	} = useSelector((globalState: IRootState) => globalState.user);

	if (isLoading) {
		return <Typography variant={'body2'}>Loading...</Typography>;
	}

	if (currentRole) {
		return <>{children}</>;
	}

	if (role === 'admin' && currentRole === 'admin') {
		return <>{children}</>;
	}

	return (
		<Typography variant={'body1'}>
			{customText ||
				"You don't have permission to access this page. Please contact an admin if you think something is wrong."}
		</Typography>
	);
};
