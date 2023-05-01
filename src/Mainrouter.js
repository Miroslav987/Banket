import React from "react";
import { Route, Routes } from "react-router-dom";
import { Myfeedback } from "./Components/MyInfo/MyFeedback";
import { Chosen } from "./Components/MyInfo/Chosen";
import { EditProfile } from "./Components/MyInfo/EditProfile";
import { Login } from "./Components/Authorization/Login";
import { Registration } from "./Components/Authorization/Registration";

const Mainrouter = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/auth" element={<Registration />} />
      <Route path="/Myfeedback" element={<Myfeedback />} />
      <Route path="/Mychosen" element={<Chosen />} />
      <Route path="/editProfile" element={<EditProfile />} />
    </Routes>
  );
};

export default Mainrouter;
