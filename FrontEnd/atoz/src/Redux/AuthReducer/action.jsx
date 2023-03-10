import * as types from "./actionTypes";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import { Toast } from "@chakra-ui/toast";
import Cookies from 'js-cookie'

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
    .post(`https://long-plum-ray-ring.cyclic.app/api/v1/register`, payload)
    .then((res) => {
      console.log(res.data);
      dispatch(userRegisterSuccess());
    })
    .catch((err) => {
      console.log(err);
      dispatch(userRegisterFailure());
    });
};

const loginUser = (payload) => (dispatch) => {
  dispatch(userLoginRequest());

  return axios
    .post(`https://long-plum-ray-ring.cyclic.app/api/v1/login`, payload)
    .then((res) => {
      console.log(res.data);
      let authToken = res.data.token;
      console.log(authToken)
      Cookies.set('token', authToken);
      localStorage.setItem('token',JSON.stringify(authToken));
      if(res.data.user.role === 'user'){
        localStorage.setItem('role',JSON.stringify("user"))
      }else{
        localStorage.setItem('role',JSON.stringify('admin'))
      }
      localStorage.setItem('user',JSON.stringify(res.data))
      dispatch(userLoginSuccess());
    })
    .catch((err) => {
      console.log(err);
      dispatch(userLoginFailure());
    });
};

export {
  registerUser,
  loginUser,
  userRegisterRequest,
  userRegisterSuccess,
  userRegisterFailure,
  userLoginRequest,
  userLoginSuccess,
  userLoginFailure,
};
