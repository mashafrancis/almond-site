// next.config.js
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

module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
    runtimeCaching,
    // fallbacks: {
    //   image: '/static/images/fallback.png',
    // }
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
	}
});
