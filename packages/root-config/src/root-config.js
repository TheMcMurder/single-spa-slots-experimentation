import { registerApplication, start } from 'single-spa'
import bootstrapSPA from './bootstrap/bootstrapper.js'
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from 'single-spa-layout';

const routes = constructRoutes(document.querySelector('#single-spa-layout'));
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  },
});
console.log('applications', applications)
const layoutEngine = constructLayoutEngine({ routes, applications });

applications.forEach((app) => {
  console.log('application', app)
  registerApplication(app)
});
// import { fromEvent } from 'rxjs'
// import { tap, shareReplay } from 'rxjs/operators'

// registerApplication(
//   'primary-nav',
//   () => System.import('primary-nav'),
//   () => true,
// )

// registerApplication(
//   'users',
//   () => System.import('users'),
//   (location) => location.pathname.startsWith('/users'),
// )

// registerApplication(
//   'tasks',
//   () => System.import('tasks'),
//   (location) =>
//     location.pathname.startsWith('/tasks') ||
//     location.pathname.includes('/tasks/'),
// )

bootstrapSPA().then(() => {
  start()
})

// export const currentLocation$ = fromEvent(
//   window,
//   'single-spa:routing-event',
// ).pipe(
//   tap((event) => {
//     console.log('event', event)
//   }),
//   shareReplay(1),
// )

// window.addEventListener('single-spa:routing-event', (event) => {
//   console.log('old school', event)
// })
