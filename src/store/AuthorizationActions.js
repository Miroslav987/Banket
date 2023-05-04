import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { setProfile } from "./AuthorizationSlice";

import { setOneProduct, setProduct } from "./AuthorizationSlice";
import { Try } from "@mui/icons-material";
const API = "https://banquet.pythonanywhere.com/";

export const Register = (formData, navigate) => async () => {
  try {
    await axios.post(`${API}account/register/`, formData);
    console.log(formData);
    console.log("Зарегис");
    navigate("/login");
  } catch (error) {
    console.error(error);
    console.log("Ошибка 1");
  }
};

export const login = (formData, email) => async () => {
  try {
    const { data } = await axios.post(`${API}account/login/`, formData);
    // const { data } = await axios.post(`${API}account/login/`, formData);
    console.log(data);
    console.log("Вы вошли");
    localStorage.setItem("email", email);
    localStorage.setItem("access", data.access);
    localStorage.setItem("refresh", data.refresh);

    // getprofile();
  } catch (error) {
    console.error(error);
    console.log("Ошибка 3");
  }
};

export const AccRefresh = () => async dispatch => {
  try {
    const refresh = localStorage.getItem("refresh");
    let formData = new FormData();
    formData.append("refresh", refresh);
    const { data } = await axios.post(`${API}account/refresh/`, formData);
    console.log(data);
  } catch (error) {
    console.error(error);
    console.log("Ошибка 6");
  }
};

export const getprofile = () => async dispatch => {
  try {
    const access = localStorage.getItem("access");
    const email = localStorage.getItem("email");
    const Authorization = `JWT ${access}`;

    const config = {
      headers: {
        Authorization,
      },
    };
    let formData = new FormData();
    formData.append("detail", access);
    // formData.append("email", email);
    const { data } = await axios(`${API}account/users/me/`, formData);
    // dispatch(setProfile(data));
    console.log(data);
  } catch (error) {
    console.error(error);
    console.log("Ошибка 6");
  }
};
