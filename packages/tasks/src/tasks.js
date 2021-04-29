import React from 'react'
import ReactDOM from 'react-dom'
import singleSpaReact from 'single-spa-react'
import TasksRoot from './tasks-root.jsx'

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: TasksRoot,
  domElementGetter,
})

function domElementGetter() {
  const existingMain = document.querySelector('main')
  if (existingMain) {
    return returnNodeIfExistsOrCreate('tasks', undefined, existingMain)
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
      console.log('Tasks mounting')
      r()
    }, randomWait())
  })

}

function randomWait (min = 400, max = 1500) {
  let num = Math.random() * (max - min) + min;

  return Math.floor(num);
};

export const bootstrap = [reactLifecycles.bootstrap]
export const mount = [randomPromise, reactLifecycles.mount]
export const unmount = [reactLifecycles.unmount]
