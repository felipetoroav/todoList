import React from 'react';
import './styles/TodoSerch.css'

const TodoSerch = ({
  serchValue,
  setSerchValue
}) => {

  return (
    <>
      <input
        className="serchTodo"
        placeholder="Buscar TODO..."
        value={serchValue}
        onChange={(event) => {
          setSerchValue(event.target.value)
        }}
      />
    </>
  );
};

export { TodoSerch };