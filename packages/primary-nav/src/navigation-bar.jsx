import React from 'react'
import { tw } from 'twind'
import { Link } from '@reach/router'

export default function NavigationBar() {
  return (
    <div
      className={tw`h-10 bg-gray-300 top-0 border-b border-solid border-gray-200 flex`}
    >
      <div className={tw`flex justify-around items-center flex-1`}>
        <Link to="/">
          Home
        </Link>
        <Link to="/users" >
          Users
        </Link>
        <Link to="/tasks" >
          Tasks
        </Link>
      </div>
    </div>
  )
}
