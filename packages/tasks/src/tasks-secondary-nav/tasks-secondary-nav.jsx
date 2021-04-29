import React, { useEffect, useState } from 'react'
import { tw } from 'twind'
import { Link, useLocation } from 'react-router-dom'
export default function SecondaryNav() {
  const location = useLocation()

  if (location.pathname.startsWith('/tasks')) {
    return (
      <div
        className={tw`flex h-20 bg-blue-100 justify-around items-center flex-1`}
      >
        <Link to="/tasks/all">All Tasks</Link>
        <Link to="/tasks/settings">Settings</Link>
      </div>
    )
  } else {
    return null
  }
}
