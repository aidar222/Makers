import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='navbar'>
            {/* <a href='/'>Home</a>
            <a href='/about'>About</a>
            <a href='/users'>Users</a> */}

            {/* <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/users'>Users</Link> */}

            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/users'>Users</NavLink>
        </div>
    );
};

export default NavBar;