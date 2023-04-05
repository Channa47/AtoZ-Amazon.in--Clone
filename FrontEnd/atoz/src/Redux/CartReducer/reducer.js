import * as types from "./actionTypes";

// Inititial State of CartReducer
const initialState = {
  isLoading: false,
  isError: false,
  cartData: JSON.parse(localStorage.getItem("cartItems")) || [],
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
    case types.UPDATE_QUANTITY:
      let cartItemsLs = JSON.parse(localStorage.getItem("cartItems")) || [];

      let itemIndexLs = cartItemsLs.findIndex((el) => el._id === payload._id);

      let updatedQuantity = [...state.cartData];
      updatedQuantity[itemIndexLs].quantity = payload.quantity;
      let newState = {
        ...state,
        cartData: updatedQuantity,
      };
      localStorage.setItem("cartItems", JSON.stringify(newState.cartData));
      return newState;

    case types.REMOVE_FROM_CART:
      return { ...state };
    default:
      return state;
  }
};

export { reducer };
