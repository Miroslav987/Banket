import { Box, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import Delete from "@mui/icons-material/DeleteOutline";
import "./person.scss";

export const Myfeedback = () => {
  return (
    <>
      <Box className="profcateg">
        <Box>
          <NavLink to="/">Главная </NavLink> /
          <NavLink to="/Myfeedback"> Личный кабинет </NavLink>
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
        <Box className="Feedback">
          <Box className="feedcard">
            <Box className="feedcdOne">
              <Box>
                <strong>
                  <Typography
                    sx={{
                      color: "#A07D50",
                      fontSize: "24px",
                      // fontWeight: "500",
                    }}>
                    Золотой Дракон
                  </Typography>
                </strong>
                <Typography sx={{ color: "#787878" }}>
                  25 апреля 2023
                </Typography>
              </Box>
              <Box className="deleteCom">
                <Delete /> Удалить отзыв
              </Box>
            </Box>
            <Box className="feedcdTwo">
              <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, nesciunt velit. Odit, iusto. Consectetur tempora
                repellat voluptate laudantium. Nisi omnis tempora ad culpa
                repellat fuga dolores aliquid laborum libero, delectus,
                doloremque odio tempore? Quibusdam rem cum repudiandae
                voluptatum, molestiae atque neque dignissimos? Eaque ut libero,
                modi dolore aperiam nesciunt, dolorum aliquid quia animi nobis,
                unde inventore et voluptates a harum consectetur placeat neque
                adipisci quaerat possimus magnam est. Distinctio maiores
                adipisci eveniet suscipit, aperiam iste pariatur ipsam hic,
                perspiciatis inventore nobis ipsum? Quis molestiae aut
                voluptatibus labore accusantium ut ea iste, nemo corrupti
                eveniet molestias, cum, rerum reprehenderit hic ratione?
              </Typography>
            </Box>
          </Box>
          <Box className="feedcard">
            <Box className="feedcdOne">
              <Box>
                <strong>
                  <Typography
                    sx={{
                      color: "#A07D50",
                      fontSize: "24px",
                      // fontWeight: "500",
                    }}>
                    Золотой Дракон
                  </Typography>
                </strong>
                <Typography sx={{ color: "#787878" }}>
                  25 апреля 2023
                </Typography>
              </Box>
              <Box className="deleteCom">
                <Delete /> Удалить отзыв
              </Box>
            </Box>
            <Box className="feedcdTwo">
              <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, nesciunt velit. Odit, iusto. Consectetur tempora
                repellat voluptate laudantium. Nisi omnis tempora ad culpa
                repellat fuga dolores aliquid laborum libero, delectus,
                doloremque odio tempore? Quibusdam rem cum repudiandae
                voluptatum, molestiae atque neque dignissimos? Eaque ut libero,
                modi dolore aperiam nesciunt, dolorum aliquid quia animi nobis,
                unde inventore et voluptates a harum consectetur placeat neque
                adipisci quaerat possimus magnam est. Distinctio maiores
                adipisci eveniet suscipit, aperiam iste pariatur ipsam hic,
                perspiciatis inventore nobis ipsum? Quis molestiae aut
                voluptatibus labore accusantium ut ea iste, nemo corrupti
                eveniet molestias, cum, rerum reprehenderit hic ratione?
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};