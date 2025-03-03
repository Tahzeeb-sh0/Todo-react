import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import { ContextProvider } from './assets/Components/TodoContext';
import TodoItem from './assets/Components/TodoItem';
import TodoForm from './assets/Components/TodoForm';

function App() {
  const [todo, setTodo] = useState([]);

  const addTodo = (todo) => {
    setTodo((oldTodo) => [...oldTodo, { id: uuidv4(), ...todo }]);
  };

  const updateTodo = (id, updatedTodo) => {
    setTodo((prev) => prev.map((preTodo) => (preTodo.id === id ? updatedTodo : preTodo)));
  };

  const deleteTodo = (id) => {
    setTodo((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodo((prev) =>
      prev.map((preTodo) => preTodo.id === id ? { ...preTodo, completed: !preTodo.completed } : preTodo)
    );
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos'));
    if (todos && todos.length > 0) {
      setTodo(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todo));
  }, [todo]);

  return (
    <ContextProvider value={{ todo, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todo.map((item) => (
              <div key={item.id} className="w-full">
                <TodoItem todo={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </ContextProvider>
  );
}

export default App;
