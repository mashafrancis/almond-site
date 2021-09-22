import { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

interface Props {
	title: string;
	items: Array<PageItem>;
}

const NavItem = ({ title, items }: Props): JSX.Element => {
	const theme = useTheme();
	const [activeLink, setActiveLink] = useState('');
	useEffect(() => {
		setActiveLink(window && window.location ? window.location.pathname : '');
	}, []);

	return (
		<Box>
			<Typography
				variant="subtitle1"
				gutterBottom
				sx={{
					fontWeight: 700,
				}}
			>
				{title}
			</Typography>
			{items.map((item, i) => (
				<Box key={i} marginBottom={2}>
					<Typography
						variant="caption"
						color="primary"
						gutterBottom
						sx={{
							fontWeight: 700,
							textTransform: 'uppercase',
							display: 'block',
						}}
					>
						{item.groupTitle}
					</Typography>
					<Grid container>
						{item.pages.map((p, i) => (
							<Grid item xs={6} key={i}>
								<Link
									variant="body2"
									component={'a'}
									href={p.href}
									color={activeLink === p.href ? 'primary' : 'text.primary'}
									sx={{
										fontWeight: activeLink === p.href ? 600 : 400,
										textDecoration: 'none',
										'&:hover': {
											color: theme.palette.primary.dark,
										},
									}}
								>
									{p.title}
								</Link>
							</Grid>
						))}
					</Grid>
				</Box>
			))}
		</Box>
	);
};

export default NavItem;
