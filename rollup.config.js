import alias from '@rollup/plugin-alias';
import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import svgr from '@svgr/rollup';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import typescript from 'rollup-plugin-typescript2';

import packageJson from './package.json';

export default {
	input: 'src/index.ts',
	output: [
		{
			file: packageJson.main,
			format: 'cjs',
			sourcemap: true,
		},
		{
			file: packageJson.module,
			format: 'esm',
			sourcemap: true,
		},
	],
	plugins: [
		svgr(),
		alias({
			entries: [
				{
					find: "@/",
					replacement: "./src/",
				},
			],
		}),
		peerDepsExternal(),
		babel({ babelHelpers: 'bundled' }),
		resolve(),
		commonjs(),
		typescript({ useTsconfigDeclarationDir: true }),
		terser()
	],
};
