import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo1 from "../../../../img/logo1.png";
import Button from "react-bootstrap/Button";
import { Modal } from "../Modal";
import { BsFilePerson } from "react-icons/bs";

export const Navbarr = () => {
  const [estadoModal1, cambiarEstadoModal1] = useState(false);

  return (
    <React.Fragment>
      <Navbar
        className="sombra"
        fixed="top"
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
      >
        <Container>
          <Navbar.Brand href="#" className="title">
            <img
              alt=""
              src={Logo1}
              width="40"
              height="40"
              className="d-inline-block align-top"
            />
            <span>Jabones mic</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto my-2">
            <Nav.Link href="#history">¿Quienes somos?</Nav.Link>
            <Nav.Link href="#pedidos">Pedidos</Nav.Link>
            </Nav>
            <Nav>
              <Button
                onClick={() => cambiarEstadoModal1(!estadoModal1)}
                variant="outline-info"
              >
                <BsFilePerson /> Iniciar Sesion
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modal estado={estadoModal1} cambiarEstado={cambiarEstadoModal1} />
    </React.Fragment>
  );
};
