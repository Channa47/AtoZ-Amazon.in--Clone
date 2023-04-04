import * as types from "./actionTypes";

// Inititial State of CartReducer
const initialState = {
  isLoading: false,
  isError: false,
  cartData: [],
  items: [],
  getProductsLoading: false,
  getProductsError: false,
};

//Reducer Function
const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.CART_REQUEST:
      return { ...state, isLoading: true };
    case types.CART_SUCCESS:
      return { ...state, cartData: payload };
    case types.CART_FAILURE:
      return { ...state, isLoading: false, isError: true };
    case types.GET_PRODUCTS_DATA:
      return {
        ...state,
        items: payload,
        getProductsLoading: false,
        getProductsError: false,
      };
    case types.GET_PRODUCTS_LOADING:
      return { ...state, getProductsLoading: true };
    case types.GET_PRODUCTS_ERROR:
      return { ...state, getProductsError: true, getProductsLoading: false };
    default:
      return state;
  }
};

export { reducer };
