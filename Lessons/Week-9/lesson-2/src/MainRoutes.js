import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage/HomePage'
import AddTodo from './Components/AddTODO/AddTodo';
import TodoList from './Components/TODOList/TodoList';

const MainRoutes = () => {
    return (
     <Routes>
         <Route path="/" element={<HomePage/>}/>
         <Route path='/add' element={<AddTodo/>}/>
         <Route path="/todos" element={<TodoList/>}/>
     </Routes>
    );
};

export default MainRoutes;