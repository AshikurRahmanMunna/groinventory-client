import React from "react";
import logo from "../../logos/logo1.png";
import { Link, useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const AddInventory = () => {
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);
  const handleAddItem = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const supplierName = event.target.supplierName.value;
    const shortDesc = event.target.shortDesc.value;
    const price = parseInt(event.target.price.value);
    const quantity = parseInt(event.target.quantity.value);
    const unit = event.target.unit.value;
    const img = event.target.img.value;
    axios
      .post("https://secret-wildwood-43092.herokuapp.com/items", {
        name,
        img,
        shortDesc,
        price,
        quantity,
        unit,
        supplierName,
        email: user?.email
      })
      .then((res) => {
        console.log(res.data)
        if (res?.data?.acknowledged === true) {
          toast.success("Item Added Successfully", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          event.target.reset();
          navigate('/inventory/manage');
        }
      });
  };
  return (
    <div className="full-height-center py-5">
      <div>
        <Container>
          <div className="form">
            <div className="text-center">
              <Link to="/">
                <img
                  className="mb-4"
                  style={{ width: "270px" }}
                  src={logo}
                  alt="logo"
                />
              </Link>
            </div>
            <h2 className="text-center">
              Add <span className="text-custom-primary">Item</span>
            </h2>
            <form onSubmit={handleAddItem} className="mx-auto">
              <input
                type="text"
                name="name"
                placeholder="Product Name"
                autoComplete="off"
                required
              />
              <textarea
                type="text"
                name="shortDesc"
                placeholder="Short Description"
                autoComplete="off"
                required
              />
              <input type="number" name="price" placeholder="Price" required />
              <input
                type="number"
                name="quantity"
                placeholder="quantity"
                autoComplete="off"
                required
              />
              <select name="unit" required>
                <option value="Kg">kg</option>
                <option value="Kg">ltr</option>
                <option value="Kg">pack</option>
              </select>
              <input
                type="text"
                name="supplierName"
                placeholder="Supplier Name"
                autoComplete="off"
                required
              />
              <input type="url" name="img" placeholder="Image URL" autoComplete="off" required />
              <input type="submit" value="Add Item" />
            </form>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default AddInventory;
