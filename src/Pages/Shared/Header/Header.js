import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from '../../../logos/logo1.png';
import './Header.css';

const Header = () => {
  return (
    <div>
      <Navbar sticky="top" className="custom-nav">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img style={{width: '200px'}} src={logo} alt="GroInventory Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/">Items</Nav.Link>
            </Nav>
            <Nav className="ms-auto">
            <Nav.Link as={Link} to="/login"><FontAwesomeIcon icon={faUser} /> Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
