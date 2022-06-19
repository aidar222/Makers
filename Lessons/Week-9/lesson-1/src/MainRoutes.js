import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage';
import AboutPage from './Components/AboutPage'
import UsersPage from './Components/UsersPage';
import Layout from './Components/Layout';
import UserDetails from './Components/UserDetails';

const MainRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Layout/>}>
            <Route index element={<HomePage/>}/>
            <Route path='about' element={<AboutPage/>}/> 
            <Route path='users' element={<UsersPage/>}/> 
            <Route path='users/:id' element={<UserDetails/>}/>
            </Route>
        </Routes>
    );
};

export default MainRoutes;