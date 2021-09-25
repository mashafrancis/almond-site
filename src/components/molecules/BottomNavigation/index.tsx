import { useContext } from 'react';
// components
import {
	AdminBottomNavigationMenus,
	BottomNavigationMenus,
} from '@components/molecules';
// third party
import {
	BottomNavigation,
	BottomNavigationAction,
	AppBar,
	Divider,
} from '@mui/material';
// components
import { ComponentContext } from '../../../context/ComponentContext';
import { UserContext } from '../../../context/UserContext';

const PageBottomNavigation = (): JSX.Element => {
	const { selectedIndex, setSelectedIndex } = useContext(ComponentContext);
	const { isAdmin } = useContext(UserContext);

	const checkIsAdmin = () =>
		isAdmin ? AdminBottomNavigationMenus : BottomNavigationMenus;

	const handleChange = (event, newValue) => setSelectedIndex(newValue);

	return (
		<div data-testid="bottom-navigation">
			<AppBar position="fixed" elevation={0}>
				<Divider />
				<BottomNavigation
					value={selectedIndex}
					onChange={handleChange}
					showLabels
				>
					{checkIsAdmin().map((menuNav, index) => (
						<BottomNavigationAction
							key={menuNav.label}
							label={menuNav.label}
							icon={menuNav.icon}
							value={index}
						/>
					))}
				</BottomNavigation>
			</AppBar>
		</div>
	);
};

export default PageBottomNavigation;
