import babel from 'rollup-plugin-babel'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import postcss from 'rollup-plugin-postcss'
import filesize from 'rollup-plugin-filesize'
import autoprefixer from 'autoprefixer'
import localResolve from 'rollup-plugin-local-resolve'
import json from 'rollup-plugin-json'

import pkg from './package.json'

const dependencies = Object.keys(require('./package.json').dependencies)

const config = {
  input: 'src/js/index.js',
  output: [
    {
      file: pkg.browser,
      format: 'umd',
      name: 'ReactResume',
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
        'resume-schema': 'resumeSchema',
        grommet: 'grommet',
      },
    },
    {
      file: pkg.main,
      format: 'cjs',
      name: 'ReactResume',
    },
    {
      file: pkg.module,
      format: 'es',
    },
  ],
  external: dependencies,

  plugins: [
    json(),
    peerDepsExternal(),
    postcss({ extract: true, plugins: [autoprefixer] }),
    babel({ exclude: 'node_modules/**' }),
    localResolve(),
    resolve(),
    commonjs(),
    filesize(),
  ],
}

export default config
