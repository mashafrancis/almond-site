import { ReactNode } from 'react';
import { MenuContent } from '@components/atoms';
import { BottomNavigation } from '@components/molecules';
import { Topbar } from './components';
import { Drawer, Theme, Toolbar, useMediaQuery } from '@mui/material';
import Container from '@components/Container';

// const useStyles = makeStyles((theme: Theme) => ({
// 	root: {
// 		height: '100vh',
// 		background: theme.palette.alternate.main,
// 		[theme.breakpoints.up('md')]: {
// 			display: 'flex',
// 		},
// 	},
// 	content: {
// 		flexGrow: 2,
// 	},
// 	container: {
// 		paddingLeft: 0,
// 		paddingRight: 0,
// 		[theme.breakpoints.down('md')]: {
// 			paddingLeft: 0,
// 			paddingRight: 0,
// 			marginTop: 8,
// 			marginBottom: 30,
// 		},
// 	},
// 	drawer: {
// 		flexShrink: 0,
// 		whiteSpace: 'nowrap',
// 	},
// 	drawerPaper: {
// 		// backgroundColor: 'rgba(66, 133, 244, 0.05)',
// 		position: 'relative',
// 		border: 'none',
// 	},
// }));

interface Props {
	children: ReactNode;
}

const Dashboard = ({ children }: Props): JSX.Element => {
	const hidden = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'));

	return (
		<>
			<Topbar onSidebarOpen={() => false} />
			{hidden && (
				<Drawer variant="permanent">
					<Toolbar />
					<MenuContent />
				</Drawer>
			)}
			<main>
				<Container maxWidth="xl">
					<Toolbar />
					{children}
				</Container>
			</main>
			{hidden ? null : <BottomNavigation />}
		</>
	);
};

export default Dashboard;
