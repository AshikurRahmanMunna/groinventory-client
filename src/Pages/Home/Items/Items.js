import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Item from "../Item/Item";
import './Items.css';

const Items = () => {
  const [items, setItems] = useState([]);
  // get the items
  useEffect(() => {
    axios.get("https://secret-wildwood-43092.herokuapp.com/items").then((res) => {
      setItems(res.data.slice(0, 6));
    });
  }, []);
  return (
    <div id="items">
      <h2 className="text-center mt-3">Items</h2>
      <Container>
        {/* items container */}
          <div className="items-container">
              {
                items.map(item => <Item key={item._id} item={item}></Item>)
              }
          </div>
          {/* manage inventory */}
          <div className="d-block w-100 text-center mt-3">
            <Link to='/inventory/manage' className="btn-custom my-3 text-black text-decoration-none">Manage Inventory</Link>
          </div>
      </Container>
    </div>
  );
};

export default Items;
