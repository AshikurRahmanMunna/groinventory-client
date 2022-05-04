import React, { useRef, useState } from "react";
import "./Login.css";
import logo from "../../logos/logo1.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Container, InputGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast } from "react-toastify";
import Loading from "../Shared/Loading/Loading";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

const Login = () => {
  const emailRef = useRef();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, errorSending] =
    useSendPasswordResetEmail(auth);
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  let errorElement;
  if (error) {
    errorElement = <p className="text-danger">{error?.message}</p>;
  }
  if(loading) {
    return <Loading></Loading>;
  }
  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    signInWithEmailAndPassword(email, password);
  };
  const passwordReset = () => {
    const email = emailRef?.current?.value;
    sendPasswordResetEmail(email);
    toast.success('Email Sent', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark"
    });
  };
  if (user) {
    navigate(from, { replace: true });
  }
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
              Log<span className="text-custom-primary">in</span>
            </h2>
            <form onSubmit={handleLogin} className="mx-auto">
              <input
                ref={emailRef}
                type="email"
                name="email"
                placeholder="Email"
              />
              <div className="password">
                <input
                  type={show ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                />
                <span onClick={() => setShow(!show)}>
                  <FontAwesomeIcon icon={show ? faEyeSlash : faEye} />
                </span>
              </div>
              <input type="submit" value="Login" />
            </form>
            <div style={{ width: "400px" }}>{errorElement}</div>
            <button onClick={passwordReset} className="text-decoration-none text-muted btn btn-link">
              Forgot Password
            </button>
            <SocialLogin></SocialLogin>
            <p className="form-toggle">
              Not A Member?{" "}
              <span
                className="text-custom-primary"
                onClick={() => navigate("/register")}
              >
                Register
              </span>
            </p>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Login;
