import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import NotFound from "./Pages/Shared/NotFound/NotFound";
import Header from "./Pages/Shared/Header/Header";
import Footer from "./Pages/Shared/Footer/Footer";
import ToTop from "./Pages/Shared/ToTop/ToTop";
import Login from "./Pages/Login/Login";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Register from "./Pages/Register/Register";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import RequireAuth from "./Pages/Shared/RequireAuth/RequireAuth";
import AddReview from "./Pages/AddReview/AddReview";
import EmailVerify from "./Pages/EmailVerify/EmailVerify";
import InventoryItem from "./Pages/InventoryItem/InventoryItem";
import ManageInventory from "./Pages/ManageInventory/ManageInventory";
import AddInventory from "./Pages/AddInventory/AddInventory";
import MyItems from "./Pages/MyItems/MyItems";
import MyReviews from "./Pages/MyReviews/MyReviews";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/addreview" element={
          <RequireAuth>
            <AddReview></AddReview>
          </RequireAuth>
        }></Route>
        <Route path="/inventory/:id" element={
          <RequireAuth>
            <InventoryItem></InventoryItem>
          </RequireAuth>
        }></Route>
        <Route path="/inventory/manage" element={
          <RequireAuth>
            <ManageInventory></ManageInventory>
          </RequireAuth>
        }></Route>
        <Route path="/inventory/add" element={
          <RequireAuth>
            <AddInventory></AddInventory>
          </RequireAuth>
        }></Route>
        <Route path="/inventory/myitems" element={
          <RequireAuth>
            <MyItems></MyItems>
          </RequireAuth>
        }></Route>
        <Route path="/reviews" element={
          <RequireAuth>
            <MyReviews></MyReviews>
          </RequireAuth>
        }></Route>
        <Route path="/reviews/add" element={
          <RequireAuth>
            <AddReview></AddReview>
          </RequireAuth>
        }></Route>
        <Route path="/emailverify" element={<EmailVerify></EmailVerify>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToTop></ToTop>
      <ToastContainer></ToastContainer>
      <Footer></Footer>
    </div>
  );
}

export default App;
