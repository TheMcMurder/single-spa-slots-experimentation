const path = require('path')
const { createRollupConfig } = require(path.resolve('../../','./scripts/rollup.config.js'))

module.exports = createRollupConfig({
  projectName: 'root-config'
})