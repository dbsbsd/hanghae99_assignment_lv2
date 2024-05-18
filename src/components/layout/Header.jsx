import React from 'react'
import { Link } from 'react-router-dom';
import './styles/Header.scss';

function Header() {
  return (
    <div className='header'>
      <Link to="/" className='link'>My Todo List</Link>
      <div>React</div>
    </div>
  )
}

export default Header