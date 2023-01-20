import React from "react";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import { Routes, Route } from "react-router-dom";
const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
