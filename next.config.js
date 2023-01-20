/** @type {import('next').NextConfig} */
module.exports = {
	reactStrictMode: false, // true
	swcMinify: true,
	images: {
		loader: 'custom',
	},
	eslint: {
		// Warning: This allows production builds to successfully complete even if
		// your project has ESLint errors.
		ignoreDuringBuilds: true,
	},
}
