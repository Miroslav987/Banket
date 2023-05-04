// import logo from "../../assets/img/logo-line.svg"
import "./style.scss";
import Logo from "../Logo";
import { Link } from "react-router-dom";

const Navbar = () => {
  const email = localStorage.getItem("email");
  return (
    <>
      <nav className="navbar">
        <Logo />
        {email ? (
          <Link to="/Myfeedback">
            <div className="avatar">{email[0]}</div>
          </Link>
        ) : (
          <div className="login">
            <Link to="/login">
              <h6 className="login-reg">Войти</h6>
            </Link>
            <p>/</p>
            <Link to="/register">
              <h6 className="login-reg">Регистрация</h6>
            </Link>
          </div>
        )}
      </nav>
    </>
  );
};
export default Navbar;
