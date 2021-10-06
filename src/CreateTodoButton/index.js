import React from "react";
import './CreateTodoButton.css'

function CreateTodoButton(params) {
  const onClickButton = (msg) => {
    alert(msg);
  };

  return (
    <button 
    className="CreateTodoButton"
    onClick={()=>{onClickButton("Hola mundo")}}
    >
      +
    </button>
  )
}

export {CreateTodoButton};