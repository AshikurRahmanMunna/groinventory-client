import React, { useRef, useState } from "react";
import axios from "axios";
import logo from "../../logos/logo1.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast } from "react-toastify";

const AddReview = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  const handleAddReview = (event) => {
    event.preventDefault();
    const img = event.target.img.value;
    const desc = event.target.desc.value;
    const rating = parseFloat(event.target.rating.value);
    const email = user?.email;
    const name = user?.displayName;
    axios
      .post(`http://localhost:5000/reviews`, {
        name,
        email,
        img,
        desc,
        rating,
      })
      .then((res) => {
        if (res?.data?.acknowledged === true) {
          toast.success("Review Added Successfully", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          navigate(from, { replace: true });
        } else {
          toast.error("Something Wen't Wrong", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
      });
  };
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
              Add <span className="text-custom-primary">Review</span>
            </h2>
            <form onSubmit={handleAddReview} className="mx-auto">
              <input
                type="url"
                name="img"
                placeholder="PhotoUrl (Square)"
                autoComplete="off"
              />
              <textarea
                type="text"
                name="desc"
                placeholder="Description"
                autoComplete="off"
              />
              <input
                type="number"
                name="rating"
                placeholder="Rate (Max 5)"
                min={1}
                max={5}
                step={.1}
                autoComplete="off"
              />
              <input type="submit" value="Login" />
            </form>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default AddReview;
