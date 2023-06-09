import React from "react";
import { Route, Routes } from "react-router";
import { Home } from "./Components/Home";
import { Login } from "./Components/Authorization/Login";
import { Registration } from "./Components/Authorization/Registration";
import { Myfeedback } from "./Components/MyInfo/MyFeedback";
import { Chosen } from "./Components/MyInfo/Chosen";
import { EditProfile } from "./Components/MyInfo/EditProfile";
import AddRst from "./Components/AddRst/AddRst";
import { ResetPassword } from "./Components/Authorization/ResetPassword";
import Details from "./Components/Details/Details";

const Mainrouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Registration />} />
      <Route path="/Myfeedback" element={<Myfeedback />} />
      <Route path="/Mychosen" element={<Chosen />} />
      <Route path="/editProfile" element={<EditProfile />} />
      <Route path="/add/rest" element={<AddRst />} />
      <Route path="/confirm/password" element={<ResetPassword />} />
      <Route path="/details" element={<Details/>} />
    </Routes>
  );
};

export default Mainrouter;
