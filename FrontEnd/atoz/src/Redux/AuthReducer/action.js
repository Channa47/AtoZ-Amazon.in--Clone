import * as types from "./actionTypes";

const userLoginRequest = () => {
  return { type: types.USER_LOGIN_REQUEST };
};

const userLoginSuccess = () => {
  return { type: types.USER_LOGIN_SUCCESS };
};

const userLoginFailure = () => {
  return { type: types.USER_LOGIN_FAILURE };
};

export { userLoginRequest, userLoginSuccess, userLoginFailure };
