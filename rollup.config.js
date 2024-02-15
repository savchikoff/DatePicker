import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import terser from '@rollup/plugin-terser';
import alias from '@rollup/plugin-alias';
import { babel } from '@rollup/plugin-babel';
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
		alias({
			entries: [
				{ find: 'utils', replacement: './src/utils' },
				{ find: 'decorators', replacement: './src/decorators' }
			]
		}),
		peerDepsExternal(),
		babel({ babelHelpers: 'bundled' }),
		resolve(),
		commonjs(),
		typescript({ useTsconfigDeclarationDir: true }),
		terser()
	],
};
