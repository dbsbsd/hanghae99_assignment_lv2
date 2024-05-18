import React, { useState, useEffect, useRef } from 'react'
import TodoForm from "../pages/TodoForm";
import TodoList from '../pages/TodoList';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from '../redux/config/ConfigStore'
import { addTodo, deleteTodo, toggleStatusTodo } from '../redux/modules/todos';

function TodoApp() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);

  const textRef = useRef("");

  useEffect(() => {
    textRef.current.focus();
  }, []);

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleAddTodo = (e) => {
    e.preventDefault();

    if (title.trim() !== '' & content.trim() !== '') {
      const newTodo = {
        id: todos.length + 1,
        title,
        content,
        isDone: false,
      }

      dispatch(addTodo(newTodo));
    } else {
      alert('제목 및 내용을 입력해주세요.');
    }

    setTitle('');
    setContent('');
    textRef.current.focus();
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleToggleStatusTodo = (id) => {
    dispatch(toggleStatusTodo(id));
  };

  return (
    <>
      <Provider store={store}>
        <TodoForm
          title={title}
          content={content}
          handleTitleChange={handleTitleChange}
          handleContentChange={handleContentChange}
          handleAddTodo={handleAddTodo}
          textRef={textRef}
        />
        <TodoList
          todos={todos}
          handleDeleteTodo={handleDeleteTodo}
          handleToggleStatusTodo={handleToggleStatusTodo}
        />
      </Provider>
    </>
  )
}

export default TodoApp