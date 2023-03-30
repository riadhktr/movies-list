import { useState } from "react";
import { useNavigate } from "react-router-dom";



const NewMovie =({CreateMovie})=>{

    // nesta3mel hooks useState w nekhdem bel onChange wella bel useRef
    const navigate= useNavigate();
    // const [title,setTitle] = useState('');
    // const [poster,setPoster]= useState('');
    const [value,setValue]=useState({title:"",poster:""})
    console.log(value)
 
    const handelAdd = ()=>{
        CreateMovie({...value});
        navigate('/')
    }
return(
    <div>
        <h1> Create a new movie</h1>
        <input type="text" placeholder="Title" name="title" onChange={(e)=>setValue({...value,[e.target.name]:e.target.value})}/>
        <input type="text" placeholder="Poster" name="poster" onChange={(e)=>setValue({...value,[e.target.name]:e.target.value})}/>
        <button onClick={()=>handelAdd()}>submit</button>
    </div>
)
}

export default NewMovie