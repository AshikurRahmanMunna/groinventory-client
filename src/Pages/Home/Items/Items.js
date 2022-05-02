import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Item from "../Item/Item";
import './Items.css';

const Items = () => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios.get("http://localhost:5000/items").then((res) => {
      setItems(res.data);
    });
  }, []);
  console.log(items);
  return (
    <div id="items">
      <h2 className="text-center mt-3">Items</h2>
      <Container>
          <div className="items-container">
              {
                items.map(item => <Item key={item._id} item={item}></Item>)
              }
          </div>
          <button onClick={() => navigate('/inventory')} className="btn-custom mx-auto d-block my-3">Manage Inventories</button>
      </Container>
    </div>
  );
};

export default Items;
