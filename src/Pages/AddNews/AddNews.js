import React from "react";
import logo from "../../logos/logo1.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";

const AddNews = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  const formatTime = (date) => {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + minutes + " " + ampm;
    return strTime;
  };
  const handleAddNews = (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    const img = event.target.img.value;
    const desc = event.target.desc.value;
    const date = `${new Date().getDate()}/${
      new Date().getMonth() + 1
    }/${new Date().getFullYear()}`;
    const time = formatTime(new Date());
    const news = {
      title,
      desc,
      img,
      date,
      time,
    };
    axios.post("http://localhost:5000/news", news).then((res) => {
      if (res.data.acknowledged === true) {
        toast.success("News Added Successfully", {
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
        toast.error("Popup Close By User", {
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
              Add <span className="text-custom-primary">News</span>
            </h2>
            <form onSubmit={handleAddNews} className="mx-auto">
              <input
                type="text"
                name="title"
                placeholder="Title"
                autoComplete="off"
              />
              <input
                type="url"
                name="img"
                placeholder="PhotoUrl"
                autoComplete="off"
              />
              <textarea
                type="text"
                name="desc"
                placeholder="Description"
                autoComplete="off"
              />
              <input type="submit" value="Add News" />
            </form>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default AddNews;
