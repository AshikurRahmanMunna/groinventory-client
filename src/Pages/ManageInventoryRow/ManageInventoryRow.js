import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Confirm from "../Shared/Confirm/Confirm";
import "./ManageInventoryRow.css";

const ManageInventoryRow = ({ item, setItems, items }) => {
  const { name, email, quantity, price, supplierName, _id } = item;
  const [confirmShow, setConfirmShow] = useState(false);
  const navigate = useNavigate();
  const handleDelete = () => {
    setConfirmShow(false);
    axios
      .delete(`https://secret-wildwood-43092.herokuapp.com/items/${_id}`)
      .then((res) => {
        console.log(res.data);
        if (res?.data?.deletedCount > 0) {
          const remaining = items.filter((item) => item._id !== _id);
          setItems(remaining);
          toast.success("Item Deleted Successfully", {
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
      });
  };
  const handleNotDelete = () => {
    setConfirmShow(false);
    toast.error("Popup Close By User", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    // table row
    <tr>
      <td>{name}</td>
      <td>
        <a href={`mailto:${email}`} className="text-dark">
          {email}
        </a>
      </td>
      <td className="text-end">{quantity}</td>
      <td className="text-end">{price}</td>
      <td className="text-end">{price * quantity}</td>
      <td>{supplierName}</td>
      <td>
        <div className="table-buttons">
          <button
            onClick={() => navigate(`/inventory/${_id}`)}
            className="update-stock"
          >
            Update Stock
          </button>
          <button
            onClick={() => setConfirmShow(true)}
            className="btn btn-danger"
          >
            Delete
          </button>
        </div>
      </td>
      {/* confirm to delete */}
      <Confirm
        show={confirmShow}
        onConfirm={handleDelete}
        onHide={handleNotDelete}
        heading={`${name}`}
        body={`Do You Really Want To Delete ${name}`}
        closeButton="Close"
        okButton="Delete"
      ></Confirm>
    </tr>
  );
};

export default ManageInventoryRow;
