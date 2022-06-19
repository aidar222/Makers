import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';

const Layout = () => {
    return (
        <>
            <NavBar/>
            <Outlet/>
            <footer>
                @makers 2022
            </footer>
        </>
    );
};

export default Layout;