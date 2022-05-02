import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Item from "../Item/Item";
import './Items.css';

const Items = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/items").then((res) => {
      setItems(res.data);
    });
  }, []);
  console.log(items);
  return (
    <div>
      <h2 className="text-center mt-3">Items</h2>
      <Container>
          <div className="items-container">
              {
                items.map(item => <Item key={item._id} item={item}></Item>)
              }
          </div>
      </Container>
    </div>
  );
};

export default Items;
