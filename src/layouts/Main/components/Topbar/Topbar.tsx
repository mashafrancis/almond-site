import Link from 'next/link';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { alpha, useTheme } from '@mui/material/styles';
// components
import { DarkModeToggler } from '@components/atoms';
import authService from '@utils/auth';
import CustomAvatar from '@components/molecules/CustomAvatar';
import Logo from '@components/atoms/Logo';
import { ShortTextRounded } from '@mui/icons-material';
import Modal from '@components/atoms/Modal';
import { useState } from 'react';
import { Form } from './components';

interface Props {
	// eslint-disable-next-line @typescript-eslint/ban-types
	onSidebarOpen: () => void;
}

const Topbar = ({ onSidebarOpen }: Props): JSX.Element => {
	const [openAuthModal, setAuthModalOpen] = useState<boolean>(false);
	const theme = useTheme();

	const handleAuthModal = () => setAuthModalOpen((prevState) => !prevState);

	const renderAuthButtons = () => (
		<>
			<Box marginLeft={3}>
				{authService.isAuthenticated() ? (
					<CustomAvatar />
				) : (
					<Button
						variant="contained"
						color="primary"
						size="small"
						onClick={handleAuthModal}
					>
						Login
					</Button>
				)}
			</Box>
		</>
	);

	const renderAuthModal = (): JSX.Element => (
		<Modal
			isModalOpen={openAuthModal}
			renderHeader="Login into your account"
			renderDialogText="Choose your preferred method to authenticate into your account"
			renderContent={<Form />}
			onClose={handleAuthModal}
			onDismiss={handleAuthModal}
		/>
	);

	return (
		<Box
			display={'flex'}
			justifyContent={'space-between'}
			alignItems={'center'}
			width={1}
		>
			<Box sx={{ display: { xs: 'flex', md: 'none' } }} alignItems={'center'}>
				<Logo displayText />
			</Box>
			<Box sx={{ display: { xs: 'none', md: 'flex' } }} alignItems={'center'}>
				<Logo displayText />
				<Box marginLeft={3}>
					<Link href="/resources">
						<Button sx={{ color: '#2d3748' }} variant="text">
							Resources
						</Button>
					</Link>
				</Box>

				<Box marginLeft={3}>
					<Link href="/store">
						<Button sx={{ color: '#2d3748' }} variant="text">
							Store
						</Button>
					</Link>
				</Box>
			</Box>

			<Box sx={{ display: { xs: 'none', md: 'flex' } }} alignItems={'center'}>
				{renderAuthButtons()}
				<Box marginLeft={3}>
					<DarkModeToggler />
				</Box>
			</Box>

			<Box sx={{ display: { xs: 'flex', md: 'none' } }} alignItems={'center'}>
				<DarkModeToggler />
				<Button
					onClick={() => onSidebarOpen()}
					aria-label="Menu"
					variant={'text'}
					sx={{
						borderRadius: 1,
						minWidth: 'auto',
						padding: 1,
						marginLeft: 2,
						borderColor: alpha(theme.palette.divider, 0.2),
					}}
				>
					<ShortTextRounded />
				</Button>
			</Box>
			{renderAuthModal()}
		</Box>
	);
};

export default Topbar;
