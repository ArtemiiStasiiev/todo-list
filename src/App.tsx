import React, { FC, useState, useEffect } from 'react'
import Form from './components/Form.tsx';
import TodoList from './components/TodoList.tsx';
import './App.css';
//import { ITodoArr } from './Interfaces.tsx';


const App: FC = () => {
  const [inputText, setInputText] = useState<string>('');
  const [inputTitle, setInputTitle] = useState<string>('')
  const [todos, setTodos] = useState<any>([]);
  const [status, setStatus] = useState<string>('all')
  const [filteredTodos, setFilteredTodos] = useState<any>([])

  useEffect(() => {
    filterHandler()
    saveTodos()
  }, [todos, status])
  useEffect(() => {
    getTodos()
  }, [])


  const filterHandler = () => {
    if (status == 'completed') {
      setFilteredTodos(todos.filter(todo => todo.completed === true))
    } else if (status == 'incomplete') {
      setFilteredTodos(todos.filter(todo => todo.completed === false))
    } else {
      setFilteredTodos(todos)
    }
  }

  const saveTodos = () => {
    if (todos.length !== 0) {
      localStorage.setItem('todos', JSON.stringify(todos))
    }
  }

  const getTodos = () => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos !== null) {
      setTodos(JSON.parse(storedTodos));
    } else {
      localStorage.setItem('todos', JSON.stringify([]));
    }
  }

  return (
    <div className="app">
      <h1>Todo list</h1>
      <Form
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
        inputTitle = {inputTitle}
        setInputTitle = {setInputTitle}
        setStatus={setStatus}
      />
      <TodoList filteredTodos={filteredTodos} todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;