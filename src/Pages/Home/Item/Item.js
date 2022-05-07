import React from "react";
import { useNavigate } from "react-router-dom";
import "./Item.css";

const Item = ({ item }) => {
  const { _id, name, img, shortDesc, price, quantity, supplierName, unit } = item;
  const navigate = useNavigate();
  return (
    <div className="col item-card">
      <img className="img-fluid mb-2 w-100" src={img} alt={name} />
      <div className="item-card-body">
        <h4>{name}</h4>
        <p>
          <small>{shortDesc}</small>
        </p>
        <p>
          Price: {price}/{unit}
        </p>
        <p>
          Quantity: {quantity}
          {unit}
        </p>
        <p>
          Total Price: {quantity * price}Tk
        </p>
        <p>Supplier: {supplierName}</p>
      </div>
      <button onClick={() => navigate(`inventory/${_id}`)}>Stock Update</button>
    </div>
  );
};

export default Item;
