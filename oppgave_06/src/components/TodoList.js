import TodoItem from "./TodoItem"

const TodoList = ({ todos, completeTodo }) => {

  return(
    <section>
      { todos.map((todo) => (
        
        <TodoItem key={todo.title} title={todo.title} text={todo.text} completeTodo={completeTodo}/>
      ))
      
      }
    </section>
  )
}

export default TodoList