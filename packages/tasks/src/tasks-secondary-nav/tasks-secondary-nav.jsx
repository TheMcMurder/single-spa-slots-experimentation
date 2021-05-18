import React from 'react'
import { Slot } from 'single-spa-slots-react'
import { tw } from 'twind'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import SearchIcon from './search-icon.jsx'

// This no longer renders a parcel but it uses the <Slot> react component to render into a portal.
export default function TasksSecondaryNavWrapper(props) {
  const location = useLocation()
  const { pathname } = location
  if (pathname.startsWith('/tasks')) {
    return (
      <Slot name="secondary-nav">
        <TasksSecondaryNavContents {...props} />
      </Slot>
    )
  } else {
    return null
  }
}

function TasksSecondaryNavContents() {
  return (
    <div
      className={tw`flex h-10 bg-green-500  justify-around items-center flex-1`}
    >
      <Link to="/tasks/all">All Tasks</Link>
      <Link to="/tasks/settings">Settings</Link>
      <SearchIcon />
    </div>
  )
}

// function SingleSpaLink ({to, children}) {
//   return (
//     <a href={to} onClick={navigateToUrl}>{children}</a>
//   )
// }
