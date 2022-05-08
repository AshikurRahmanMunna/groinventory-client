import axios from "axios";
import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Item from "../Home/Item/Item";
import ManageInventoryRow from "../ManageInventoryRow/ManageInventoryRow";

const MyItems = () => {
  const [user, loading, error] = useAuthState(auth);
  const [items, setItems] = useState([]);
  useEffect(() => {
    // get user items
    try {
      axios
      .get(`https://secret-wildwood-43092.herokuapp.com/itemsByEmail?email=${user.email}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
      })
      .then((res) => {
        setItems(res.data);
      });
    }
    catch(error) {
      console.log(error.message)
      if(error.response.status === 401 || error.response.status === 403) {
        signOut(auth);
        navigator('/login');
        localStorage.removeItem('accessToken');
      }
    }
  }, [user]);
  return (
    <div className="bg-white">
      <div className="container bg-white full-height-center">
        <div>
          <h2 className="text-center">My <span className="text-custom-primary">Items</span></h2>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Email</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total</th>
                <th>Supplier</th>
                <th>Options</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <ManageInventoryRow
                  key={item._id}
                  item={item}
                  setItems={setItems}
                  items={items}
                ></ManageInventoryRow>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default MyItems;
