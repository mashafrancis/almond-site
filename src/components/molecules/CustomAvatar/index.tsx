import { Avatar, Menu, MenuItem, ListItemIcon } from '@mui/material';
import { useRouter } from 'next/router';
import fancyId from '@utils/fancyId';
import { useState, MouseEvent, useContext } from 'react';
import {
	ExitToApp,
	Help,
	Mood,
	OpenInNew,
	Settings,
} from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { logoutUser } from '@modules/user';
import { UserContext } from '@context/UserContext';

interface Props {
	hasMultipleRoles?: boolean;
	[x: string]: any;
}

const CustomAvatar = ({
	hasMultipleRoles = false,
	...rest
}: Props): JSX.Element => {
	const router = useRouter();
	const dispatch = useDispatch();
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const { name, photo } = useContext(UserContext);

	const handleToggleProfileMenu = (event: MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleProfileClose = () => setAnchorEl(null);

	const handleRoleModal = () => {
		handleProfileClose();
		// toggleRoleChangeDialog();
	};

	const logoutActiveUser = async (): Promise<void> => {
		await window.location.replace('/');
		dispatch(logoutUser());
	};

	const open = Boolean(anchorEl);

	let menuItems = [
		{ name: 'Settings', icon: <Settings />, link: 'account' },
		{ name: 'Help', icon: <Help />, link: 'help' },
		{ name: 'Send Feedback', icon: <OpenInNew />, link: 'send-feedback' },
	];

	if (location.pathname === '/') {
		menuItems = menuItems.filter((item) => {
			return item.name !== 'Settings';
		});
	}

	return (
		<>
			<Avatar
				alt={name}
				src={photo}
				onClick={handleToggleProfileMenu}
				aria-describedby="menu-popover"
				aria-controls="menu-popover"
				aria-haspopup="true"
				typeof="button"
				{...rest}
			/>
			<Menu
				id="menu-popover"
				style={{ top: '44px', right: '16px' }}
				anchorEl={anchorEl}
				open={open}
				keepMounted
				onClose={handleProfileClose}
			>
				{menuItems.map((item) => {
					const handleClick = () => {
						handleProfileClose();
						router.push(item.link);
					};
					return (
						<MenuItem key={fancyId()} onClick={handleClick}>
							<ListItemIcon style={{ minWidth: 40 }}>{item.icon}</ListItemIcon>
							{item.name}
						</MenuItem>
					);
				})}
				{location.pathname === '/dashboard' && hasMultipleRoles && (
					<MenuItem onClick={handleRoleModal}>
						<ListItemIcon style={{ minWidth: 40 }}>
							<Mood />
						</ListItemIcon>
						Change role
					</MenuItem>
				)}

				<MenuItem onClick={logoutActiveUser}>
					<ListItemIcon style={{ minWidth: 40 }}>
						<ExitToApp />
					</ListItemIcon>
					Logout
				</MenuItem>
			</Menu>
		</>
	);
};

export default CustomAvatar;
