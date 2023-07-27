import React from 'react';

const TodoItem = ({ todoText, todoCompleted }) => {
  return (
    <>
      <li>
        <div className="todoContainer">
          <span>V</span>
          <p>{todoText}</p>
        </div>
        <span>X</span>
      </li>
    </>
  );
};

export { TodoItem };