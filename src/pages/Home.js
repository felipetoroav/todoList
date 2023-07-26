import React from 'react';
import { TodoList } from '../components/TodoList';
import { Navbar } from '../components/Navbar';
import { TodoSerch } from '../components/TodoSerch';
import { TodoItem } from '../components/TodoItem';
import { AddTodo } from '../components/AddTodo';

const Home = () => {
  const defaultTodo = [
    { text: 'Todo text 1', todoCompleted: true },
    { text: 'Todo text 2', todoCompleted: true },
    { text: 'Todo text 3', todoCompleted: false },
    { text: 'Todo text 4', todoCompleted: false },
    { text: 'Todo text 5', todoCompleted: false },
    { text: 'Todo text 6', todoCompleted: false },
  ]
  return (
    <div>
      <Navbar todoDone={2} todoTotal={10} />

      <TodoSerch />

      <TodoList>
        {
          defaultTodo.map(todo => (
            <TodoItem
              key={todo.text}
              todoText={todo.text}
            />
          ))
        }
      </TodoList>

      <AddTodo />

    </div>
  );
};

export { Home };