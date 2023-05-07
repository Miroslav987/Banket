import React from "react";
import logo from "../../assets/img/logo-line.svg";
import BANQUET from "../../assets/img/Banquet.svg";
import "./style.scss";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="logo">
      <Link to="/">
        <img src={logo} alt="logo-line" className="logo-line" />
        <br />
        <img src={BANQUET} alt="logo-line" className="logo-line" />
        {/* <h1>BANQUET</h1> */}
      </Link>
    </div>
  );
};

export default Logo;
