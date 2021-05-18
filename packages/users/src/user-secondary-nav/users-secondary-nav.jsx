import React from 'react'
import ReactDOM from 'react-dom'
import { navigateToUrl } from 'single-spa'
import singleSpaReact from 'single-spa-react'
import { Slot } from 'single-spa-slots-react'
import { tw } from 'twind'

const parcelConfig = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: UsersSecondaryNav,
})

export default function SecondaryNavSlotRenderer(props) {
  return <Slot name="secondary-nav" config={parcelConfig} {...props}></Slot>
}

function UsersSecondaryNav({ dynamicColor }) {
  return (
    <div
      className={tw`flex h-20 bg-blue-${dynamicColor} justify-around items-center flex-1`}
    >
      <Link to="/users/tasks/tk-421">Tasks</Link>
      <Link to="/users/settings">Settings</Link>
    </div>
  )
}

function Link({ to, children }) {
  return (
    <a href={to} onClick={navigateToUrl}>
      {children}
    </a>
  )
}
