import React from 'react'
import ReactDOM from 'react-dom'
import singleSpaReact from 'single-spa-react'

function App2() {
  return <div>App2</div>
}

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App2,
  domElementGetter,
})

function domElementGetter() {
  const existingMain = document.querySelector('main')
  if (existingMain) {
    return returnNodeIfExistsOrCreate('app-2', undefined, existingMain)
  } else {
    throw new Error('cannot find existing main')
  }
}

function returnNodeIfExistsOrCreate(id, nodeType = 'div', parentNode) {
  const existingNode = document.getElementById(id)
  if (existingNode) {
    return existingNode
  } else {
    const node = document.createElement(nodeType)
    node.setAttribute('id', id)
    parentNode.appendChild(node)
    return node
  }
}

export const bootstrap = [reactLifecycles.bootstrap]
export const mount = [reactLifecycles.mount]
export const unmount = [reactLifecycles.unmount]
