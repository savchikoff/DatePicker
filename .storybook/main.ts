import path from 'path';
import type { StorybookConfig } from '@storybook/react-webpack5';
import { TsconfigPathsPlugin } from "tsconfig-paths-webpack-plugin" // eslint-disable-line import/no-extraneous-dependencies

const config: StorybookConfig = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-onboarding',
		'@storybook/addon-interactions',
	],
	framework: {
		name: '@storybook/react-webpack5',
		options: {
			builder: {
				useSWC: true,
			},
		},
	},
	docs: {
		autodocs: 'tag',
	},
	webpackFinal: async (config) => {
		if (config.resolve) {
			config.resolve.plugins = [
				...(config.resolve.plugins || []),
				new TsconfigPathsPlugin({
					extensions: config.resolve.extensions,
				}),
			]
			config.resolve.alias = {
				...config.resolve.alias,
				react: path.resolve(__dirname, '../node_modules/react'),
				'react-dom': path.resolve(__dirname, '../node_modules/react-dom'),
			};
		}
		return config
	},
};
export default config;
