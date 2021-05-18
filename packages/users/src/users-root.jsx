import { BrowserRouter as Router, Route } from 'react-router-dom'
import { tw } from 'twind'
import React, { useState, useEffect } from 'react'
import UserSecondaryNav from './user-secondary-nav/users-secondary-nav.jsx'
export default function UsersRoot() {
  const [color, setColor] = useState('500')
  useEffect(() => {
    const interval = setInterval(() => {
      const randomInt = Math.ceil(Math.random() * 5)
      setColor(`${randomInt * 100}`)
    }, 1000)
    return () => {
      clearInterval(interval)
    }
  }, [])
  return (
    <div>
      <UserSecondaryNav dynamicColor={color} />
      <Router basename="/users">
        <Route path="/settings">
          <Settings />
        </Route>
      </Router>
    </div>
  )
}

function Settings() {
  return <div className={tw`p-4`}>settings</div>
}
