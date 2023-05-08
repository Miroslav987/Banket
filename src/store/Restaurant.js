// import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
import { setProfile, setRest } from "./RestaurantSlice";

import { setOneProduct, setProduct } from "./RestaurantSlice";
const API = "https://banquet.pythonanywhere.com/";

export const PostRest = formData => async () => {
  try {
    const access = localStorage.getItem("access");
    const config = {
      headers: {
        // Authorization: `Bearer ${access}`,
        access,
      },
    };
    await axios.post(`${API}restaurant/create/`, formData, config);
    console.log("ресторан добавлен");
  } catch (error) {
    console.error(error);
    console.log("Ошибка 1");
  }
};

// export const login = (formData, email, navigate) => async () => {
//   try {
//     localStorage.setItem("email", email);
//     const { data } = await axios.post(`${API}account/login/`, formData);
//     console.log(data);
//     console.log("");

//     navigate("/Myfeedback");
//   } catch (error) {
//     alert("Введен не правильно логин или пароль ");
//     console.error(error);
//     console.log("Ошибка 3");
//   }
// };
// export const EditAccount = formData => async () => {
//   try {
//     const access = localStorage.getItem("access");
//     const config = {
//       headers: {
//         access,
//       },
//     };
//     const { data } = await axios.put(`${API}account/update/`, formData, config);
//     console.log(data);
//     getprofile();
//   } catch (error) {
//     console.error(error);
//     console.log("Ошибка 3");
//   }
// };

export const getRest = () => async dispatch => {
  try {
    const access = localStorage.getItem("access");

    const config = {
      headers: {
        access,
      },
    };
    const { data } = await axios.get(`${API}account/profile/`, config);
    dispatch(setRest(data));
    console.log(data);
  } catch (error) {
    console.error(error);
    console.log("Ошибка 6");
  }
};
