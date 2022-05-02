import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./ManageInventoryRow.css";

const ManageInventoryRow = ({ item, setItems, items }) => {
  const { name, email, quantity, price, supplierName, _id } = item;
  const navigate = useNavigate();
  const handleDelete = () => {
    axios.delete(`http://localhost:5000/items/${_id}`).then((res) => {
        console.log(res.data)
      if (res?.data?.deletedCount > 0) {
        const remaining = items.filter((item) => item._id !== _id);
        setItems(remaining);
      }
    });
  };
  return (
    <tr>
      <td>{name}</td>
      <td>
          <a href={`mailto:${email}`} className="text-dark">
          {email}
          </a>
      </td>
      <td className="text-end">{quantity}</td>
      <td className="text-end">{price}</td>
      <td>{supplierName}</td>
      <td>
        <button
          onClick={() => navigate(`/inventory/${_id}`)}
          className="update-stock"
        >
          Update Stock
        </button>
        <button onClick={handleDelete} className="btn btn-danger">Delete</button>
      </td>
    </tr>
  );
};

export default ManageInventoryRow;
