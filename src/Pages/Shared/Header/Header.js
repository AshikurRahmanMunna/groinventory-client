import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useLocation } from "react-router-dom";
import auth from "../../../firebase.init";
import logo from "../../../logos/logo1.png";
import "./Header.css";

const Header = () => {
  const [hideNav, setHideNav] = useState(false);
  const [user, loading, error] = useAuthState(auth);
  const location = useLocation();
  const pathname = location.pathname;
  useEffect(() => {
    if (pathname === "/login" || pathname === "/register") {
      setHideNav(true);
    } else {
      setHideNav(false);
    }
  }, [pathname]);
  return (
    <div>
      <Navbar expand="lg" className={`custom-nav ${hideNav ? "d-none" : ""}`}>
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              style={{ width: "200px" }}
              src={logo}
              alt="GroInventory Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/">
                Items
              </Nav.Link>
            </Nav>
            <Nav className="ms-auto">
              {user ? (
                <NavDropdown title={user?.displayName} id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={() => signOut(auth)}>
                    Log Out
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <Nav.Link as={Link} to="/login">
                  <FontAwesomeIcon icon={faUser} /> Login
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
