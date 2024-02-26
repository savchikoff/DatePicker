import alias from '@rollup/plugin-alias';
import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import svgr from '@svgr/rollup';
import copy from 'rollup-plugin-copy';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import tsConfigPaths from 'rollup-plugin-tsconfig-paths';
import typescript from 'rollup-plugin-typescript2';

import packageJson from './package.json';

export default {
	input: 'src/index.ts',
	output: [
		{
			file: packageJson.main,
			format: 'cjs',
			sourcemap: true
		},
		{
			file: packageJson.module,
			format: 'esm',
			sourcemap: true
		},
	],
	plugins: [
		tsConfigPaths(),
		svgr(),
		copy({
			targets: [
				{ src: 'src/assets/*', dest: 'build/assets' },
			],
		}),
		peerDepsExternal(),
		babel({ babelHelpers: 'bundled' }),
		resolve(),
		alias({
			entries: [
				{
					find: "@/",
					replacement: "./src/",
				},
			],
		}),
		commonjs(),
		typescript({ useTsconfigDeclarationDir: true }),
		terser()
	],
};
