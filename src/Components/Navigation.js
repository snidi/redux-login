import React, { useState } from 'react';
import { Row, Col, Container, Nav, NavDropdown, Navbar, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { NavLink } from 'react-router-dom'

const Navigation = () => {

    const [selectLanguage, setSelectLanguage] = useState('English')

    const handleLanguageSelect = e => {
        console.log(e);
        setSelectLanguage(e)
    }

    return (
        <>
            <div className=''>
                <Navbar bg="light" expand="lg">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <LinkContainer className="routeLink ml-5" exact activeClassName='activeLink' to="/">
                                <Nav.Link>Home</Nav.Link>
                            </LinkContainer>
                            <LinkContainer className="routeLink ml-5" exact activeClassName='activeLink' to="/features">
                                <NavDropdown title="Top-up" id="basic-nav-dropdown">
                                    <LinkContainer exact activeClassName='activeLink' to="/features">
                                        <NavDropdown.Item>Feature 1</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer exact activeClassName='activeLink' to="/features">
                                        <NavDropdown.Item>Feature 2</NavDropdown.Item>
                                    </LinkContainer>
                                    <NavDropdown.Divider />
                                    <LinkContainer exact activeClassName='activeLink' to="/features">
                                        <NavDropdown.Item>Feature 3</NavDropdown.Item>
                                    </LinkContainer>
                                </NavDropdown>
                            </LinkContainer>
                            <LinkContainer className="routeLink ml-5" exact activeClassName='activeLink' to="/contact_us">
                                <Nav.Link>Contact Us</Nav.Link>
                            </LinkContainer>
                            <LinkContainer className="routeLink ml-5" exact activeClassName='activeLink' to="/help">
                                <Nav.Link>Help</Nav.Link>
                            </LinkContainer>
                        </Nav>
                        <Nav>
                            <NavDropdown className="routeLink mr-5" title={selectLanguage} id="basic-nav-dropdown" onSelect={handleLanguageSelect}>
                                <NavDropdown.Item eventKey='English'>English</NavDropdown.Item>
                                <NavDropdown.Item eventKey='Spanish'>Spanish</NavDropdown.Item>
                                <NavDropdown.Item eventKey='Hindi'>Hindi</NavDropdown.Item>
                            </NavDropdown>
                            <LinkContainer className="routeLink mr-5" exact activeClassName='activeLink' to="/login">
                                <Nav.Link>Sign In</Nav.Link>
                            </LinkContainer>
                            <LinkContainer className="routeLink mr-5" exact activeClassName='activeLink' to="/register">
                                <Nav.Link>
                                    <Button>
                                        Register
                                    </Button>
                                </Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </>
    )
}

export default Navigation