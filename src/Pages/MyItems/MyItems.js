import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Item from "../Home/Item/Item";

const MyItems = () => {
  const [user, loading, error] = useAuthState(auth);
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/itemsByEmail?email=${user.email}`)
      .then((res) => {
        setItems(res.data);
      });
  }, [user]);
  return (
    <div className="full-height-center">
      <div className="my-5">
        <h2 className="text-center">
          My <span className="text-custom-primary">Items</span>
        </h2>
        <Container>
          <div className="items-container">
            {items.map((item) => (
              <Item key={item._id} item={item}></Item>
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default MyItems;
