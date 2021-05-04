import React from 'react'
import { tw } from 'twind'
import { BrowserRouter, Route } from 'react-router-dom'
import SecondaryNav from './tasks-secondary-nav/tasks-secondary-nav.jsx'
import TaskList from './task-list/task-list.jsx'
export default function TasksRoot() {
  return (
    <div>
      <BrowserRouter>
        <SecondaryNav />
        <Route path="/tasks/all">
          <TaskList />
        </Route>
        <Route path="/tasks/settings">
          <TaskSettings />
        </Route>
        <Route path="/users/tasks/:userId">
          <TaskList />
        </Route>
      </BrowserRouter>
    </div>
  )
}

function TaskSettings() {
  return <div className={tw`p-4`}>Task Settings would go here</div>
}
