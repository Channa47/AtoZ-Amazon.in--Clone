import * as types from "./actionTypes";
import axios from "axios";

const cartReq = () => {
  return { type: types.CART_REQUEST };
};

const cartSuccess = (payload) => {
  console.log("action,", payload);
  return { type: types.CART_SUCCESS, payload };
};

const cartFailure = () => {
  return { type: types.CART_FAILURE };
};

const getProducts = (payload) => {
  return { type: types.GET_PRODUCTS_DATA, payload };
};

const getProductsLoading = () => {
  return { type: types.GET_PRODUCTS_LOADING };
};

const getProductsError = () => {
  return { type: types.GET_PRODUCTS_ERROR };
};

const getProductsData = (cat, page) => (dispatch) => {
  dispatch(getProductsLoading());
  return axios
    .get(
      `https://long-plum-ray-ring.cyclic.app/api/v1/products?category=${cat}&page=${page}`
    )
    .then((res) => dispatch(getProducts(res.data.products)))
    .catch((err) => {
      console.log(err);
      dispatch(getProductsError());
    });
};

export {
  cartReq,
  cartSuccess,
  getProducts,
  cartFailure,
  getProductsData,
  getProductsLoading,
};
