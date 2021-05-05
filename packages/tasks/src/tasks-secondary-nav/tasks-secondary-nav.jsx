import { navigateToUrl } from 'single-spa'
import React, {useEffect} from 'react'
import ReactDOM from 'react-dom'
import { fillSlot } from 'single-spa-slots'
import singleSpaReact from 'single-spa-react'
import { tw } from 'twind'
import { useLocation } from 'react-router-dom'
import SearchIcon from './search-icon.jsx'
export default function TasksSecondaryNavWrapper(props) {
  const location = useLocation()
  const {pathname} = location
  useEffect(() => {
    let parcel
    if(pathname.startsWith('/tasks')) {
      parcel = fillSlot('secondary-nav', TasksSecondaryNavParcel, props)
    } else {
      parcel && parcel.unmount()
    }
    return () => {
      parcel && parcel.unmount()
    }
  }, [pathname, props])
  return null
}

const TasksSecondaryNavParcel = singleSpaReact({
  ReactDOM,
  React,
  rootComponent: TasksSecondaryNavContents
})

function TasksSecondaryNavContents() {
  return (
    <div
      className={tw`flex h-10 bg-green-500  justify-around items-center flex-1`}
    >
      <SingleSpaLink to="/tasks/all">All Tasks</SingleSpaLink>
      <SingleSpaLink to="/tasks/settings">Settings</SingleSpaLink>
      <SearchIcon />
    </div>
  )
}

function SingleSpaLink ({to, children}) {
  return (
    <a href={to} onClick={navigateToUrl}>{children}</a>
  )
}