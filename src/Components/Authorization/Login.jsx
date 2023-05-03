import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import back from "../../img/back.svg";
import exit from "../../img/exit.svg";
import google from "../../img/google.svg";
import { useActions } from "../hooks/UseActions";
export const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword(show => !show);

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useActions();
  function SaveLog() {
    if (!email.trim() || !password.trim()) {
      alert("Неправильно");
      return;
    }
    let formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    login(formData);
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
              Вход
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
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "end",
                }}>
                <Typography
                  sx={{ color: "#2439F9", borderBottom: "2px solid #2439F9" }}>
                  Забыли пароль ?
                </Typography>
              </Box>
            </Box>
            <Button
              onClick={() => SaveLog()}
              sx={{
                background: "#A07D50",
                color: "white",
                width: "200px",
                margin: "30px auto",
                textTransform: "capitalize",
              }}>
              Войти
            </Button>
            <Button
              sx={{
                border: "1px solid grey",
                color: "grey",
                width: "300px",
                margin: " auto",
                textTransform: "capitalize",
                borderRadius: "10px",
              }}>
              <img src={google} alt="" /> Или войти через Google
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};
