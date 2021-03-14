import React, { useState } from "react";

function CreateArea(props) {

 var [init,Setinit] =useState({title : "" , content:""})
  
 function changed(event)
  {
 var {name,value}=event.target
 Setinit(prevValue=> {
                      return {...prevValue,[name]:value}
                              })}

  function clicked(event)
  {
event.preventDefault()
props.add(init)
  }
  return (
    <div>
      <form>
        <input name="title" onChange={changed} placeholder="Title" />
        <textarea name="content" onChange={changed} placeholder="Take a note..." rows="3" />
        <button onClick={clicked}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
