import React from 'react';
import "./styles/TodoItem.css"

const TodoItem = ({ todoText, todoCompleted }) => {
  return (
    <>
      <li>
        <div className="todoContainer">
          <label className="checkBox-todo">
            <input type="checkbox" name="checkbox" />
          </label>
          <p className='text-todo'>{todoText}</p>
        </div>
        <span className='delete-todo'>X</span>
      </li>
    </>
  );
};

export { TodoItem };