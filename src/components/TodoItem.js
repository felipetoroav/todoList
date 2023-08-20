import React from 'react';
import "./styles/TodoItem.css"
import { CiCircleRemove, CiCircleCheck } from 'react-icons/ci';

const TodoItem = (props) => {
  return (
    <>
      <li>
        <div className="todoContainer">
          <span
            className={`checkBox-todo ${props.completed && "checkBox-todo--completed"}`}

            onClick={props.onComplete}
          >

            <CiCircleCheck />
          </span>
          <p className={`text-todo ${props.completed && "TodoItem-p--completed"}`}>
            {props.todoText}
          </p>
        </div>
        <span className='delete-todo'
          onClick={props.onDelete}
        >
          <CiCircleRemove />
        </span>
      </li>
    </>
  );
};

export { TodoItem };