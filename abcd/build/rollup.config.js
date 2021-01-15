// rollup.config.js
import path from 'path';
import vue from 'rollup-plugin-vue';
import alias from '@rollup/plugin-alias';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import babel from '@rollup/plugin-babel';
// import typescript from '@rollup/plugin-typescript';
// import typescript2 from 'rollup-plugin-typescript2';
// import vuetify from 'rollup-plugin-vuetify';

const projectRoot = path.resolve(__dirname, '..');
const extensions = ['.js', '.jsx', '.ts', '.tsx', '.vue'];
const customResolver = resolve({extensions})

// Customize configs for individual targets
const esConfig = {
  input: 'src/entry.ts',
  external: [
    'vue',
    'vue-property-decorator',
    'vuetify/lib',
    /@babel\/runtime/
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
    // nodeResolve(),
    vue({
      css: true,
      template: {
        isProduction: true,
      },
    }),
    // typescript2({
    //   tsconfig: resolve(projectRoot, 'tsconfig.json')
    // }),
    // vuetify({}),
    babel({
      babelHelpers: 'runtime',
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
        ["@babel/plugin-transform-runtime", {
          "absoluteRuntime": false,
          "corejs": false,
          "helpers": true,
          "regenerator": true,
          "useESModules": false,
        }]
      ]
    }),
  ],
};

// Export config
export default esConfig;
