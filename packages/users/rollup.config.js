import merge from 'lodash.mergewith'
import path from 'path'

const { createRollupConfig } = require(path.resolve(
  '../../',
  './rollup.config.js',
))

export default merge(
  createRollupConfig({
    projectName: 'users',
    port: '8886',
  }),
)
