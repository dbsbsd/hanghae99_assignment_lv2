import React from 'react'
import './styles/TodoForm.scss';

function TodoForm({ title, content, handleTitleChange, handleContentChange, handleAddTodo, textRef }) {
  return (
    <form className='inputWindow'>
      <div className='inputBtn'>
        <label>제목</label>
        <input type='text' value={title} onChange={handleTitleChange} ref={textRef} />
        <label>내용</label>
        <input type='text' value={content} onChange={handleContentChange} />
      </div>
      <button className='addBtn' onClick={handleAddTodo}>추가하기</button>
    </form>
  )
}

export default TodoForm