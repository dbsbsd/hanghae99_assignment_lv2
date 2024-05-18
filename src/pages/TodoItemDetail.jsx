import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector  } from 'react-redux';
import styled from 'styled-components';
import './styles/TodoItemDetail.scss';

const Container = styled.div`
    div, h1, main {
        padding: 0 24px;
    }
`

function TodoItemDetail() {
    const navigate  = useNavigate();
    const { id } = useParams();
    
    const todo = useSelector((state) => state.todos);
    const data = todo.todos.find((todo) => todo.id === parseInt(id));

    return (
        <div className='detailWindow'>
            <div className='detailContent'>
                <Container>
                    <div className='header'>
                        <div>ID : {data.id}</div>
                        <button onClick={() => {navigate("/");}} className='btn'>이전</button>
                    </div>
                    <h1>{data.title}</h1>
                    <main>{data.content}</main>
                </Container>
            </div>
        </div>
    );
}

export default TodoItemDetail;