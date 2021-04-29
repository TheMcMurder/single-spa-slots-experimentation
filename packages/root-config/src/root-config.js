import { registerApplication, start } from 'single-spa'
import bootstrapSPA from './bootstrap/bootstrapper.js'
import { fromEvent } from 'rxjs'
import { tap, share } from 'rxjs/operators'

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

export const currentLocation$ = fromEvent('single-spa:routing-event').pipe(
  tap((event) => {
    console.log('event', event)
  }),
)

document.addEventListener('single-spa:routing-event', (event) => {
  console.log('old school', event)
})
