import { registerApplication, start } from 'single-spa'
import bootstrapSPA from './bootstrap/bootstrapper.js'
import './create-slots.js'

registerApplication(
  'primary-nav',
  () => System.import('primary-nav'),
  () => true,
)

registerApplication(
  'users',
  () => System.import('users'),
  (location) => location.pathname.startsWith('/users'),
)

registerApplication(
  'tasks',
  () => System.import('tasks'),
  (location) =>
    location.pathname.startsWith('/tasks') ||
    location.pathname.includes('/tasks/'),
)

bootstrapSPA().then(() => {
  start()
})
