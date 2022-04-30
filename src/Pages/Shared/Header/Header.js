import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import logo from '../../../logos/logo1.png';
import './Header.css';

const Header = () => {
  const [hideNav, setHideNav] = useState(false);
  const location = useLocation();
  const pathname = location.pathname;
  useEffect(() => {
    if(pathname === '/login' || pathname === '/register') {
      setHideNav(true);
    }
    else {
      setHideNav(false)
    }
  }, [pathname])
  return (
    <div>
      <Navbar expand="lg" className={`custom-nav ${hideNav ? 'd-none' : ''}`}>
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
