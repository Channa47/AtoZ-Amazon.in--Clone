import * as types from "./actionTypes";

const initialState = {
  isAuth: false,
  token: "",
  isAuthLoading: false,
  isAuthFailure: false,
  isRegistered: false,
  isRegisteredLoading: false,
  isRegisteredFailure: false,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.USER_LOGIN_REQUEST:
      return { ...state, isAuthLoading: true };
    case types.USER_LOGIN_SUCCESS:
      return { ...state, isAuthLoading: false, isAuth: true, token: payload };
    case types.USER_LOGIN_FAILURE:
      return {
        ...state,
        isAuthFailure: true,
        isAuth: false,
        isAuthLoading: false,
      };
    case types.USER_REGISTER_REQUEST:
      console.log("-------");
      return { ...state, isRegisteredLoading: true };
    case types.USER_REGISTER_SUCCESS:
      return { ...state, isRegisteredLoading: false, isRegistered: true };
    case types.USER_REGISTER_FAILURE:
      return {
        ...state,
        isRegisteredFailure: true,
        isRegistered: false,
        isRegisteredLoading: false,
      };
    default:
      return state;
  }
};

export { reducer };
