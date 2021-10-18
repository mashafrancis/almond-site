if (!self.define) {
	const e = (e) => {
			'require' !== e && (e += '.js');
			let s = Promise.resolve();
			return (
				t[e] ||
					(s = new Promise(async (s) => {
						if ('document' in self) {
							const t = document.createElement('script');
							(t.src = e), document.head.appendChild(t), (t.onload = s);
						} else importScripts(e), s();
					})),
				s.then(() => {
					if (!t[e]) throw new Error(`Module ${e} didn’t register its module`);
					return t[e];
				})
			);
		},
		s = (s, t) => {
			Promise.all(s.map(e)).then((e) => t(1 === e.length ? e[0] : e));
		},
		t = { require: Promise.resolve(s) };
	self.define = (s, n, a) => {
		t[s] ||
			(t[s] = Promise.resolve().then(() => {
				let t = {};
				const i = { uri: location.origin + s.slice(1) };
				return Promise.all(
					n.map((s) => {
						switch (s) {
							case 'exports':
								return t;
							case 'module':
								return i;
							default:
								return e(s);
						}
					})
				).then((e) => {
					const s = a(...e);
					return t.default || (t.default = s), t;
				});
			}));
	};
}
define('./sw.js', ['./workbox-4a677df8'], function (e) {
	'use strict';
	importScripts(
		'worker-V9N965x4m4UD6lNKtmsYH.js',
		'fallback-V9N965x4m4UD6lNKtmsYH.js'
	),
		self.skipWaiting(),
		e.clientsClaim(),
		e.precacheAndRoute(
			[
				{
					url: '/_next/static/V9N965x4m4UD6lNKtmsYH/_buildManifest.js',
					revision: 'V9N965x4m4UD6lNKtmsYH',
				},
				{
					url: '/_next/static/V9N965x4m4UD6lNKtmsYH/_ssgManifest.js',
					revision: 'V9N965x4m4UD6lNKtmsYH',
				},
				{
					url: '/_next/static/chunks/0f1ac474-be488b39f34b3ab2890c.js',
					revision: 'V9N965x4m4UD6lNKtmsYH',
				},
				{
					url: '/_next/static/chunks/189-4fdd4665a94ddfcd7f24.js',
					revision: 'V9N965x4m4UD6lNKtmsYH',
				},
				{
					url: '/_next/static/chunks/193-64d043a8ff5533fe3b76.js',
					revision: 'V9N965x4m4UD6lNKtmsYH',
				},
				{
					url: '/_next/static/chunks/284-9dbf1a60516fceb99fe2.js',
					revision: 'V9N965x4m4UD6lNKtmsYH',
				},
				{
					url: '/_next/static/chunks/29e84a2a-dfe7f707d0193a589bc1.js',
					revision: 'V9N965x4m4UD6lNKtmsYH',
				},
				{
					url: '/_next/static/chunks/33-41ec7376399afbb7d9bb.js',
					revision: 'V9N965x4m4UD6lNKtmsYH',
				},
				{
					url: '/_next/static/chunks/36bcf0ca-1355b17f7966468c2cb0.js',
					revision: 'V9N965x4m4UD6lNKtmsYH',
				},
				{
					url: '/_next/static/chunks/410-c0704c2a1813f245e332.js',
					revision: 'V9N965x4m4UD6lNKtmsYH',
				},
				{
					url: '/_next/static/chunks/415-a5d1dc47b3e4b1a57406.js',
					revision: 'V9N965x4m4UD6lNKtmsYH',
				},
				{
					url: '/_next/static/chunks/447-351ac925193d29579ddd.js',
					revision: 'V9N965x4m4UD6lNKtmsYH',
				},
				{
					url: '/_next/static/chunks/478-424507761ba074ac0f44.js',
					revision: 'V9N965x4m4UD6lNKtmsYH',
				},
				{
					url: '/_next/static/chunks/4b358913-3c9978cd1663e51fe5a6.js',
					revision: 'V9N965x4m4UD6lNKtmsYH',
				},
				{
					url: '/_next/static/chunks/52-2730ba2669074e8787eb.js',
					revision: 'V9N965x4m4UD6lNKtmsYH',
				},
				{
					url: '/_next/static/chunks/543-b50e579ed625a7a81df7.js',
					revision: 'V9N965x4m4UD6lNKtmsYH',
				},
				{
					url: '/_next/static/chunks/652-e7db1b68bd050d4418dc.js',
					revision: 'V9N965x4m4UD6lNKtmsYH',
				},
				{
					url: '/_next/static/chunks/668-2af22b3bc8bf61b7053f.js',
					revision: 'V9N965x4m4UD6lNKtmsYH',
				},
				{
					url: '/_next/static/chunks/679-d7ff51076ead03569954.js',
					revision: 'V9N965x4m4UD6lNKtmsYH',
				},
				{
					url: '/_next/static/chunks/738-62e91d530c75b094a745.js',
					revision: 'V9N965x4m4UD6lNKtmsYH',
				},
				{
					url: '/_next/static/chunks/758-292d820eb17904e515b9.js',
					revision: 'V9N965x4m4UD6lNKtmsYH',
				},
				{
					url: '/_next/static/chunks/785-13ad6595fad8487818bd.js',
					revision: 'V9N965x4m4UD6lNKtmsYH',
				},
				{
					url: '/_next/static/chunks/878.5e1a09a5e4f7bc8823a2.js',
					revision: 'V9N965x4m4UD6lNKtmsYH',
				},
				{
					url: '/_next/static/chunks/883-c9e62b4a64213d33d0ce.js',
					revision: 'V9N965x4m4UD6lNKtmsYH',
				},
				{
					url: '/_next/static/chunks/949.a80d862e7fdbeb0ad799.js',
					revision: 'V9N965x4m4UD6lNKtmsYH',
				},
				{
					url: '/_next/static/chunks/950-5ac4ebe377fc6ca2ed5d.js',
					revision: 'V9N965x4m4UD6lNKtmsYH',
				},
				{
					url: '/_next/static/chunks/framework-3af989d3dbeb77832f99.js',
					revision: 'V9N965x4m4UD6lNKtmsYH',
				},
				{
					url: '/_next/static/chunks/main-abe129420f208469e34b.js',
					revision: 'V9N965x4m4UD6lNKtmsYH',
				},
				{
					url: '/_next/static/chunks/pages/404-6c9cdb8b9fe2ef732002.js',
					revision: 'V9N965x4m4UD6lNKtmsYH',
				},
				{
					url: '/_next/static/chunks/pages/_app-791ab41719596f4bd851.js',
					revision: 'V9N965x4m4UD6lNKtmsYH',
				},
				{
					url: '/_next/static/chunks/pages/_error-1b72ce1cdc7dc1ffa79e.js',
					revision: 'V9N965x4m4UD6lNKtmsYH',
				},
				{
					url: '/_next/static/chunks/pages/_offline-3b3bc4ee897c5b870abd.js',
					revision: 'V9N965x4m4UD6lNKtmsYH',
				},
				{
					url: '/_next/static/chunks/pages/account-760f6e01fec21c5dd38d.js',
					revision: 'V9N965x4m4UD6lNKtmsYH',
				},
				{
					url: '/_next/static/chunks/pages/blog-article-0c9b069ed5df3fd382c5.js',
					revision: 'V9N965x4m4UD6lNKtmsYH',
				},
				{
					url: '/_next/static/chunks/pages/blog-newsroom-6c4b3e77a6b6736daa5b.js',
					revision: 'V9N965x4m4UD6lNKtmsYH',
				},
				{
					url: '/_next/static/chunks/pages/blog-search-620f112eac8361331645.js',
					revision: 'V9N965x4m4UD6lNKtmsYH',
				},
				{
					url: '/_next/static/chunks/pages/company-terms-792deefa347c312ef088.js',
					revision: 'V9N965x4m4UD6lNKtmsYH',
				},
				{
					url: '/_next/static/chunks/pages/dashboard-72485576769e4953f364.js',
					revision: 'V9N965x4m4UD6lNKtmsYH',
				},
				{
					url: '/_next/static/chunks/pages/home-7409b2136bdae86421c5.js',
					revision: 'V9N965x4m4UD6lNKtmsYH',
				},
				{
					url: '/_next/static/chunks/pages/index-3e3e1f06c0ace23cef8f.js',
					revision: 'V9N965x4m4UD6lNKtmsYH',
				},
				{
					url: '/_next/static/chunks/pages/my-device-7177bd37dcc5b1fe30fd.js',
					revision: 'V9N965x4m4UD6lNKtmsYH',
				},
				{
					url: '/_next/static/chunks/pages/store-135f3ff07cf27e22e7dd.js',
					revision: 'V9N965x4m4UD6lNKtmsYH',
				},
				{
					url: '/_next/static/chunks/polyfills-a40ef1678bae11e696dba45124eadd70.js',
					revision: 'V9N965x4m4UD6lNKtmsYH',
				},
				{
					url: '/_next/static/chunks/webpack-0579e4cd1bd5a006301d.js',
					revision: 'V9N965x4m4UD6lNKtmsYH',
				},
				{
					url: '/_next/static/css/553bfc8186ad0fbe9c52.css',
					revision: 'V9N965x4m4UD6lNKtmsYH',
				},
				{
					url: '/_next/static/media/ajax-loader.fb6f3c230cb846e25247dfaa1da94d8f.gif',
					revision: 'V9N965x4m4UD6lNKtmsYH',
				},
				{
					url: '/_next/static/media/sanfranciscodisplay-bold-webfont.eed30cdc0177edbcd6d3104e5db90e64.woff',
					revision: 'V9N965x4m4UD6lNKtmsYH',
				},
				{
					url: '/_next/static/media/sanfranciscodisplay-medium-webfont.80f11b1350ed94319f6e89ab9b030797.woff',
					revision: 'V9N965x4m4UD6lNKtmsYH',
				},
				{
					url: '/_next/static/media/sanfranciscodisplay-regular-webfont.aaaf0ea48fc61d23c842d6343f3a7538.woff',
					revision: 'V9N965x4m4UD6lNKtmsYH',
				},
				{
					url: '/_next/static/media/sanfranciscodisplay-semibold-webfont.9eb20167a53cc29eb615a2fe58667132.woff',
					revision: 'V9N965x4m4UD6lNKtmsYH',
				},
				{
					url: '/_next/static/media/sanfranciscodisplay-thin-webfont.695e7f778788c2565df1a291209c08b0.woff',
					revision: 'V9N965x4m4UD6lNKtmsYH',
				},
				{
					url: '/_next/static/media/sanfranciscodisplay-ultralight-webfont.35e87e7a8451daf8d12a0a6613a42c53.woff',
					revision: 'V9N965x4m4UD6lNKtmsYH',
				},
				{
					url: '/_next/static/media/slick.2630a3e3eab21c607e21576571b95b9d.svg',
					revision: 'V9N965x4m4UD6lNKtmsYH',
				},
				{
					url: '/_next/static/media/slick.295183786cd8a138986521d9f388a286.woff',
					revision: 'V9N965x4m4UD6lNKtmsYH',
				},
				{
					url: '/_next/static/media/slick.a4e97f5a2a64f0ab132323fbeb33ae29.eot',
					revision: 'V9N965x4m4UD6lNKtmsYH',
				},
				{
					url: '/_next/static/media/slick.c94f7671dcc99dce43e22a89f486f7c2.ttf',
					revision: 'V9N965x4m4UD6lNKtmsYH',
				},
				{ url: '/_offline', revision: 'V9N965x4m4UD6lNKtmsYH' },
				{ url: '/favicon.ico', revision: '67ce0ba915fb6292b5895ed92888d7ca' },
				{
					url: '/manifest.json',
					revision: 'dc3a39a8e2bc2c22fe3cc9530fba1cd5',
				},
				{
					url: '/nprogress.css',
					revision: 'e0fc6586642593fbfe8b202bb20d650a',
				},
				{ url: '/robots.txt', revision: '466f5d83d25c9578375e389c93e4cac5' },
				{
					url: '/static/images/fallback.png',
					revision: '38e7c435a0fe48df4e951a158f1d213c',
				},
			],
			{ ignoreURLParametersMatching: [] }
		),
		e.cleanupOutdatedCaches(),
		e.registerRoute(
			'/',
			new e.NetworkFirst({
				cacheName: 'start-url',
				plugins: [
					{
						cacheWillUpdate: async ({
							request: e,
							response: s,
							event: t,
							state: n,
						}) =>
							s && 'opaqueredirect' === s.type
								? new Response(s.body, {
										status: 200,
										statusText: 'OK',
										headers: s.headers,
								  })
								: s,
					},
					{ handlerDidError: async ({ request: e }) => self.fallback(e) },
				],
			}),
			'GET'
		),
		e.registerRoute(
			/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
			new e.CacheFirst({
				cacheName: 'google-fonts-webfonts',
				plugins: [
					new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
					{ handlerDidError: async ({ request: e }) => self.fallback(e) },
				],
			}),
			'GET'
		),
		e.registerRoute(
			/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
			new e.StaleWhileRevalidate({
				cacheName: 'google-fonts-stylesheets',
				plugins: [
					new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
					{ handlerDidError: async ({ request: e }) => self.fallback(e) },
				],
			}),
			'GET'
		),
		e.registerRoute(
			/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
			new e.StaleWhileRevalidate({
				cacheName: 'static-font-assets',
				plugins: [
					new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
					{ handlerDidError: async ({ request: e }) => self.fallback(e) },
				],
			}),
			'GET'
		),
		e.registerRoute(
			/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
			new e.StaleWhileRevalidate({
				cacheName: 'static-image-assets',
				plugins: [
					new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
					{ handlerDidError: async ({ request: e }) => self.fallback(e) },
				],
			}),
			'GET'
		),
		e.registerRoute(
			/\/_next\/image\?url=.+$/i,
			new e.StaleWhileRevalidate({
				cacheName: 'next-image',
				plugins: [
					new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
					{ handlerDidError: async ({ request: e }) => self.fallback(e) },
				],
			}),
			'GET'
		),
		e.registerRoute(
			/\.(?:mp3|wav|ogg)$/i,
			new e.CacheFirst({
				cacheName: 'static-audio-assets',
				plugins: [
					new e.RangeRequestsPlugin(),
					new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
					{ handlerDidError: async ({ request: e }) => self.fallback(e) },
				],
			}),
			'GET'
		),
		e.registerRoute(
			/\.(?:mp4)$/i,
			new e.CacheFirst({
				cacheName: 'static-video-assets',
				plugins: [
					new e.RangeRequestsPlugin(),
					new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
					{ handlerDidError: async ({ request: e }) => self.fallback(e) },
				],
			}),
			'GET'
		),
		e.registerRoute(
			/\.(?:js)$/i,
			new e.StaleWhileRevalidate({
				cacheName: 'static-js-assets',
				plugins: [
					new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
					{ handlerDidError: async ({ request: e }) => self.fallback(e) },
				],
			}),
			'GET'
		),
		e.registerRoute(
			/\.(?:css|less)$/i,
			new e.StaleWhileRevalidate({
				cacheName: 'static-style-assets',
				plugins: [
					new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
					{ handlerDidError: async ({ request: e }) => self.fallback(e) },
				],
			}),
			'GET'
		),
		e.registerRoute(
			/\/_next\/data\/.+\/.+\.json$/i,
			new e.StaleWhileRevalidate({
				cacheName: 'next-data',
				plugins: [
					new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
					{ handlerDidError: async ({ request: e }) => self.fallback(e) },
				],
			}),
			'GET'
		),
		e.registerRoute(
			/\.(?:json|xml|csv)$/i,
			new e.NetworkFirst({
				cacheName: 'static-data-assets',
				plugins: [
					new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
					{ handlerDidError: async ({ request: e }) => self.fallback(e) },
				],
			}),
			'GET'
		),
		e.registerRoute(
			({ url: e }) => {
				if (!(self.origin === e.origin)) return !1;
				const s = e.pathname;
				return !s.startsWith('/api/auth/') && !!s.startsWith('/api/');
			},
			new e.NetworkFirst({
				cacheName: 'apis',
				networkTimeoutSeconds: 10,
				plugins: [
					new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
					{ handlerDidError: async ({ request: e }) => self.fallback(e) },
				],
			}),
			'GET'
		),
		e.registerRoute(
			({ url: e }) => {
				if (!(self.origin === e.origin)) return !1;
				return !e.pathname.startsWith('/api/');
			},
			new e.NetworkFirst({
				cacheName: 'others',
				networkTimeoutSeconds: 10,
				plugins: [
					new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
					{ handlerDidError: async ({ request: e }) => self.fallback(e) },
				],
			}),
			'GET'
		),
		e.registerRoute(
			({ url: e }) => !(self.origin === e.origin),
			new e.NetworkFirst({
				cacheName: 'cross-origin',
				networkTimeoutSeconds: 10,
				plugins: [
					new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
					{ handlerDidError: async ({ request: e }) => self.fallback(e) },
				],
			}),
			'GET'
		);
});
