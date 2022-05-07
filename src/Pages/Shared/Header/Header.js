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
    if (
      pathname === "/login" ||
      pathname === "/register" ||
      pathname === "/inventory/add" ||
      pathname === "/reviews/add" ||
      pathname === "/news/add" ||
      pathname === '*'
    ) {
      setHideNav(true);
    } else {
      setHideNav(false);
    }
  }, [pathname]);
  console.log(user);
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
              {user ? (
                <>
                  <Nav.Link as={Link} to="/">
                    Home
                  </Nav.Link>
                  <Nav.Link as={Link} to="/#items">
                    Items
                  </Nav.Link>
                  <Nav.Link as={Link} to="/manageItems">
                    Manage Items
                  </Nav.Link>
                  <Nav.Link as={Link} to="/inventory/add">
                    Add Item
                  </Nav.Link>
                  <Nav.Link as={Link} to="/inventory/myitems">
                    My Items
                  </Nav.Link>
                  <Nav.Link as={Link} to="/blogs">
                    Blogs
                  </Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link as={Link} to="/">
                    Home
                  </Nav.Link>
                  <Nav.Link as={Link} to="/#items">
                    Items
                  </Nav.Link>
                </>
              )}
            </Nav>
            <Nav className="ms-auto">
              {user ? (
                <NavDropdown title={user?.displayName} id="basic-nav-dropdown">
                  <NavDropdown.Item as={Link} to="/news/add">
                    Add News
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/reviews/add">
                    Add Review
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/reviews">
                    My Reviews
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
