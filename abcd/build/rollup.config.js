// rollup.config.js
import fs from 'fs';
import path from 'path';
import vue from 'rollup-plugin-vue';
import alias from '@rollup/plugin-alias';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import babel from '@rollup/plugin-babel';
import minimist from 'minimist';

// Get browserslist config and remove ie from es build targets
const esbrowserslist = fs.readFileSync('./.browserslistrc')
  .toString()
  .split('\n')
  .filter((entry) => entry && entry.substring(0, 2) !== 'ie');

const argv = minimist(process.argv.slice(2));

const projectRoot = path.resolve(__dirname, '..');
const extensions = ['.js', '.jsx', '.ts', '.tsx', '.vue'];
const customResolver = resolve({extensions})

// Customize configs for individual targets
const esConfig = {
  input: 'src/entry.ts',
  external: [
    'vue',
    'vue-property-decorator',
    'vuetify'
  ],
  output: {
    file: 'dist/abcd.esm.js',
    format: 'esm',
    exports: 'named',
  },
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
      'process.env.ES_BUILD': JSON.stringify('true'),
    }),
    alias({
      customResolver,
      entries: {
        '@': path.resolve(projectRoot, 'src'),
      },
    }),
    vue({
      css: true,
      template: {
        isProduction: true,
      },
    }),
    babel({
      exclude: 'node_modules/**',
      extensions,
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              esmodules: true,
            }
          },
        ],
        '@babel/preset-typescript'
      ],
      plugins: [
        ["@babel/plugin-proposal-decorators", { "legacy": true }],
        ["@babel/plugin-proposal-class-properties", { "loose": true}],
      ]
    }),
  ],
};

// Export config
export default esConfig;
