import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./InventoryItem.css";

const InventoryItem = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const { _id, name, img, shortDesc, price, quantity, supplierName, unit } =
    item;
  useEffect(() => {
    axios
      .get(`http://localhost:5000/item/${id}`)
      .then((res) => setItem(res.data));
  }, [id]);
  const handleDeliver = () => {
    axios
      .put(`http://localhost:5000/item/${id}`, {
        quantity: item.quantity - 1,
      })
      .then((res) => {
        if (res?.data?.acknowledged === true) {
          axios
            .get(`http://localhost:5000/item/${id}`)
            .then((res) => setItem(res.data));
        }
      });
  };
  const handleRestock = event => {
    event.preventDefault();
    const restockAmount = event.target.restock.value;
    axios
      .put(`http://localhost:5000/item/${id}`, {
        quantity: item.quantity + parseFloat(restockAmount),
      })
      .then((res) => {
        if (res?.data?.acknowledged === true) {
          axios
            .get(`http://localhost:5000/item/${id}`)
            .then((res) => setItem(res.data));
        }
      });
      event.target.reset();
  }
  return (
    <div className="container inventory-item d-flex my-5 align-items-center justify-content-center">
      <div className="col-md-6">
        <img className="img-fluid w-100" src={img} alt="" />
      </div>
      <div className="col-md-6 ps-5">
        <h2 className="text-custom-primary">{name}</h2>
        <h6>Id: {_id}</h6>
        <p>
          <small>{shortDesc}</small>
        </p>
        <p>
          Price: {price}/{unit}
        </p>
        <p>
          Quantity: {quantity} {unit}
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
