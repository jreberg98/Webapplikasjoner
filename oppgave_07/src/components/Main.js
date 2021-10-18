import { useState, useEffect } from "react";
import Movies from "./Movies";
import Search from "./Search";



const url = "http://www.omdbapi.com/?apikey=93657b40&t="



const Main = () => {

  const [search, setSearch] = useState("")
  const [movies, setMovies] = useState([])


  const getMovies = async () => {
    const response = await fetch(url + search)
    
    const data = await response.json()

    setMovies(data)
    console.log("satt data: " + data.Title)
  }

  const searchInput = (value) => {
    setSearch(value)
  }
  
  useEffect(() => {
    setMovies(getMovies("Star Wars"))
  }, [])

  return (
    <main>
      <Search searchInput={searchInput} getMovies={getMovies}/>
      {movies !== [] && 
        <Movies movies={movies} />}
      
    </main>
  )
}

export default Main