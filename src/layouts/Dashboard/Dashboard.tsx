import { cloneElement, ReactElement, ReactNode } from 'react';
import { MenuContent } from '@components/atoms';
import { Topbar } from './components';
import {
	AppBar,
	Box,
	Drawer,
	Slide,
	Theme,
	Toolbar,
	useMediaQuery,
	useScrollTrigger,
} from '@mui/material';
import Container from '@components/Container';
import { BottomNavigation } from '@components/molecules';
import { alpha, useTheme } from '@mui/material/styles';

interface AppBarOnScrollProps {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	children: ReactElement<any, any>;
	window?: () => Window;
	isMobileView?: boolean;
}

function ElevationScroll({
	children,
	window,
	isMobileView,
}: AppBarOnScrollProps) {
	// Note that you normally won't need to set the window ref as useScrollTrigger
	// will default to window.
	// This is only being set here because the demo is in an iframe.
	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0,
		target: window ? window() : undefined,
	});

	return isMobileView ? (
		<Slide appear={false} direction="down" in={!trigger}>
			{children}
		</Slide>
	) : (
		cloneElement(children, {
			elevation: trigger ? 4 : 0,
		})
	);
}

interface Props {
	children: ReactNode;
}

const Dashboard = ({ children }: Props): JSX.Element => {
	const hidden = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'));
	const theme = useTheme();
	const isMd = useMediaQuery(theme.breakpoints.up('md'), {
		defaultMatches: true,
	});

	return (
		<Box
			sx={{
				background: theme.palette.alternate.main,
				height: '100vh',
			}}
		>
			<ElevationScroll isMobileView={isMd}>
				<AppBar
					position={'fixed'}
					sx={{
						backgroundColor: theme.palette.background.paper,
						zIndex: theme.zIndex.drawer + 1,
						borderBottom: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
					}}
					elevation={0}
				>
					<Toolbar>
						<Container
							maxWidth={1}
							paddingY={{ xs: 1, sm: 1.5 }}
							paddingX={{ xs: 0 }}
						>
							<Topbar />
						</Container>
					</Toolbar>
				</AppBar>
			</ElevationScroll>
			{hidden && (
				<Drawer variant="permanent">
					<Toolbar />
					<MenuContent />
				</Drawer>
			)}
			<main>
				<Box height={{ xs: 58, sm: 66 }} />
				<Box
					display="flex"
					flex="1 1 auto"
					overflow="hidden"
					paddingLeft={{ md: '10%' }} // Replace with 148px if it doesn't work
				>
					<Box display="flex" flex="1 1 auto" overflow="hidden">
						<Box flex="1 1 auto" height="100%" overflow="auto">
							{children}
						</Box>
					</Box>
				</Box>
			</main>
			<Container>{hidden ? null : <BottomNavigation />}</Container>
		</Box>
	);
};

export default Dashboard;