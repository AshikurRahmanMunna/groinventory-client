import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import SingleNews from "../SingleNews/SingleNews";
import "./News.css";

const News = () => {
  const [news, setNews] = useState([]);
  // get all news
  useEffect(() => {
    axios.get("https://secret-wildwood-43092.herokuapp.com/news").then((res) => setNews(res.data));
  }, []);
  return (
    <Container>
      <h2 className="text-center">
        Latest <span className="text-custom-primary">News</span>
      </h2>
      <div className="news-container mt-3 mb-5">
        {/* send news by map */}
        {news.map((n) => (
          <SingleNews key={n._id} news={n}></SingleNews>
        ))}
      </div>
    </Container>
  );
};

export default News;
