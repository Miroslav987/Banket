import React from "react";
import { useState } from "react";
import {
  Alert,
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import back from "../../img/back.svg";
import exit from "../../img/exit.svg";
import { useActions } from "../hooks/UseActions";
import { NavLink } from "react-router-dom";
export const Registration = () => {
  const { Register } = useActions();
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword(show => !show);
  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, SetConfirmPass] = useState("");

  function SaveReg() {
    if (!email.trim() || !password.trim() || !confirmPass.trim()) {
      alert("Неправильно");
      return;
    }
    let formData = new FormData();
    // let obj = {
    //   email: email,
    //   password: password,
    //   password2: confirmPass,
    // };
    // console.log(obj);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("password2", confirmPass);
    Register(formData);
  }
  return (
    <>
      <Box
        sx={{
          height: "97vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Box
          sx={{
            width: "500px",
            height: "600px",
            borderRadius: "10px",
            boxShadow: "0px  0px 10px 0px black",
          }}>
          <Box
            sx={{ margin: "30px", display: "flex", flexDirection: "column" }}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <img src={back} alt="" />
              <img src={exit} alt="" />
            </Box>
            <Typography sx={{ margin: "40px auto", fontSize: "23px" }}>
              Регистрация
            </Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}>
              <TextField
                id="outlined-basic"
                label="Логин"
                variant="outlined"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <br />
              <FormControl variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                  Пароль
                </InputLabel>
                <OutlinedInput
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  // id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end">
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
              <br />
              <FormControl variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                  Подтверждение пароля
                </InputLabel>
                <OutlinedInput
                  value={confirmPass}
                  onChange={e => SetConfirmPass(e.target.value)}
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end">
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
              <br />
              <Box sx={{ display: "flex", justifyContent: "end" }}>
                <NavLink
                  to="/login"
                  style={{
                    color: "#2439F9",
                    borderBottom: "2px solid #2439F9",
                  }}>
                  Уже зарегистрированы ?
                </NavLink>
              </Box>
            </Box>
            <Button
              onClick={SaveReg}
              sx={{
                background: "#A07D50",
                color: "white",
                width: "200px",
                margin: "50px auto",
                textTransform: "capitalize",
              }}>
              Зарегистрироваться
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};
