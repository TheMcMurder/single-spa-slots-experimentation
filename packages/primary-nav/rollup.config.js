const { createRollupConfig } = require(require.resolve('../../rollup.config.js'))

const config = createRollupConfig({
  projectName: 'primary-nav',
  port: '8888',
})

export default config