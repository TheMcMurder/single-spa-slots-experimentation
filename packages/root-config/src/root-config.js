import { registerApplication, start } from 'single-spa'
import bootstrapSPA from './bootstrap/bootstrapper.js'
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from 'single-spa-layout';

const tasksActivityFn = (location) => location.pathname.startsWith('/tasks') || location.pathname.includes('/tasks/')
const usersActivityFn = (location) => location.pathname.startsWith('/users') && !location.pathname.includes('tk-421')

// const routesFromHTML = constructRoutes(document.querySelector('#single-spa-layout'))
// window.routes = routesFromHTML
const tasksApplication = {
  type: 'application',
  name: 'tasks',
}
const usersApplication = {
  type: 'application',
  name: 'users',
}

const routes = constructRoutes({
  mode: 'history',
  base: '/',
  routes: [
    {
      type: 'nav',
      attrs: [{name: 'class', value: 'main-nav'}],
      routes: [
        {
          type: 'application',
          name: 'primary-nav',
        },
      ]
    },
    {
      type: 'main',
      attrs: [{name: 'class', value: 'main-content'}],
      routes: [
        {
          type: "route",
          path: "tasks",
          routes: [
            tasksApplication
          ],
        },
        {
          type: "route",
          path: "users",
          routes: [
            usersApplication,
            {
              type: 'route',
              path: '/tasks/:id',
              routes: [
                tasksApplication
              ]
            },
          ],
        },
      ]
    }
  ],
  containerEl: 'body'
})
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  },
  activeWhenOverrides: {
    'tasks': tasksActivityFn,
    'users': usersActivityFn
  }
});
const layoutEngine = constructLayoutEngine({ routes, applications });

applications.forEach((app) => registerApplication(app))

// applications.forEach((app) => {
//   console.log('application', app)
//   const existingActiveWhenFn = app.activeWhen[0]
//   if(app.name === 'users') {
//     registerApplication({
//       ...app,
//       activeWhen: (location) => {
//         const isTK421 = location.pathname.includes('tk-421')
//         return existingActiveWhenFn && !isTK421
//       }
//     })
//   } else {
//     registerApplication(app)
//   }
// });
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
