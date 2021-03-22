import react from "react";

const Todo=(props)=>{


return(
<>
     <li>{props.text} <button onClick={()=>{
       props.onSelect(props.id)
     }}>DELETE</button></li>
  </>

) 

}

export default Todo;