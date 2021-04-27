import merge from 'lodash.mergewith'
import emitEJS from 'rollup-plugin-emit-ejs'
import path from 'path'

const { createRollupConfig } = require(path.resolve('../../','./rollup.config.js'))

export default merge(
  createRollupConfig({
    projectName: 'root-config',
    port: '9000',
  }),
  {
    plugins: [emitEJS({
      src: 'src',
    })]
  }
)