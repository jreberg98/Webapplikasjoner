const TodoItem = ({ title, text, completeTodo}) => {
  return (
    <article>
      <h2>{title}</h2>
      <p>{text}</p>
      <button type="button" onClick={() => completeTodo(title)} >Ferdig</button>
    </article>
  )
}

export default TodoItem