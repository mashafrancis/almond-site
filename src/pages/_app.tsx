/* eslint-disable react/prop-types */
import Head from 'next/head';
import { AppProps } from 'next/app';
import { EmotionCache } from '@emotion/utils';
import { CacheProvider } from '@emotion/react';

import Page from '../components/Page';
import createEmotionCache from '../createEmotionCache';

import 'react-lazy-load-image-component/src/effects/blur.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'aos/dist/aos.css';
import 'assets/css/index.css';
import 'assets/css/fonts.css';

interface Props extends AppProps {
	emotionCache?: EmotionCache;
}

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function App({
	Component,
	pageProps,
	emotionCache = clientSideEmotionCache,
}: Props): JSX.Element {
	return (
		<CacheProvider value={emotionCache}>
			<Head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, shrink-to-fit=no"
				/>
				<title>almond</title>
			</Head>
			<Page>
				<Component {...pageProps} />
			</Page>
		</CacheProvider>
	);
}
