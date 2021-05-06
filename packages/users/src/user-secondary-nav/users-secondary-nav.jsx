import React from 'react'
import { tw } from 'twind'
import { Link } from '@reach/router'

export default function UsersSecondaryNav() {
  return (
    <div
      className={tw`flex h-20 bg-blue-500 justify-around items-center flex-1`}
    >
      <Link to="users/tk-421/tasks">should turn off users</Link>
      <Link to="users/tk-422/tasks">user tasks</Link>
      <Link to="users/settings">Settings</Link>
    </div>
  )
}
