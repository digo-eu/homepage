/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");
import createMDX from '@next/mdx'

/** @type {import("next").NextConfig} */
const config = {
	pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
	images: {
		remotePatterns: [{ hostname: "utfs.io" }],
	},
	typescript: {
		ignoreBuildErrors: true,
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
	reactStrictMode: true,
	swcMinify: true,
	output: "standalone",

};

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
});

export default withMDX(config);