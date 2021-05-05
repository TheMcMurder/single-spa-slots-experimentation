import merge from 'lodash.mergewith'
import path from 'path'

const { createRollupConfig } = require(path.resolve(
  '../../',
  './rollup.config.js',
))

export default createRollupConfig({
  projectName: 'single-spa-slots',
  port: '9001',
})
