import React from "react";
import { Route, Routes } from "react-router-dom";
import Authorization from "./Components/Authorization";
import { Login } from "./Components/Login";

const Mainrouter = () => {
  return (
    <Routes>
      <Route path="/dcd" element={<Login />} />
      <Route path="/" element={<Authorization />} />
    </Routes>
  );
};

export default Mainrouter;
