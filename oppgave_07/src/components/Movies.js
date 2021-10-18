import Movie from "./Movie"

const Movies = ({ movies }) => {

  return (

    <ul>
      {movies.Title}
      {/*movies.map((movie) => (
        <Movie movie={movie}/>
      ))*/}
    </ul>
  )
}

export default Movies