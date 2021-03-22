// import react, { useState } from "react";
// import Classes from "./components/Classes"
// import Todo from "./components/Todo"

// const App=()=>{


//   // const [list,Setlist] =useState("");
//   // const [add,Setadd]=useState([]);
//   // const item=(e)=>{
//   //      Setlist(e.target.value)
//   // }
//   // const addTodo=()=>{
//   //     Setadd((oldlist)=>{
//   //       return [...oldlist,list]
//   //     })
//   //     Setlist("")
//   // }
//   // const del=(id)=>{
//   // Setadd((oldlist)=>{
//   //   return oldlist.filter((curr,index)=>{
//   //     return index!==id;
//   //   })
//   // })
//   //   };
//   return(
//    <div className="App">
//      {/* <h1>TODO LIST</h1>
//      <input type="text" placeholder="enter a todo" value={list} onChange={item} required></input>
//      <button onClick={addTodo} required>CLICK TO ADD</button>
//      <ol>
//        {add.map((itemval,index)=>{
//         return <Todo text={itemval} key={index} id={index} onSelect={del}
//         />
//        })}
//      </ol> */}
//      <h1>FETCH API </h1>

//    </div>
//   ) 
 
// }
// export default App

import React from 'react'
import Parent from "./components/Parent"
function App() {
  return (
    <div>
      <Parent/>
    </div>
  )
}

export default App
