import { Box, Card, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import { useActions } from "../hooks/UseActions";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { PortableWifiOffOutlined } from "@mui/icons-material";

export const PersonalArea = () => {
  const { profile } = useSelector(store => store.todo);
  const { getprofile } = useActions();
  useEffect(() => {
    getprofile();
  }, []);
  return (
    <>
      <Box
        sx={{
          width: "55vw",
          height: "130px",
          background: "white",
          marginTop: "30px",
          boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.2)",
        }}>
        {profile ? (
          profile.map(item => (
            <Box
              sx={{
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                margin: "40px",
              }}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "60px",
                    height: "60px",
                    background: "purple",
                    borderRadius: "50px",
                    color: "white",
                    marginRight: "10px",
                  }}>
                  <Typography
                    sx={{ fontSize: "20px", textTransform: "capitalize" }}>
                    {item.email[0]}
                  </Typography>
                </Box>
                {item.first ? (
                  <Typography>
                    {item.first_name}
                    <br />
                    {item.last_name}
                  </Typography>
                ) : (
                  <Typography> {item.email}</Typography>
                )}
              </Box>
              <Box sx={{ display: "flex" }}>
                <Box mb="20px" mr="10px">
                  <NavLink
                    to="/editProfile"
                    style={{
                      padding: "10px",
                      border: "1px solid #A07D50",
                      borderRadius: "5px",
                    }}>
                    Редактировать профиль{" "}
                  </NavLink>
                </Box>
                {item.category == "business" ? (
                  <Box mb="20px">
                    <NavLink
                      to="/add/rest"
                      style={{
                        padding: "10px",
                        border: "1px solid #A07D50",
                        borderRadius: "5px",
                      }}>
                      Добавить ресторан
                    </NavLink>
                  </Box>
                ) : null}{" "}
              </Box>
            </Box>
          ))
        ) : (
          <h3>null</h3>
        )}
      </Box>
    </>
  );
};
