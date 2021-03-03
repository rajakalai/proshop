import React from 'react';
import {Navbar, Nav, Container,} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';
const Header = () => {
    return ( 
        <header>
            <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand>Pro Shop</Navbar.Brand>
                    </LinkContainer>                    
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <LinkContainer to="/cart">
                        <Nav.Link > <i className="fa fa-shopping-cart"></i>Cart</Nav.Link>
                        </LinkContainer>                          
                        <LinkContainer to="/signin">
                            <Nav.Link href="#signin"><i className="fa fa-user"></i>Sign IN</Nav.Link>
                        </LinkContainer>
                    </Nav>
                    </Navbar.Collapse>
                </Container>                
            </Navbar>
        </header>        
     );
}
 
export default Header;