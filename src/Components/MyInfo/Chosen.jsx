import { Box, Rating, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import "./person.scss";
import Delete from "../../img/delete.svg";
import StarIcon from "@mui/icons-material/Star";
export const Chosen = () => {
  return (
    <>
      <Box className="profcateg">
        <Box>
          <NavLink to="/">Главная </NavLink> /
          <NavLink to="/Mychosen"> Личный кабинет </NavLink>
        </Box>
        <Box
          sx={{
            width: "55vw",
            height: "130px",
            background: "#F9F9F9",
            marginTop: "30px",
            boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.2)",
          }}>
          <Box
            sx={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              margin: "40px",
            }}>
            <Box sx={{ display: "flex" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "50px",
                  height: "50px",
                  background: "purple",
                  borderRadius: "50px",
                  color: "white",
                  marginRight: "10px",
                }}>
                <Typography>V</Typography>
              </Box>
              <Typography>
                Hgfbfhn <br />
                Hfbthtrtrh
              </Typography>
            </Box>
            <Box mb="20px">
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
          </Box>
        </Box>
        <Box sx={{ marginTop: "20px", width: "auto" }}>
          <Box className="Mychose">
            <NavLink to="/Myfeedback">
              <Typography>Мои отзывы</Typography>
              <Box className="textLine"></Box>
            </NavLink>
            <NavLink to="/Mychosen">
              <Typography>Избранное</Typography>
              <Box className="textLine"></Box>
            </NavLink>
          </Box>
          <Box className="line"></Box>
        </Box>
        <Box className="Chosen">
          <Typography>Избранные места | 3 места</Typography>
          <Box className="chosenCard">
            <Box>
              <img
                src="https://images.wallpaperscraft.ru/image/single/kafe_restoran_stolik_110567_3840x2160.jpg"
                alt=""
              />
              <Box className="deleteChosen">
                <img src={Delete} alt="" /> Удалить
              </Box>
            </Box>
            <Box className="chosenCardIn">
              <Typography
                variant="h6"
                sx={{
                  color: "#A07D50",
                  fontSize: "24px",
                  fontWeight: "600",
                }}>
                Золотой Дракон
              </Typography>
              <Rating
                name="text-feedback"
                value={4}
                readOnly
                precision={0.5}
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
              />
              <Typography>Бишкек, Проспект Победы 351</Typography>
            </Box>
            <Box>
              <Typography sx={{ textAlign: "end" }}>
                Банкетный чек на гостя: <br /> от 1000с{" "}
              </Typography>
            </Box>
          </Box>
          <Box className="chosenCard">
            <Box>
              <img
                src="https://images.wallpaperscraft.ru/image/single/kafe_restoran_stolik_110567_3840x2160.jpg"
                alt=""
              />
              <Box className="deleteChosen">
                <img src={Delete} alt="" /> Удалить
              </Box>
            </Box>
            <Box className="chosenCardIn">
              <Typography
                variant="h6"
                sx={{
                  color: "#A07D50",
                  fontSize: "24px",
                  fontWeight: "600",
                }}>
                Золотой Дракон
              </Typography>
              <Rating
                name="text-feedback"
                value={4}
                readOnly
                precision={0.5}
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
              />
              <Typography>Бишкек, Проспект Победы 351</Typography>
            </Box>
            <Box>
              <Typography sx={{ textAlign: "end" }}>
                Банкетный чек на гостя: <br /> от 1000с{" "}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};