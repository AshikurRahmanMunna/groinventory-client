import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

const NewsDetails = () => {
  const [news, setNews] = useState({});
  const { title, img, desc, date, time, _id } = news;
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`https://secret-wildwood-43092.herokuapp.com/newsDetails/${id}`)
      .then((res) => setNews(res.data));
  }, []);
  return (
    <Container>
      <div className="news-card w-50 d-block mx-auto my-5">
        <img className="img-fluid w-100" src={img} alt="" />
        <h5 className="mt-2">{title}</h5>
        <p>{desc}</p>
        <p>
          {date} At {time}
        </p>
      </div>
    </Container>
  );
};

export default NewsDetails;
