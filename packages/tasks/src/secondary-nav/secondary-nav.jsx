import React from 'react'
import { tw } from 'twind'
import { Link } from '@reach/router'
export default function SecondaryNav () {
  return <div className={tw`flex h-20 bg-blue-100 justify-around items-center flex-1`}>
    <Link to='/all'>All Tasks</Link>
  </div>
}