import { registerApplication, start } from 'single-spa'
import bootstrapSPA from './bootstrap/bootstrapper.js'

registerApplication(
  'primary-nav',
  () => System.import('primary-nav'),
  () => true,
)

registerApplication(
  'app-1',
  () => System.import('app-1'),
  () => true,
)

registerApplication(
  'app-2',
  () => System.import('app-2'),
  () => true,
)

bootstrapSPA().then(() => {
  start()
})
