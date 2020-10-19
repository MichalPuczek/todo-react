import React, { useState, useEffect } from 'react';

// == Importing STYLE
import './AppStyle.css';

// == Importing COMPONENTS
import Form from '../Form/Form';
import TodoList from '../TodoList/TodoList';

function App() {

  // == State of the appliction
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  // == USE EFFECT
  // 1. Local storage (get saved todos)
  useEffect(() => {
    getLocalTodos();
  }, []);

 // 2. Filter function and local storage (save todo)
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  // == Function : filter the todo's list and return a new list
  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  // == Local storage
  // 1. Save todos to LOCAL STORAGE
  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  };
  
  // 2. Get saved todos from the local storage
  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
      setTodos(todoLocal);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Michal's Todo List</h1>
      </header>

      <Form
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        setStatus={setStatus}
      />

      <TodoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />

    </div>
  );
}

export default App;
