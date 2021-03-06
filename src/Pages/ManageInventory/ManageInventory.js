import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ManageInventoryRow from "../ManageInventoryRow/ManageInventoryRow";
import "./ManageInventory.css";

const ManageInventory = () => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("https://secret-wildwood-43092.herokuapp.com/items")
      .then((res) => setItems(res.data));
  }, []);
  return (
    <div className="bg-white">
      <div className="container-fluid bg-white full-height-center">
        <div>
          <h2 className="text-center">
            Manage <span className="text-custom-primary">Inventory</span>
          </h2>
          <button
            onClick={() => navigate("/inventory/add")}
            className="d-block mx-auto btn-custom mb-3"
          >
            Add New Item
          </button>
          <Container className="table-scroll">
            {/* react bootstrap table */}
            <Table striped bordered hover responsive>
              {/* table head */}
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
          </Container>
        </div>
      </div>
    </div>
  );
};

export default ManageInventory;
