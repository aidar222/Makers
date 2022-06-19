import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
            <Link to="/">
                <Nav.Item>Home</Nav.Item>
            </Link>
            <Link to="/add">
             <Nav.Item>Add Todo</Nav.Item>
            </Link>
            <Link to="/todos">
                <Nav.Item>Todo List</Nav.Item>
            </Link>
        </Nav>
        </Container>
      </Navbar>
    );
};

export default Header;