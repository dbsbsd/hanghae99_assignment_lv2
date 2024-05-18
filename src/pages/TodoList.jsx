import React from 'react'
import TodoItem from './TodoItem'
import './styles/TodoList.scss';

function TodoList({ todos, handleDeleteTodo, handleToggleStatusTodo }) {
  return (
    <div className='contentWindow'>
      <h2>Working.. 🔥</h2>
      <div className='listWindow'>
        {todos.filter(todo => !todo.isDone).map(todo => (
          <TodoItem key={todo.id} todo={todo} handleDeleteTodo={handleDeleteTodo} handleToggleStatusTodo={handleToggleStatusTodo} />
        ))}
      </div>
      <h2>Done..! 😎</h2>
      <div className='listWindow'>
        {todos.filter(todo => todo.isDone).map(todo => (
          <TodoItem key={todo.id} todo={todo} handleDeleteTodo={handleDeleteTodo} handleToggleStatusTodo={handleToggleStatusTodo} />
        ))}
      </div>
    </div>
  )
}

export default TodoList