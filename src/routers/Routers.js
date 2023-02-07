import { Routes, Route, Navigate } from "react-router-dom";

import Cart from "../pages/cart/Cart";
import Checkout from "../pages/checkout/Checkout";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import ProductDetails from "../pages/productDetails/ProductDetails";
import Shop from "../pages/shop/Shop";
import Signup from "../pages/Signup";
import ProtectedRoute from "./ProtectedRoute";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="home" />} />
      <Route path="home" element={<Home />} />
      <Route path="shop" element={<Shop />} />
      <Route path="shop/:id" element={<ProductDetails />} />
      <Route path="cart" element={<Cart />} />
      <Route
        path="checkout"
        element={
          <ProtectedRoute>
            <Checkout />
          </ProtectedRoute>
        }
      />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
    </Routes>
  );
};

export default Routers;
