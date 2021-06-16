import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { faHome, faUsers } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="#home">ExampleApp</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link><Link to='/'><FontAwesomeIcon icon={faHome} /> Home</Link></Nav.Link>
            <Nav.Link><Link to='/example'><FontAwesomeIcon icon={faUsers} /> Example</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
