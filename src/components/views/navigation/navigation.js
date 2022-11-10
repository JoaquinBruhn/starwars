import React from "react";
import logo from "../../../logo2.svg";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

import "./navigation.css";

const Navigation = () => {
  return (
    <>
      <Navbar className="navbar" variant="dark" expand="lg" sticky="top">
        <Container fluid>
          <Navbar.Brand href="#home">
            <img src={logo} className="logo" alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="linksNav" as={Link} to="/">
                <h2>Home</h2>
              </Nav.Link>
              <Nav.Link className="linksNav" as={Link} to="/galaxy">
                <h2>Explore the galaxy</h2>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
