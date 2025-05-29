import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { ProductDetails } from "../pages/ProductDetails";
import { Cart } from "../pages/Cart";

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="cart" element={<Cart />} />
    <Route path="/product/:id" element={<ProductDetails />} />
  </Routes>
);
