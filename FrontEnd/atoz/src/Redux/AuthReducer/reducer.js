import * as types from "./actionTypes";

const initialState = {
  isAuth: false,
  token: "",
  isAuthLoading: false,
  isAuthFailure: false,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.USER_LOGIN_REQUEST:
      return { ...state, isAuthLoading: true };
    case types.USER_LOGIN_SUCCESS:
      return { ...state, isAuthLoading: false, isAuth: true, token: payload };
    case types.USER_LOGIN_FAILURE:
      return { ...state, isAuthFailure: true, isAuth: false };
    default:
      return state;
  }
};

export { reducer };
