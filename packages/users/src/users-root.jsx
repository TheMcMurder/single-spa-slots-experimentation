import { BrowserRouter as Router, Route } from 'react-router-dom'
import { tw } from 'twind'
import React from 'react'
import UserSecondaryNav from './user-secondary-nav/users-secondary-nav.jsx'
import SideNav from './side-nav.jsx'
export default function TasksRoot() {
  return (
    <div>
      <UserSecondaryNav />
      <Router basename="/users">
        <div className={tw`flex`}>
          <SideNav></SideNav>
          <Route path="/settings">
            <Settings />
          </Route>
        </div>
      </Router>
    </div>
  )
}

function Settings() {
  return <div className={tw`p-4`}>settings</div>
}
