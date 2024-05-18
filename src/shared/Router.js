import Header from "../components/layout/Header";
import TodoApp from "../pages/TodoApp";
import TodoItemDetail from "../pages/TodoItemDetail";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from 'styled-components';

const Layout = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
`;

const Router = () => {
  return (
    <BrowserRouter>
        <Layout>
            <Header />
            <Routes>
                <Route path="/" element={<TodoApp />} />
                <Route path="/:id" element={<TodoItemDetail />} />
            </Routes>
        </Layout>
    </BrowserRouter>
  )
}

export default Router