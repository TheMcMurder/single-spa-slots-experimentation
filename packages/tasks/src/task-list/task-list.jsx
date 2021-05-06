import React from 'react'
import { tw } from 'twind'
import { useRouteMatch } from 'react-router-dom'

export default function TaskList() {
  const match = useRouteMatch()
  const userId = match && match.params && match.params.userId
  return (
    <div className={tw`flex-1`}>
      <h2>{userId ? userId : 'all'} tasks</h2>
    </div>
  )
}
