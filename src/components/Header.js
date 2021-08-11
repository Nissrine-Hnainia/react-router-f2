import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
// import Navbar from "react-bootstrap/Navbar"

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
            {/* <Nav.Link href="#home">Home</Nav.Link> */}
            <Link className="link" to="/" >Home</Link>
            <Link className="link" to="/about" >About</Link>
            <Link className="link" to="/products" >Products</Link>
            </Nav>
            </Container>
        </Navbar>
    )
}

export default Header
