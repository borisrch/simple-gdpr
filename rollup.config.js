import { uglify } from 'rollup-plugin-uglify';
import babel from 'rollup-plugin-babel';

export default [
  {
    input: 'dev/simple-gdpr.js',
    output: {
      file: 'dev/simple-gdpr.umd.js',
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
    input: 'dev/simple-gdpr.js',
    output: {
      file: 'dev/simple-gdpr.es.js',
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