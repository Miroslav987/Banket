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
import React from "react";
import { NavLink } from "react-router-dom";
import Delete from "@mui/icons-material/DeleteOutline";
import "./edit.scss";
import "./person.scss";
export const EditProfile = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword(show => !show);

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };
  return (
    <>
      <Box className="profcateg">
        <Box>
          <NavLink to="/">Главная </NavLink> /{" "}
          <NavLink to="/Myfeedback"> Личный кабинет </NavLink> /
          <NavLink to="/editProfile"> Редактировать профиль </NavLink>
        </Box>
        <Box className="edit">
          <Box className="BlockLeft">
            <Typography variant="h5">Личные данные</Typography>
            <Box className="editLogo">K</Box>
            <Typography sx={{ display: "flex", color: "#787878" }}>
              <Delete /> Удалить фото
            </Typography>
          </Box>
          <Box className="BlockRight">
            <Box>
              <Typography> Имя и Фамилия на сайте</Typography>
              <FormControl variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                  Имя
                </InputLabel>
                <OutlinedInput
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton edge="end">
                        <Visibility className="inpIcon" />
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
              <FormControl variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                  Фамилия
                </InputLabel>
                <OutlinedInput
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton edge="end">
                        <Visibility className="inpIcon" />
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Box>
            <Box>
              <Typography>Изменить пароль</Typography>
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
              </FormControl>{" "}
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
            </Box>
            <Button className="edProfBt">Сохранить</Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};
