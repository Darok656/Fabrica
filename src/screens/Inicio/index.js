import React from 'react';
import { auth } from '../../Firebase';
import { signOut } from 'firebase/auth';
import { Admin } from './view/Admin'
import { User } from './view/User';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const Inicio = ({ user }) => {
  return (
    <React.Fragment>
      <Navbar bg="info" variant='dark' expand="lg">
      <Container>
        <Navbar.Brand href="#">Bienvenido: {user.email}</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          </Nav>
            <Button variant="danger" onClick={() => signOut(auth)}> Cerrar sesión </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>

      {user.rol === "admin" ? <Admin/> : <User/>}
    </React.Fragment>
  )
}
