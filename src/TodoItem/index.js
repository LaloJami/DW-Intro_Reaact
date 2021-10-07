import React from "react";
import './TodoItem.css'
import { AiOutlineCheck } from "react-icons/ai";
import { BsFillXCircleFill } from "react-icons/bs";

function TodoItem(props) {
  
  return (
    <li className="TodoItem">
      <AiOutlineCheck 
        className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
        onClick={props.onComplete}
      />
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <BsFillXCircleFill 
        className="Icon Icon-delete"
        onClick={props.onDelete}
      />
    </li>
  );
}


export {TodoItem};