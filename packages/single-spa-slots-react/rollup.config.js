import path from 'path'

const { createRollupConfig } = require(path.resolve(
  '../../',
  './rollup.config.js',
))

export default createRollupConfig({
  projectName: 'single-spa-slots-react',
  port: '9002',
})
