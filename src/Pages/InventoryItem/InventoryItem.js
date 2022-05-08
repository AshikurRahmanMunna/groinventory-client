import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "./InventoryItem.css";

const InventoryItem = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const { _id, name, img, shortDesc, price, quantity, supplierName, unit } =
    item;
  // sold state
  const [sold, setSold] = useState('');
    useEffect(() => {
      if(quantity === 0) {
        setSold(true);
      }
      else {
        setSold(false);
      }
    }, [quantity])
    // get item by id
  useEffect(() => {
    axios
      .get(`https://secret-wildwood-43092.herokuapp.com/item/${id}`)
      .then((res) => setItem(res.data));
  }, [id]);
  // deliver
  const handleDeliver = () => {
    if(quantity > 0) {
      // decrease quantity by 1
      axios
      .put(`https://secret-wildwood-43092.herokuapp.com/item/${id}`, {
        quantity: item.quantity - 1,
      })
      .then((res) => {
        if (res?.data?.acknowledged === true) {
          axios
            .get(`https://secret-wildwood-43092.herokuapp.com/item/${id}`)
            .then((res) => setItem(res.data));
        }
      });
    }
    else {
      toast.error("You Don't Have Enough Item", {
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
  };
  // restock
  const handleRestock = event => {
    event.preventDefault();
    const restockAmount = event.target.restock.value;
    // increase quantity by restock input
    axios
      .put(`https://secret-wildwood-43092.herokuapp.com/item/${id}`, {
        quantity: item.quantity + parseFloat(restockAmount),
      })
      .then((res) => {
        if (res?.data?.acknowledged === true) {
          axios
            .get(`https://secret-wildwood-43092.herokuapp.com/item/${id}`)
            .then((res) => setItem(res.data));
        }
      });
      event.target.reset();
  }
  return (
    // Inventory stock manage
    <div className="container inventory-item d-flex my-5 align-items-center justify-content-center">
      <div className="col-md-6">
        <img className="img-fluid w-100" src={img} alt="" />
      </div>
      <div className="col-md-6 ps-5">
        <h2 className="text-custom-primary">{name}</h2>
        <h6>Id: {_id}</h6>
        {
          sold ? <p>Availability: <span className="text-danger">Sold</span></p> : <p>Availability: <span className="text-success">Available</span></p>
        }
        <p>
          <small>{shortDesc}</small>
        </p>
        <p>
          Price: {price}/{unit}
        </p>
        <p>
          Quantity: {quantity} {unit}
        </p>
        <p>
          Total Stock Price: {quantity * price}
        </p>
        <p>Supplier: {supplierName}</p>
        <button onClick={handleDeliver} className="btn-custom mb-3">
          Delivered
        </button>
        <form onSubmit={handleRestock} className="restock-form">
            <label htmlFor="stock">Restock The Item</label>
            <input type="number" name="restock" placeholder="Stock Amount" id="stock" />
            <input type="submit" value="Restock The Item" />
        </form>
      </div>
    </div>
  );
};

export default InventoryItem;
