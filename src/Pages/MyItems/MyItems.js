import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyItems = () => {
    const [user, loading, error] = useAuthState(auth);
    const [items, setItems] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:5000/itemsByEmail?email=${user.email}`)
        .then(res => {
            setItems(res.data);
        })
    }, [user]);
  return (
    <div className="full-height-center">
      <div>
        <h2 className="text-center">
          My <span className="text-custom-primary">Items</span>
          {
            items.map(item => <li>{item.name}</li>)
          }
        </h2>
      </div>
    </div>
  );
};

export default MyItems;
