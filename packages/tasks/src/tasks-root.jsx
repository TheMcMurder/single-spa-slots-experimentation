import React from 'react'
import { tw } from 'twind'
import { BrowserRouter, Route } from 'react-router-dom'
import SecondaryNav from './tasks-secondary-nav/tasks-secondary-nav.jsx'
import TaskList from './task-list/task-list.jsx'
import SideNav from './side-nav.jsx'
export default function TasksRoot() {
  return (
    <div>
      <BrowserRouter>
        <SecondaryNav />
        <div>
          <Route path="/tasks/all">
            <TaskPage />
          </Route>
          <Route path="/tasks/settings">
            <TaskPage />
          </Route>
          <Route path="/users/:userId/tasks">
            <TaskPage showSideNav={false}/>
          </Route>
        </div>
      </BrowserRouter>
    </div>
  )
}

function TaskPage ({showSideNav = true}) {
  return <div className={tw`flex`}>
    {showSideNav ? 
    <SideNav /> : null
    }
    <TaskList />
  </div>
}

function TaskSettings() {
  return <div className={tw`p-4`}>Task Settings would go here</div>
}
