import React from 'react'
import ReactDOM from 'react-dom'
import singleSpaReact from 'single-spa-react'
import UsersRoot from './users-root.jsx'

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: UsersRoot,
  domElementGetter,
})

function domElementGetter() {
  const existingMain = document.querySelector('main')
  if (existingMain) {
    return returnNodeIfExistsOrCreate('users', undefined, existingMain)
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

function randomPromise() {
  return new Promise((r) => {
    setTimeout(() => {
      console.log('Users bootstrapping - random delay over')
      r()
    }, randomWait())
  })
}

function randomWait(min = 650, max = 850) {
  let num = Math.random() * (max - min) + min
  return Math.floor(num)
}

export const bootstrap = [randomPromise, reactLifecycles.bootstrap]
export const mount = [reactLifecycles.mount]
export const unmount = [reactLifecycles.unmount]
