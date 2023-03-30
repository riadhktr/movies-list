import { ReplyRounded } from "@mui/icons-material";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import NewMovie from "./components/AddMovie";
import Details from "./components/Details";
import MovieList from "./components/MovieList";
import Navigation from "./components/Navigation";




const App =()=>{

  const [movie,setMovie]= useState([
    {
      id:1,
      title:"movie1",
      poster:"https://imgsrc.cineserie.com/2008/02/633160.jpg?ver=1",
      desc:"this is desc of movie 1",
      categorie:"Action"
    },
    {
      id:2,
      title:"movie2",
      poster:"https://m.media-amazon.com/images/M/MV5BMjE5MjkwODI3Nl5BMl5BanBnXkFtZTcwNjcwMDk4NA@@._V1_.jpg",
      desc:"this is desc of movie 2",
      categorie:"Comedie"
    }
  ])
   const[filtre,setFiltre] = useState('');

   const handleFiltre=(filtreValue)=>{
   setFiltre(filtreValue)
   }

   let filtredMovie = movie.filter((item)=>{
    if(filtre ==="" || filtre === undefined){
      return movie
    }
    return item.title === filtre
    
   })
  // function adding a new movie 
  const CreateMovie =(values)=>{
    const newMovie ={
      id: Date.now(),
      title: values.title,
      poster: values.poster
    }
    setMovie([...movie,newMovie])
  }

  // delete movie 
  const removeMovie =(ID)=>{
   setMovie(movie.filter((item)=> item.id !== ID))
  }
  return(
    <div>
    
      <div>
        <Navigation handleFiltre={handleFiltre} />
        <h1>Movie App</h1>
        <Routes>
          <Route path="/" element={<MovieList movies ={filtredMovie} removeMovie={removeMovie}/>}/>
          <Route path="/add" element ={<NewMovie CreateMovie={CreateMovie}/>}/>
          <Route path="/detail/:title" element={<Details movies={movie}/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App;