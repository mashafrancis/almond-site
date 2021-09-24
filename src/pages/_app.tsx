/* eslint-disable react/prop-types */
import Head from 'next/head';
import { AppProps } from 'next/app';
import {useRouter} from "next/router";
import { EmotionCache } from '@emotion/utils';
import { CacheProvider } from '@emotion/react';
import { Provider } from 'react-redux';
import {useEffect} from "react";
import store from '../store';

import Page from '../components/Page';
import createEmotionCache from '../createEmotionCache';
import {initializeGA, logPageView} from "@utils/googleAnalytics";

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
	const router = useRouter()

	useEffect(() => {
		initializeGA();
		// `routeChangeComplete` won't run for the first page load unless the query string is
		// hydrated later on, so here we log a page view if this is the first render and
		// there's no query string
		if (!router.asPath.includes('?')) {
			logPageView()
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		// Listen for page changes after a navigation or when the query changes
		router.events.on('routeChangeComplete', logPageView)
		return () => {
			router.events.off('routeChangeComplete', logPageView)
		}
	}, [router.events])

	useEffect(() => {
		if ('serviceWorker' in navigator) {
			window.addEventListener('load', function () {
				navigator.serviceWorker.register('/sw.js').then(
					function (registration) {
						console.log(
							'Service Worker registration successful with scope: ',
							registration.scope
						)
					},
					function (err) {
						console.log('Service Worker registration failed: ', err)
					}
				)
			})
		}
	}, [])

	return (
		<Provider store={store}>
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
		</Provider>
	);
}
