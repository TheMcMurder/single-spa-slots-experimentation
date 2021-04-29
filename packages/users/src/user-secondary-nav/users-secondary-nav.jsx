import React from 'react'
import { tw } from 'twind'
import { Link } from '@reach/router'

export default function UsersSecondaryNav () {
  return <div className={tw`flex h-20 bg-blue-100 justify-around items-center flex-1`}>
    <Link to='users/tasks/tk-421'>Tasks</Link>
    <Link to='users/settings'>Settings</Link>
  </div>
}