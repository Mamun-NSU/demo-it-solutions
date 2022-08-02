import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";


const Header = () => {

    return (
        <>
            <Navbar
                collapseOnSelect
                expand="lg"
                sticky="top"
                bg="primary"
                variant="dark"
            >
                <Container>
                    <Navbar.Brand as={Link} to="/"></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="home">
                                Home
                            </Nav.Link>
                            <Nav.Link as={Link} to="about">
                                About
                            </Nav.Link>
                            <Nav.Link as={Link} to="services">
                                Services
                            </Nav.Link>
                            <Nav.Link as={Link} to="specialization">
                                Specialization
                            </Nav.Link>
                            <Nav.Link as={Link} to="contact">
                                Contact
                            </Nav.Link>
                            <Nav.Link as={Link} to="#">
                                Hire on Upwork
                            </Nav.Link>


                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;