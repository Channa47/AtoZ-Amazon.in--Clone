import * as types from "./actionTypes";
import axios from "axios";

const cartReq = () => {
  return { type: types.CART_REQUEST };
};

const cartSuccess = (payload) => {
  return { type: types.CART_SUCCESS, payload };
};

const cartFailure = () => {
  return { type: types.CART_FAILURE };
};

export { cartReq, cartSuccess, cartFailure };
