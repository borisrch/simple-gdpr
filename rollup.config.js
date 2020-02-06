import { uglify } from 'rollup-plugin-uglify';
import babel from 'rollup-plugin-babel';

export default [
  {
    input: 'src/simple-gdpr.js',
    output: {
      file: 'dist/simplegdpr.umd.js',
      format: 'umd',
      name: 'SimpleGDPR',
    },
    plugins:[
      babel({
        babelrc: false,
        presets: [['@babel/preset-env', { modules: false }]],
        exclude: 'node_modules/**',
      }),
      uglify()
    ]
  },
  {
    input: 'src/simple-gdpr.js',
    output: {
      file: 'dist/simplegdpr.es.js',
      format: 'es',
      name: 'SimpleGDPR',
    },
  },
  // {
  //   input: 'dev/playground.js',
  //   output: {
  //     file: 'dev/dist-playground.js',
  //     format: 'iife',
  //     name: 'playground',
  //   },
  // }
]
