import * as types from "./actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  cartData: [],
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.CART_REQUEST:
      return { ...state, isLoading: true };
    case types.CART_SUCCESS:
      return { ...state,cartData:payload };
    case types.CART_FAILURE:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};

export { reducer };
