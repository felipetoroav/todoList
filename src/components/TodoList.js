import React from 'react';
import './styles/TodoList.css';

const TodoList = (props) => {
  return (
    <div className="todoList">
      <ul>
        {props.children}
      </ul>
    </div>
  );
};

export { TodoList };