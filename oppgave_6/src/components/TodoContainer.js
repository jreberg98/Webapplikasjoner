import React, { useState } from 'react'
import TodoList from './TodoList'
import CreateTodo from './CreateTodo'

const TodoContainer = () => {

  const [todos, setTodos] = useState([
    {
      title: "1",
      text: "Gjør gjerne ferdig denne"
    }, {
      title: "nummer 2",
      text: "Og denne må gjøres"
    }
  ])

  console.log(todos?.length > 0)

  
  return (
    <main>
      <CreateTodo />
      {todos?.length > 0 ?
        <TodoList todos={todos} />
        : null
      }
    </main>
  )
}

export default TodoContainer