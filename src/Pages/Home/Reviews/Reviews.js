import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import Review from "../Review/Review";

const Reviews = () => {
  const settings = {
    dots: false,
    infinite: false,
    centerPadding: "60px",
    className: "center",
    speed: 300,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    pauseOnHover: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
        },
      },
    ],
  };
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/reviews").then((res) => {
      setReviews(res.data);
    });
  }, []);
  return (
    <div className="my-5">
      <h2 className="text-center">
        Customer <span className="text-custom-primary">Reviews</span>
      </h2>
      <Container>
        <Slider {...settings}>
          {reviews.map((review) => (
            <Review key={review._id} review={review}></Review>
          ))}
        </Slider>
      </Container>
    </div>
  );
};

export default Reviews;
