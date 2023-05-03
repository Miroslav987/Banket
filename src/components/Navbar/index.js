// import logo from "../../assets/img/logo-line.svg"
import "./style.scss";
import Logo from "../Logo";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <Logo />
        <div className="login">
          <h6 className="login-reg">Войти</h6>
          <p>/</p>
          <h6 className="login-reg">Регистрация</h6>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
