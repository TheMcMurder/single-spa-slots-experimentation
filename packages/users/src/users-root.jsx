import { BrowserRouter as Router, Route } from 'react-router-dom'
import React from 'react'
import UserSecondaryNav from './user-secondary-nav/users-secondary-nav.jsx'
export default function TasksRoot() {
  return (
    <div>
      <UserSecondaryNav />
      <Router basename="/users">
        <Route path='/settings'>
          <Settings />
        </Route>
      </Router>
    </div>
  )
}

function Settings() {
  return <div>settings</div>
}
