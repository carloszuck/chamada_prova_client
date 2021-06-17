import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { faChalkboardTeacher, faUserGraduate, faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="#home"><FontAwesomeIcon icon={faUserGraduate} /> Chamada Virtual</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link><Link to='/cadastro'><FontAwesomeIcon icon={faPlusCircle} /> Cadastrar Aluno</Link></Nav.Link>
            <Nav.Link><Link to='/turmas'><FontAwesomeIcon icon={faChalkboardTeacher} /> Turmas</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
