import React from 'react';
import logo from "../../assets/img/logo.svg";
import "./style.scss";


const Logo = () => {
    return (
        <div className='logo'>
                <img src={logo} alt="logo-line" className="logo-line"/>
                <h1>BANQUET</h1>
        </div>
    );
};

export default Logo;