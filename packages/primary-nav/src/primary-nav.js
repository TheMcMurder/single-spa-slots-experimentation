import React from 'react'
import ReactDOM from 'react-dom'
import singleSpaReact from 'single-spa-react'

function PrimaryNav () {
  return (<div>Primary Navigation</div>)
}

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: PrimaryNav
})

export const bootstrap = [reactLifecycles.bootstrap]
export const mount = [reactLifecycles.mount]
export const unmount = [reactLifecycles.unmount]