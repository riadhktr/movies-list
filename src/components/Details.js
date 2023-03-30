import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Details = ({movies}) => {
    const titre = useParams();
    const navigate = useNavigate()
    console.log(titre);
    const single = movies.find((item)=> item.title === titre.title)
    console.log("objet li fih el movie",single)
  return (
    <div>
        <h1>Movie details</h1>
        <button onClick={()=>navigate('/')}>Back Home</button>

        <h2> {single.title}</h2>
        <h2>{single.desc}</h2>
        <img src={single.poster} alt="movie"/>

    </div>
  )
}

export default Details