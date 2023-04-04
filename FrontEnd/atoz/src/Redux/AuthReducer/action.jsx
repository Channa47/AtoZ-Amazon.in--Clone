import * as types from "./actionTypes";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import { Toast } from "@chakra-ui/toast";
import Cookies from "js-cookie";

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

      if (res.data.token && res.data.success) {
        let x = document.getElementById("snackbar");
        x.className = "show";
        x.innerText = `Registration Successfull ${res.data.user.name}`;
        x.style.backgroundColor = "green";
        setTimeout(function () {
          x.className = x.className.replace("show", "");
          dispatch(userRegisterSuccess());
        }, 3000);
      }
    })
    .catch((err) => {
      console.log(err);
      let x = document.getElementById("snackbar");
      x.className = "show";
      x.innerText = `${err.response.data.message}`;
      x.style.backgroundColor = "red";
      setTimeout(function () {
        x.className = x.className.replace("show", "");
        dispatch(userRegisterFailure());
      }, 3000);
    });
};

const loginUser = (payload) => (dispatch) => {
  dispatch(userLoginRequest());

  return axios
    .post(`https://long-plum-ray-ring.cyclic.app/api/v1/login`, payload)
    .then((res) => {
      console.log("res.data = > ", res.data);
      if (res.data.token && res.data.success) {
        let authToken = res.data.token;
        console.log(authToken);
        Cookies.set("token", authToken);
        localStorage.setItem("token", JSON.stringify(authToken));
        if (res.data.user.role === "user") {
          localStorage.setItem("role", JSON.stringify("user"));
        } else {
          localStorage.setItem("role", JSON.stringify("admin"));
        }
        localStorage.setItem("user", JSON.stringify(res.data));

        let x = document.getElementById("snackbar");
        x.className = "show";
        x.innerText = `Welcome ${res.data.user.name} , Login Successfull`;
        x.style.backgroundColor = "green";
        setTimeout(function () {
          x.className = x.className.replace("show", "");
          dispatch(userLoginSuccess());
        }, 3000);
      }
    })
    .catch((err) => {
      console.log("err=>", err);
      let x = document.getElementById("snackbar");
      x.className = "show";
      x.innerText = `${err.response.data.message}`;
      x.style.backgroundColor = "red";
      setTimeout(function () {
        x.className = x.className.replace("show", "");
        dispatch(userLoginFailure());
      }, 3000);
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
