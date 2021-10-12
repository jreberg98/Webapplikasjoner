const TodoItem = ({ title, text}) => {
  return (
    <article>
      <h2>{title}</h2>
      <p>{text}</p>
      <button type="button">Ferdig</button>
    </article>
  )
}

export default TodoItem