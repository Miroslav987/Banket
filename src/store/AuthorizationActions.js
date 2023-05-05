// import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import { setProfile } from "./RestaurantSlice";

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

export const login = (formData, email, navigate) => async () => {
  try {
    const { data } = await axios.post(`${API}account/login/`, formData);
    console.log(data);
    console.log("Вы вошли");
    localStorage.setItem("email", email);
    localStorage.setItem("access", data.access);
    localStorage.setItem("refresh", data.refresh);
    getprofile();
    navigate("/Myfeedback");
  } catch (error) {
    alert("Введен не правильно логин или пароль ");
    console.error(error);
    console.log("Ошибка 3");
  }
};
export const EditAccount = formData => async () => {
  try {
    const access = localStorage.getItem("access");
    const config = {
      headers: {
        Authorization: `Bearer ${access}`,
      },
    };
    const { data } = await axios.put(`${API}account/update/`, formData, config);
    console.log(data);
    getprofile();
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

    const config = {
      headers: {
        Authorization: `Bearer ${access}`,
      },
    };
    let formData = new FormData();
    formData.append("access", access);
    // formData.append("email", email);
    const { data } = await axios.get(`${API}account/profile/`, config);
    dispatch(setProfile([data]));
    console.log(data);
  } catch (error) {
    console.error(error);
    console.log("Ошибка 6");
  }
};
