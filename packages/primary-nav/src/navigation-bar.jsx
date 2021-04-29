import React from 'react'
import { tw } from 'twind'
import { Link } from '@reach/router'

export default function NavigationBar() {
  return (
    <div
      className={tw`relative bg-gray-100 top-0 border-b border-solid border-gray-200 flex`}
    >
      Navigation Bar
      <div>
        <Link to="/app-1" >
          App One
        </Link>
        <Link to="/app-2" >
          App 2
        </Link>
      </div>
    </div>
  )
}
