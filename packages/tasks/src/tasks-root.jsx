import React from 'react'
import { Router } from '@reach/router'
import SecondaryNav from './secondary-nav/secondary-nav.jsx'
export default function TasksRoot () {
  return <div>
    <SecondaryNav />
    <Router>
      <Tasks path='/all'></Tasks>
    </Router>
  </div>
}

const listOfTasks = [
  1,
  2,
  3,
  4,
  5
]

function Tasks () {
  return <div>
    {
      listOfTasks.map((task) => {
        return (
          <div key={task}>
            This is a task
          </div>
        )
      })
    }

  </div>
}