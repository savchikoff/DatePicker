import type { StorybookConfig } from '@storybook/react-webpack5';
import path from 'node:path';

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
	// webpackFinal: async (config) => {
	// 	config.resolve = {
	// 		...config.resolve,
	// 		alias: {
	// 			...config?.resolve?.alias,
	// 			"@assets": path.resolve(__dirname, "../src/assets"),
	// 			"@components": path.resolve(__dirname, "../src/components"),
	// 			"@constants": path.resolve(__dirname, "../src/constants"),
	// 			"@decorators": path.resolve(__dirname, "../src/decorators"),
	// 			"@GlobalStyles": path.resolve(__dirname, "../src/GlobalStyles"),
	// 			"@helpers": path.resolve(__dirname, "../src/helpers"),
	// 			"@hooks": path.resolve(__dirname, "../src/hooks"),
	// 			"@providers": path.resolve(__dirname, "../src/providers")
	// 		},
	// 	};

	// 	return config;
	// },
};
export default config;
