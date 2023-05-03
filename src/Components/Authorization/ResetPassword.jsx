import React from "react";
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
import back from "../../img/back.svg";
import exit from "../../img/exit.svg";
export const ResetPassword = () => {
  return (
    <>
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
              height: "500px",
              borderRadius: "10px",
              boxShadow: "0px  0px 10px 0px black",
            }}>
            <Box
              sx={{ margin: "30px", display: "flex", flexDirection: "column" }}>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <img src={back} alt="" />
                <img src={exit} alt="" />
              </Box>
              <Typography sx={{ margin: "30px auto", fontSize: "23px" }}>
                Востановить пароль
              </Typography>
              <Typography
                sx={{
                  margin: "20px auto",
                  fontSize: "17px",
                  textAlign: "center",
                }}>
                Введите email или логин, и мы вышлем вам инструкции по получению
                нового пароля
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
                />
              </Box>
              <Button
                sx={{
                  background: "#A07D50",
                  color: "white",
                  width: "200px",
                  margin: "40px auto",
                  textTransform: "capitalize",
                }}>
                Сброс пароля
              </Button>
            </Box>
          </Box>
        </Box>
      </>
    </>
  );
};
