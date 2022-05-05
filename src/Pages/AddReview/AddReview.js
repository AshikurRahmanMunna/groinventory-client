import React, { useRef, useState } from "react";
import logo from "../../logos/logo1.png";
import { Link, useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";

const AddReview = () => {
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
              Add <span className="text-custom-primary">Review</span>
            </h2>
            <form className="mx-auto">
              <input
                type="url"
                name="img"
                placeholder="PhotoUrl (Square)"
              />
              <textarea
                type="text"
                name="description"
                placeholder="Description"
              />
              <input
                type="number"
                name="rating"
                placeholder="Rate (Max 5)"
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