const { resolve } = require("path");
const { nodeResolve } = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");
const replace = require("@rollup/plugin-replace");
const { babel } = require("@rollup/plugin-babel");
const serve = require('rollup-plugin-serve');
const livereload = require('rollup-plugin-livereload');

function createRollupConfig({projectName, port}) {
  const outputPath = resolve(process.cwd(), `dist`)
  const production = !process.env.ROLLUP_WATCH;
  return {
    input: resolve(process.cwd(), `src/${projectName}.js`),
    output: {
      dir: outputPath,
      format: "system",
      name: null,
      sourcemap: true,
    },
    plugins: [
      nodeResolve({
        browser: true,
      }),
      commonjs(),
      babel({
        exclude: "node_modules/**",
      }),
      replace({
        "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
      }),
      !production && serve({
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
        contentBase: 'dist',
        port,
      }),
      !production && livereload({
        watch: outputPath,
      }),
    ],
    external: (id) =>
          [
            "react",
            "react-dom",
            "rxjs",
            "rxjs/operators",
            "lodash",
            "single-spa",
          ].includes(id) || /^jm_/.test(id),
  };
}

module.exports = {createRollupConfig}