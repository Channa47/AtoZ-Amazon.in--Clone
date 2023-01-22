import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import { useEffect } from "react";
const PrivateRoute = ({ children }) => {
  const isAuth = useSelector((state) => state.AuthReducer.isAuth);
  const location = useLocation();
  console.log("location", location);
  const toast = useToast();

  if (!isAuth) {
    toast({
      title: "Please Login First",
      status: "warning",
      duration: 5000,
      isClosable: true,
    });
    return (
      <>
        <Navigate to="/login" replace state={{ data: location.pathname }} />;
      </>
    );
  }
  return children;
};

export default PrivateRoute;
