import './App.css';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import React, { useEffect, useState } from 'react';

const initialTodos = [
  {
    id: 1,
    title: "todo #1",
    description: 'Desc del Todo #1',
    completed: false
  },
  {
    id: 2,
    title: "todo #2",
    description: 'Desc del Todo #2',
    completed: true
  }

];

const localTodos = JSON.parse(localStorage.getItem('todos'));

const App = () => {

  const [todos, setTodos] = useState(localTodos || initialTodos);
  const [todoEdit, setTodoEdit] = useState(null)

  useEffect(() => {

    localStorage.setItem('todos', JSON.stringify(todos));

  }, [todos])

  const todoDelete = (todoId) => {

    if (todoEdit && todoId === todoEdit.id) {
      setTodoEdit(null);
    }

    const changeTodos = todos.filter(todo => todo.id !== todoId);

    setTodos(changeTodos);
  }

  const todoToogleCompleted = (todoId) => {

    // const changeTodos = todos.map(todo => {

    //   const todoEdit = {
    //     ...todo,
    //     completed: !todo.completed
    //   }
    //   if (todo.id === todoId) {
    //     return todoEdit
    //   } else {
    //     return todo
    //   }
    // })

    // const changeTodos = todos.map(todo => (
    //   todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    // ))

    const changeTodos = todos.map(todo => todo.id === todoId ? { ...todo, completed: !todo.completed } : todo);

    setTodos(changeTodos);
  }

  const todoAdd = (todo) => {

    const newTodo = {
      id: Date.now(),
      ...todo,
      completed: false
    }

    const changeTodos = [
      newTodo,
      ...todos

    ]

    setTodos(changeTodos);
  }

  const todoUpdate = (todoEdit) => {

    const changeTodos = todos.map(todo => (
      todo.id === todoEdit.id
        ? todoEdit
        : todo
    ))

    setTodos(changeTodos);
  }

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-8">
          <TodoList todos={todos}
            todoDelete={todoDelete}
            todoToogleCompleted={todoToogleCompleted}
            setTodoEdit={setTodoEdit}
          ></TodoList>
        </div>
        <div className="col-4">
          <TodoForm
            todoAdd={todoAdd}
            todoEdit={todoEdit}
            todoUpdate={todoUpdate}
            setTodoEdit={setTodoEdit}
          ></TodoForm>
        </div>
      </div>
    </div>
  );
}

export default App;
