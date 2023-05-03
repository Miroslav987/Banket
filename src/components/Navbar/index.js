import logo from "../../assets/img/logo-line.svg";
import "./style.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h1>Banquet</h1>
        <img src={logo} alt="logo-line" className="logo-line" />
      </div>
      <div className="login">
        <h6 className="login-reg">Войти</h6>
        <p>/</p>
        <h6 className="login-reg">Регистрация</h6>
      </div>
    </nav>
  );
};

export default Navbar;
