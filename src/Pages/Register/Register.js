import React from "react";
import logo from "../../logos/logo1.png";
import { Link, useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";

const Register = () => {
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
            <h2 className="text-center">
              Regis<span className="text-custom-primary">ter</span>
            </h2>
            <form className="mx-auto">
              <input type="text" name="name" placeholder="Name" />
              <input type="email" name="email" placeholder="Email" />
              <div className="password">
                <input type="password" name="password" placeholder="Password" />
              </div>
              <input type="checkbox" name="checkbox" id="check" />
              <label className="ms-2 mb-2" htmlFor="check">
                Agree To Our Terms And Conditions
              </label>
              <input type="submit" value="Login" />
            </form>
            <button className="text-decoration-none text-muted btn btn-link">
              Forgot Password
            </button>
            <p className="form-toggle">
              Have An Account?{" "}
              <span onClick={() => navigate("/login")}>Login</span>
            </p>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Register;
