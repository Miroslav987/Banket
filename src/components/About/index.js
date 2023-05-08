import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

const About = () => {
  return (
    <Box sx={{ backgroundColor: "#F9F9F9", p: "4rem 4rem", m: "10rem 0rem" }}>
      <Typography
        sx={{
          color: "#A07D50",
          fontFamily: "'Inter', sans-serif",
          fontWeight: "600",
          fontSize: "2rem",
        }}>
        О нас
      </Typography>
      <Typography
        sx={{
          color: "#373E44",
          fontFamily: "'Inter', sans-serif",
          fontSize: "1.2rem",
          lineHeight: "33px",
          p: "1.5rem 0rem",
        }}>
        {" "}
        Каждый ресторан на нашем сайте предлагает уникальную <br /> атмосферу,
        меню и уровень обслуживания. Вы можете просмотреть <br /> фотографии и
        описание каждого ресторана, чтобы найти тот, <br /> который наилучшим
        образом соответствует вашим потребностям и бюджету. <br />
        Наша цель - сделать поиск и выбор банкетного ресторана <br />{" "}
        максимально простым и удобным
      </Typography>
    </Box>
  );
};

export default About;
