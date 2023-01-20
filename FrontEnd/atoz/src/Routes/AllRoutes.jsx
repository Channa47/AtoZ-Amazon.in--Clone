import React from "react";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import { Routes, Route } from "react-router-dom";
import Sample from "../Admin/Sample";
import SinglePage from "../pages/SinglePage";
import Cart from "../pages/Cart";
const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Sample />} />
        <Route path="/single" element={<SinglePage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
