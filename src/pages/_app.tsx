/* eslint-disable react/prop-types */
import Head from 'next/head';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { EmotionCache } from '@emotion/utils';
import { CacheProvider } from '@emotion/react';
import { useEffect } from 'react';
import NProgress from 'nprogress';
import { wrapper } from '@lib/store';
// components
import Page from '../components/Page';
import createEmotionCache from '../createEmotionCache';
import { initializeGA, logPageView } from '@utils/googleAnalytics';
import { ComponentProvider } from '@context/ComponentContext';
// styles
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'aos/dist/aos.css';
import 'assets/css/index.css';
import 'assets/css/fonts.css';
import ErrorBoundaryPage from '../views/ErrorBoundaryPage';
import { ErrorBoundary } from '@components/molecules/ErrorBoundary';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../apolloConfig';
import { DefaultSeo } from 'next-seo';
import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryClient, QueryClientProvider } from 'react-query';
import { IS_DEV } from '../config/env';

interface Props extends AppProps {
	emotionCache?: EmotionCache;
}

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			retry: !IS_DEV,
			refetchIntervalInBackground: !IS_DEV,
			refetchOnWindowFocus: !IS_DEV,
		},
	},
});

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function App({
	Component,
	pageProps,
	emotionCache = clientSideEmotionCache,
}: Props): JSX.Element {
	const router = useRouter();
	const apolloClient = useApollo(pageProps);

	useEffect(() => {
		initializeGA();
		// `routeChangeComplete` won't run for the first page load unless the query string is
		// hydrated later on, so here we log a page view if this is the first render and
		// there's no query string
		if (!router.asPath.includes('?')) {
			logPageView();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		// Listen for page changes after a navigation or when the query changes
		router.events.on('routeChangeComplete', logPageView);
		return () => {
			router.events.off('routeChangeComplete', logPageView);
		};
	}, [router.events]);

	useEffect(() => {
		const handleStart = () => {
			NProgress.start();
		};
		const handleStop = () => {
			NProgress.done();
		};

		router.events.on('routeChangeStart', handleStart);
		router.events.on('routeChangeComplete', handleStop);
		router.events.on('routeChangeError', handleStop);

		return () => {
			router.events.off('routeChangeStart', handleStart);
			router.events.off('routeChangeComplete', handleStop);
			router.events.off('routeChangeError', handleStop);
		};
	}, [router]);

	return (
		<CacheProvider value={emotionCache}>
			<Head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, shrink-to-fit=no"
				/>
				<title>almond</title>
			</Head>
			<ErrorBoundary
				FallbackComponent={ErrorBoundaryPage}
				onReset={() => window.location.replace('/')}
			>
				<QueryClientProvider client={queryClient}>
					<DefaultSeo
						defaultTitle="Almond"
						titleTemplate="%s • Almond"
						description="🛍 A Shopping Cart built with TypeScript, Emotion, Next.js, React.js, React Query, Shopify Storefront GraphQL API, ... and Material UI."
					/>
					<ComponentProvider>
						<Page>
							<Component {...pageProps} />
						</Page>
					</ComponentProvider>
					<ReactQueryDevtools initialIsOpen={false} />
				</QueryClientProvider>
			</ErrorBoundary>
		</CacheProvider>
	);
}

export default wrapper.withRedux(App);
