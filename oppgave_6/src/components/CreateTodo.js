const CreateTodo = () => {
  return (
    <form>
      <p>Tittel</p>
      <input type="text" id="titleInput"/>
      <p>Tekst</p>
      <textarea rows="10" cols="50" />
      <br/>
      <button type="button" id="createTodoButton">Legg til</button>
    </form>
  )
}

export default CreateTodo