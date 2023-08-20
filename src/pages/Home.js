import React from 'react';
import { TodoList } from '../components/TodoList';
import { Navbar } from '../components/Navbar';
import { TodoSerch } from '../components/TodoSerch';
import { TodoItem } from '../components/TodoItem';
import { AddTodo } from '../components/AddTodo';

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

const Home = () => {
  const [todos, setTodos] = React.useState(defaultTodo);
  const [serchValue, setSerchValue] = React.useState('');
  // console.log(serchValue)

  const completedTodo = todos.filter(todos => !!todos.todoCompleted).length;

  const searchedTodos = todos.filter(
    (todos) => {
      const todoText = todos.text.toLowerCase();
      const searchText = serchValue.toLowerCase();
      return todoText.includes(searchText);
    }
  );

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todos) => todos.text == text
    );
    newTodos[todoIndex].todoCompleted = true;
    setTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todos) => todos.text == text
    );
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  }

  return (
    <div>
      <Navbar todoDone={completedTodo} todoTotal={todos.length} />

      <TodoSerch
        serchValue={serchValue}
        setSerchValue={setSerchValue}
      />

      <TodoList>
        {
          searchedTodos.map(todos => (
            <TodoItem
              key={todos.text}
              todoText={todos.text}
              completed={todos.todoCompleted}
              onComplete={() => completeTodo(todos.text)}
              onDelete={() => deleteTodo(todos.text)}
            />
          ))
        }
      </TodoList>

      <AddTodo />

    </div>
  );
};

export { Home };