import React from 'react'
import './styles/TodoItem.scss';
import { Link } from 'react-router-dom';

function TodoItem({ todo, handleDeleteTodo, handleToggleStatusTodo }) {

  return (
    <div className='content' key={todo.id}>
      <Link to={`/${todo.id}`} className='detail'>상세보기</Link>
      <div>
        <h3>{todo.title}</h3>
        <p>{todo.content}</p>
      </div>
      <div className='btn'>
        <button className='deleteBtn' onClick={() => handleDeleteTodo(todo.id)}>삭제하기</button>
        <button className='doneBtn' onClick={() => handleToggleStatusTodo(todo.id)}>
          {todo.isDone ? '취소' : '완료'}
        </button>
      </div>
    </div>
  )
}

export default TodoItem