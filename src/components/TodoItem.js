import React from 'react';

const TodoItem = ({ todoText, todoCompleted }) => {
  return (
    <>
      <li>
        <span>V</span>
        <p>{todoText}</p>
        <span>X</span>
      </li>
    </>
  );
};

export { TodoItem };