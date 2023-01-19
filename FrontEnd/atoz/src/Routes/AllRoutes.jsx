import React from "react";
import Signup from "../Components/Signup";
import { Routes, Route } from "react-router-dom";
const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/register" element={<Signup />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
