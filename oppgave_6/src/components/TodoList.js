import TodoItem from "./TodoItem"

const TodoList = ({ todos }) => {

  return(
    <section>
      { todos.map((todo) => (
        
        <TodoItem key={todo.title} title={todo.title} text={todo.text}/>
      ))
      
      }
    </section>
  )
}

export default TodoList