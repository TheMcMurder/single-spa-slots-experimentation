import reactDOM from 'react-dom'
import React from 'react'
import Parcel from 'single-spa-react/parcel'
import { getNamedNode } from 'single-spa-slots'
import { mountRootParcel } from 'single-spa'

export function Slot({ name, config = {}, children, ...other }) {
  const isParcel = !!config.bootstrap && !!config.mount && !!config.unmount
  const domNode = getNamedNode(name)
  console.log('isParcel', isParcel)
  if (isParcel) {
    return (
      <Parcel
        appendTo={domNode}
        mountParcel={mountRootParcel}
        config={config}
        {...other}
      ></Parcel>
    )
  } else {
    if (domNode) {
      return reactDOM.createPortal(children, domNode)
    } else {
      return null
    }
  }
}
