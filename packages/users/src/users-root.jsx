import { Router } from '@reach/router'
import React from 'react'
import UserSecondaryNav from './user-secondary-nav/users-secondary-nav.jsx'
export default function TasksRoot() {
  return (
    <div>
      <UserSecondaryNav />
      <Router basepath="/users">
        <Settings path="/settings"></Settings>
      </Router>
    </div>
  )
}

function Settings() {
  return <div>settings</div>
}
