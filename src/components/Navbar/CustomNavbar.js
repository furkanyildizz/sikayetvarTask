import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Button, NavbarText } from 'reactstrap';
import logo from '../../assets/images/logo.png'
import './CustomNavbar.css'



const CustomNavbar = () => {
    // Collapse isOpen State

    return (
        <Navbar  expand="lg">
            <Container>
                <Navbar.Brand href="/"><img src={logo}></img></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className="me-auto">
                        <Nav.Link style={{color:"white"}} href="/">Posts</Nav.Link>

                    </Nav>
                    <Navbar.Text>
                        <Button className='navbarbutton'>Login</Button>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

export default CustomNavbar;
