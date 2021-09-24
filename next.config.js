// next.config.js
const withOffline = require('next-offline');
const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');
const securityHeaders = [
	{
		key: 'X-Content-Type-Options',
		value: 'nosniff',
	},
	{
		key: 'Permissions-Policy',
		value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
	},
	{
		key: 'X-Frame-Options',
		value: 'SAMEORIGIN',
	},
	{
		key: 'X-XSS-Protection',
		value: '1; mode=block',
	},
	{
		key: 'X-DNS-Prefetch-Control',
		value: 'on',
	},
];

module.exports = withPWA(withOffline({
  pwa: {
    dest: 'public',
    runtimeCaching,
  },
	images: {
		// disableStaticImages: true,
		domains: ['static.almondhydroponics.com', 'assets.maccarianagency.com'],
	},
	async headers() {
		return [
			{
				source: '/(.*)',
				headers: securityHeaders,
			},
		];
	},
    workboxOpts: {
      swDest: process.env.NEXT_EXPORT
        ? 'service-worker.js'
        : 'static/service-worker.js',
      runtimeCaching: [
        {
          urlPattern: /^https?.*/,
          handler: 'NetworkFirst',
          options: {
            cacheName: 'offlineCache',
            expiration: {
              maxEntries: 200,
            },
          },
        },
      ],
    },
    async rewrites() {
      return [
        {
          source: '/service-worker.js',
          destination: '/_next/static/service-worker.js',
        },
      ]
    },
}));
