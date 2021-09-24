import { useState, useEffect, createContext, useMemo, ReactNode } from 'react';
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import CssBaseline from '@mui/material/CssBaseline';
import getTheme from 'theme';
import AOS from 'aos';
import { PaletteMode } from '@mui/material';

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

interface Props {
	children: ReactNode;
}

export default function Page({ children }: Props): JSX.Element {
	const [mode, setMode] = useState<'light' | 'dark'>('light');
	useEffect(() => {
		// Remove the server-side injected CSS.
		const jssStyles = document.querySelector('#jss-server-side');
		if (jssStyles) {
			jssStyles.parentElement?.removeChild(jssStyles);
		}

		AOS.init({
			once: true,
			delay: 50,
			duration: 500,
			easing: 'ease-in-out',
		});
	}, []);

	const colorMode = useMemo(
		() => ({
			toggleColorMode: () => {
				setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
			},
		}),
		[]
	);

	const theme = useMemo(() => getTheme(mode as PaletteMode), [mode]);

	return (
		<StyledEngineProvider injectFirst>
			<ColorModeContext.Provider value={colorMode}>
				<ThemeProvider theme={theme}>
					<style jsx>{`
						a {
							margin: 0 10px 0 0;
						}
					`}</style>
					{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
					<CssBaseline />
					<Paper elevation={0}>{children}</Paper>
				</ThemeProvider>
			</ColorModeContext.Provider>
		</StyledEngineProvider>
	);
}
