import React from 'react'
import { useRouteMatch } from "react-router-dom";

export default function TaskList() {
  const match = useRouteMatch()
  if (match && match.params && match.params.userId) {
    return <div>
    {match.params.userId}
    tasks
    </div>
  } else {
    return <div>all task list</div>
  }
}
