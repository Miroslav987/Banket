// import logo from "../../assets/img/logo-line.svg"
import "./style.scss";
import Logo from "../Logo";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <Logo />
        <div className="login">
          <Link to="/login">
            <h6 className="login-reg">Войти</h6>
          </Link>
          <p>/</p>
          <Link to="/register">
            <h6 className="login-reg">Регистрация</h6>
          </Link>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
