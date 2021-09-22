import React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import NavItem from './components/NavItem';

interface Props {
	pages: {
		landings: Array<PageItem>;
		secondary: Array<PageItem>;
		account: Array<PageItem>;
	};
	// eslint-disable-next-line @typescript-eslint/ban-types
	onClose: () => void;
}

const SidebarNav = ({ pages, onClose }: Props): JSX.Element => {
	const {
		landings: landingPages,
		secondary: secondaryPages,
		account: accountPages,
	} = pages;

	return (
		<Box>
			<Box
				display={'flex'}
				justifyContent={'flex-end'}
				onClick={() => onClose()}
			>
				<IconButton>
					<CloseIcon fontSize="small" />
				</IconButton>
			</Box>
			<Box paddingX={2} paddingBottom={2}>
				<Box>
					<NavItem title={'Landings'} items={landingPages} />
				</Box>
				<Divider sx={{ marginBottom: 2 }} />
				<Box>
					<NavItem title={'Pages'} items={secondaryPages} />
				</Box>
				<Divider sx={{ marginBottom: 2 }} />
				<Box>
					<NavItem title={'Account'} items={accountPages} />
				</Box>
				<Divider sx={{ marginBottom: 2 }} />
				<Box marginTop={1}>
					<Button
						variant="outlined"
						fullWidth
						component="a"
						href="/docs/introduction"
					>
						Documentation
					</Button>
				</Box>
				<Box marginTop={1}>
					<Button
						variant="contained"
						color="primary"
						fullWidth
						component="a"
						target="blank"
						href="https://material-ui.com/store/items/the-front-landing-page/"
					>
						Purchase now
					</Button>
				</Box>
			</Box>
		</Box>
	);
};

export default SidebarNav;
