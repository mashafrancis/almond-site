import { Tab, Tabs } from '@mui/material';
import { styled } from '@mui/styles';
import { createTheme } from '@mui/material/styles';

interface MenuTabProps {
	label: string;
	icon: any;
}

const theme = createTheme();

const MenuTabs = styled(Tabs)({
	root: {
		// borderBottom: '1px solid #e8e8e8',
	},
	indicator: {
		backgroundColor: theme.palette.primary.main,
		display: 'none',
	},
});

const MenuTab = styled((props: MenuTabProps) => (
	<Tab disableRipple {...props} />
))({
	root: {
		marginBottom: 10,
		marginTop: 10,
		textTransform: 'none',
		minWidth: 72,
		fontWeight: theme.typography.fontWeightMedium,
		fontSize: 13,
		// marginRight: theme.spacing(4),
		fontFamily: [
			'"Google Sans"',
			'Roboto',
			'"Helvetica Neue"',
			'sans-serif',
		].join(','),
		'&:hover': {
			color: theme.palette.primary.main,
			backgroundColor: theme.palette.background.level1,
			opacity: 1,
			borderRadius: theme.shape.borderRadius,
		},
		'&$selected': {
			color: theme.palette.primary.main,
			fontWeight: theme.typography.fontWeightMedium,
			backgroundColor: theme.palette.background.level2,
			borderRadius: theme.shape.borderRadius,
		},
		'&:focus': {
			color: theme.palette.primary.main,
		},
	},
	selected: {},
});

export { MenuTabs, MenuTab };
