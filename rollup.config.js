const { resolve } = require('path')
const { readFileSync } = require('fs')
const { nodeResolve } = require('@rollup/plugin-node-resolve')
const commonjs = require('@rollup/plugin-commonjs')
const replace = require('@rollup/plugin-replace')
const { babel } = require('@rollup/plugin-babel')
const serve = require('rollup-plugin-serve')
const livereload = require('rollup-plugin-livereload')

function createRollupConfig({ projectName, port }) {
  // const babelConfigFile = JSON.parse(readFileSync(resolve(__dirname, 'babel.config.json'), 'utf-8'))
  // console.log('projectName', projectName, babelConfigFile.presets)
  const liveReloadPorts = {
    'root-config': '35900',
    'primary-nav': '35888',
    users: '35886',
    tasks: '35887',
    'single-spa-slots': '35901',
    'single-spa-slots-react': '35902',
  }
  const outputPath = resolve(process.cwd(), `dist`)
  const production = !process.env.ROLLUP_WATCH
  return {
    input: resolve(process.cwd(), `src/${projectName}.js`),
    output: {
      dir: outputPath,
      format: 'system',
      name: null,
      sourcemap: true,
    },
    plugins: [
      nodeResolve({
        browser: true,
      }),
      commonjs({
        include: /node_modules/,
      }),
      babel({
        exclude: 'node_modules/**',
        babelHelpers: 'runtime',
        rootMode: 'upward',
      }),
      replace({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      }),
      !production &&
        serve({
          headers: {
            'Access-Control-Allow-Origin': '*',
          },
          contentBase: 'dist',
          port,
          historyApiFallback: projectName === 'root-config' ? true : false,
        }),
      !production &&
        livereload({
          watch: outputPath,
          port: liveReloadPorts[projectName],
        }),
    ],
    external: (id) =>
      [
        'react',
        'react-dom',
        'rxjs',
        'rxjs/operators',
        'lodash',
        'single-spa',
        'primary-nav',
        'users',
        'tasks',
        'root-config',
        'twind',
        'single-spa-slots',
      ].includes(id) || /^jm_/.test(id),
  }
}

module.exports = { createRollupConfig }
