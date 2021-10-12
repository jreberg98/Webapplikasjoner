const CreateTodo = ({ addTodo }) => {
  return (
    <form>
      <p>Tittel</p>
      <input type="text" id="titleInput"/>
      <p>Tekst</p>
      <textarea rows="10" cols="50" id="textInput"/>
      <br/>
      <button type="button" id="createTodoButton" onClick={() => addTodo(
        document.getElementById("titleInput"),
        document.getElementById("textInput")

      )} >Legg til</button>
    </form>
  )
}

export default CreateTodo