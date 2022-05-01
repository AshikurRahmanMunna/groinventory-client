import React, { useRef, useState } from "react";
import logo from "../../logos/logo1.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useUpdateProfile } from "react-firebase-hooks/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Register = () => {
  const navigate = useNavigate();
  const checkRef = useRef();

  const [checked, setChecked] = useState(false);
  console.log(checked);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  let errorElement;
  if (error) {
    errorElement = <p className="text-danger">{error?.message}</p>;
  }
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  const [updateProfile, updating, errorUpdating] = useUpdateProfile(auth);
  const handleRegister = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const profile = event.target.profilePic;
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
  };
  if (user) {
    navigate(from, { replace: true });
  }
  const [show, setShow] = useState(false);
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
            <form onSubmit={handleRegister} className="mx-auto">
              <input type="text" name="name" placeholder="Name" required />
              <input type="email" name="email" placeholder="Email" required />
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
              <input
                onChange={() => setChecked(checkRef?.current?.checked)}
                ref={checkRef}
                type="checkbox"
                name="checkbox"
                id="check"
              />
              <label className="ms-2 mb-2" htmlFor="check">
                Agree To Our Terms And Conditions
              </label>
              <input
                disabled={checked ? false : true}
                className="form-submit"
                type="submit"
                value="Register"
                required
              />
            </form>
            <div style={{ width: '400px' }}>{errorElement}</div>
            <p className="form-toggle">
              Have An Account?{" "}
              <span
                className="text-custom-primary"
                onClick={() => navigate("/login")}
              >
                Login
              </span>
            </p>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Register;
