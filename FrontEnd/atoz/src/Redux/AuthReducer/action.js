import * as types from "./actionTypes";
import axios from "axios";

const userLoginRequest = () => {
  return { type: types.USER_LOGIN_REQUEST };
};

const userLoginSuccess = () => {
  return { type: types.USER_LOGIN_SUCCESS };
};

const userLoginFailure = () => {
  return { type: types.USER_LOGIN_FAILURE };
};

const userRegisterFailure = () => {
  return { type: types.USER_REGISTER_FAILURE };
};

const userRegisterRequest = () => {
  console.log("dispatched");
  return { type: types.USER_REGISTER_REQUEST };
};

const userRegisterSuccess = () => {
  return { type: types.USER_REGISTER_SUCCESS };
};

const registerUser = (payload) => (dispatch) => {
  dispatch(userRegisterRequest());
  return axios
    .post(`deployed backend url`, payload)
    .then((res) => {
      console.log(res.data);
      dispatch(userRegisterSuccess());
    })
    .catch((err) => {
      console.log(err);
      dispatch(userRegisterFailure());
    });
};

export {
  registerUser,
  userRegisterRequest,
  userRegisterSuccess,
  userRegisterFailure,
  userLoginRequest,
  userLoginSuccess,
  userLoginFailure,
};
