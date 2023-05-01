import React from "react";
import { Route, Routes } from "react-router-dom";
import AddRst from "./components/AddRst/AddRst";
import Navbar from "./components/Navbar/Navbar";

const Mainrouter = () => {
  return (
    <Routes>
        <Route path="/" element={<AddRst/>} />
        <Route path="/nav" element={<Navbar/>} />
   </Routes>
  )
    
};

export default Mainrouter;
