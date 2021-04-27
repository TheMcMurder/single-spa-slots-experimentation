import merge from 'lodash.mergewith'
import path from 'path'

const { createRollupConfig } = require(path.resolve('../../','./scripts/rollup.config.js'))

export default merge(
  createRollupConfig({
    projectName: 'primary-nav',
    port: '8888',
  })
)