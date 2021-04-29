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
  (location) => location.pathname.startsWith('/app-1'),
)

registerApplication(
  'app-2',
  () => System.import('app-2'),
  (location) => location.pathname.startsWith('/app-2'),
)

bootstrapSPA().then(() => {
  start()
})
