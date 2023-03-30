import MovieCard from "./MovieCard"



const MovieList =({movies,removeMovie})=>{
  
    return(
        <div style={{display:"flex",justifyContent:"space-around"}}>
            {movies.map((item,index)=>{
            return( <MovieCard movies={item} key={index} removeMovie={removeMovie}/>)
        })}</div>
    )
}

export default MovieList