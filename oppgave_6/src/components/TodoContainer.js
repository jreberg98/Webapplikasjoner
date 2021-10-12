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

  const addTodo = (title, text) => {
    // Kan ende opp med like nøkler dersom noen legger inn samma tittel flere ganger
    const temp = {
      title: title.value,
      text: text.value
    }

    setTodos((previous) => [
      temp, ...previous
    ]
    )
  }


  const completeTodo = (titel) => {
    const temp = todos.filter((todo) => todo.title !== titel)
    setTodos(temp)
  }

  
  return (
    <main>
      <CreateTodo addTodo={addTodo}/>
      {todos?.length > 0 ?
        <TodoList completeTodo={completeTodo} todos={todos} />
        : null
      }
    </main>
  )
}

export default TodoContainer