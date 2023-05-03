import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { setProfile } from "./AuthorizationSlice";

import { setOneProduct, setProduct } from "./AuthorizationSlice";
const API = "https://banquet.pythonanywhere.com/";
// const API =
//   "Acess-Control-Allow-Origin:192.168.68.53/https://banquet.pythonanywhere.com/";
export const Register = formData => async () => {
  try {
    await axios.post(`${API}account/register/`, formData);
    console.log(formData);
    console.log("работает");
  } catch (error) {
    console.error(error);
    console.log("Ошибка 1");
  }
};

export const login = formData => async () => {
  try {
    const data = await axios.post(`${API}account/login`, formData);
    // const { data } = await axios.post(`${API}account/login/`, formData);
    console.log(data);
    console.log("Вы вошли");
    // localStorage.setItem("email", email);
    // localStorage.setItem("access", data.access);
    // localStorage.setItem("refresh", data.refresh);

    // getprofile();
  } catch (error) {
    console.error(error);
    console.log("Ошибка 3");
  }
};

export const getprofile = () => async dispatch => {
  try {
    const email = localStorage.getItem("email");
    const { data } = await axios.get(`${API}account/profile/${email}/`);
    dispatch(setProfile(data));
  } catch (error) {
    console.error(error);
    console.log("Ошибка 6");
  }
};
