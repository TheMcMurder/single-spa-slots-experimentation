import React from 'react'
import { tw } from 'twind'
import { Link, useLocation } from 'react-router-dom'
import SearchIcon from './search-icon.jsx'
export default function SecondaryNav() {
  const location = useLocation()

  if (location.pathname.startsWith('/tasks')) {
    return (
      <div
        className={tw`flex h-10 bg-green-500  justify-around items-center flex-1`}
      >
        <Link to="/tasks/all">All Tasks</Link>
        <Link to="/tasks/settings">Settings</Link>
        <SearchIcon />
      </div>
    )
  } else {
    return null
  }
}
