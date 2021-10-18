const Search = ({ searchInput, getMovies}) => {
  return (
    <form>
      <input id="input" type="text" onKeyUp={() => searchInput(
        document.getElementById("input").value
      )} />
      <button type="button" onClick={getMovies}>Hent</button>
    </form>
  )
}

export default Search