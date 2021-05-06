# single-spa-slots-experimentation

Some experimentaion around a different way to layout single-spa apps to enforce correct DOM order. This is an experiment towards an alternative to `single-spa-layout` for managing correct DOM order.

## Running project
For some reason I decided to use lerna... that was silly.

1. `npx lerna bootstrap`
2. `npx lerna boostrap --hoist`
3. `npm run start`

`npm run start` should run all `start` commands in each project using lerna under the hood