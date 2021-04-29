import React from 'react'
import ReactDOM from 'react-dom'
import singleSpaReact from 'single-spa-react'

function PrimaryNav() {
  return <div>Primary Navigation</div>
}

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: PrimaryNav,
  domElementGetter,
})

function domElementGetter() {
  const existingMainNav = document.getElementById('main-nav')
  if (existingMainNav) {
    return existingMainNav
  } else {
    throw new Error('cannot find existing main nav')
  }
}

export const bootstrap = [reactLifecycles.bootstrap]
export const mount = [reactLifecycles.mount]
export const unmount = [reactLifecycles.unmount]
