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
    { text: 'Todo text 3', todoCompleted: true },
    { text: 'Todo text 4', todoCompleted: false },
    { text: 'Todo text 5', todoCompleted: false },
    { text: 'Todo text 6', todoCompleted: false },
    { text: 'Todo text 7', todoCompleted: false },
    { text: 'Todo text 8', todoCompleted: false },
    { text: 'Todo text 9', todoCompleted: false },
  ]

  const [todo, setTodo] = React.useState(defaultTodo)

  const [serchValue, setSerchValue] = React.useState('');
  console.log(serchValue)

  const completedTodo = todo.filter(todo => !!todo.todoCompleted).length;
  console.log(completedTodo)

  return (
    <div>
      <Navbar todoDone={completedTodo} todoTotal={todo.length} />

      <TodoSerch
        serchValue={serchValue}
        setSerchValue={setSerchValue}
      />

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