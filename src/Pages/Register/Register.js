import React, { useRef, useState } from "react";
import logo from "../../logos/logo1.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useUpdateProfile } from "react-firebase-hooks/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Loading from "../Shared/Loading/Loading";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import { toast } from "react-toastify";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  const checkRef = useRef();
  const [show, setShow] = useState(false);
  const [checked, setChecked] = useState(false);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
  let errorElement;
  if (error) {
    errorElement = <p className="text-danger">{error?.message}</p>;
  }
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  const [updateProfile, updating, errorUpdating] = useUpdateProfile(auth);
  if(loading || updating) {
    return <Loading></Loading>
  }
  // handleRegister
  const handleRegister = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    await createUserWithEmailAndPassword(email, password);
    toast.success("Email Sent", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    await updateProfile({ displayName: name });
    await axios
      .post("https://secret-wildwood-43092.herokuapp.com/user", {email})
      .then((res) =>
        {
          localStorage.setItem("accessToken", res?.data?.accessToken);
          navigate(from, {replace: true});
        }
      );
  };
  // if user available navigate him
  if (user) {
    navigate(from, { replace: true });
  }
  return (
    <div className="full-height-center">
      <div>
        <Container>
          <div className="form my-5">
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
            <SocialLogin></SocialLogin>
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
