import React from "react";
import {Navbar, Container, Nav} from "react-bootstrap"
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <Link className="link" to="/">Home</Link> 
                    <Link className="link" to="/products">Products</Link>
                    <Link className="link" to="/contact">Contact</Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;
