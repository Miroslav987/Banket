import React from "react";
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

import back from "../img/back.svg";
import exit from "../img/exit.svg";
import google from "../img/google.svg";
export const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword(show => !show);

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };
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
                label="Outlined"
                variant="outlined"
              />
              <br />
              <FormControl variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
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
