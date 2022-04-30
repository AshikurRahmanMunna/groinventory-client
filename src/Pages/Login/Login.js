import React from "react";
import "./Login.css";
import logo from "../../logos/logo1.png";
import { Link, useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";

const Login = () => {
    const navigate = useNavigate();
  return (
    <div className="full-height-center">
      <div>
        <Container>
          <div className="form">
            <div className="text-center">
              <Link to="/">
                <img
                  className="mb-4"
                  style={{ width: "270px" }}
                  src={logo}
                  alt="logo"
                />
              </Link>
            </div>
            <h2 className="text-center">Log<span className="text-custom-primary">in</span></h2>
            <form className="mx-auto">
              <input type="email" name="email" placeholder="Email" />
              <input type="password" name="password" placeholder="Password" />
              <input type="submit" value="Login" />
            </form>
            <button className="text-decoration-none text-muted btn btn-link">Forgot Password</button>
            <p className="form-toggle">Not A Member? <span onClick={() => navigate('/register')}>Register</span></p>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Login;
