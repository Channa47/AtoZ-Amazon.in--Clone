import React from "react";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import { Routes, Route } from "react-router-dom";
import Sample from "../Admin/Sample";
import SinglePage from "../pages/SinglePage";
import Cart from "../pages/Cart";
import Address from "../Components/Address";
import PrivateRoute from "../Components/PrivateRoute";
import Payment from "../Components/payment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Home } from "../Components/Home";
import Products from "../Components/Products";
import { UnderConstruction } from "../Components/UnderConstruction";

const promise = loadStripe(
  "pk_test_51MS3GNSAP9Ek1ttSa1Ghpc3tjOlYtKWim3SoYjapoXWX213gYGiOJdujLt0j6NS7hi9bjy7F0caxZ1aPTduUVbvy00drTtwJbM"
);

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Sample />} />
        <Route path="/single/:id" element={<PrivateRoute><SinglePage /></PrivateRoute>} />
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        />
       
        <Route path="/address/" element={<PrivateRoute><Address /></PrivateRoute>}></Route>
        <Route path="/products/:name" element={<Products/>}/>
        <Route path="/payment" element={<PrivateRoute><Elements stripe={promise}><Payment /></Elements></PrivateRoute>}></Route>
        <Route path="/maintainance" element={<UnderConstruction/>} />
        <Route path="*" element={<UnderConstruction/>} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
