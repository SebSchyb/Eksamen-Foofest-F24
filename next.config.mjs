/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "*.unsplash.com",
			},

			{
				protocol: "https",
				hostname: "*mgp-allstars-2009-server.glitch.me",
			},
			{
				protocol: "https",
				hostname: "*psychedelic-sweltering-dracorex.glitch.me",
			},
			{
				protocol: "http",
				hostname: "localhost",
				port: "8080",
				pathname: "/**",
			},
		],
	},
};

export default nextConfig;
