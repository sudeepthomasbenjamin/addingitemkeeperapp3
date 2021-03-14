import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
 
  var [adding,addingfn]=useState([])

 function addItem(inits)
 {
 addingfn(prevValue=>
             {
               return [...prevValue,inits]
             })
 }
 
 
 
  return (
    <div>
      <Header />
      <CreateArea add={addItem}/>
     { adding.map((eachitem,index) => {
      return ( <Note key={index} id={index} title={eachitem.title} content={eachitem.content} /> )
      })}
      <Note key={1} title="Note title" content="Note content" />
      <Footer />
    </div>
  );
}

export default App;
