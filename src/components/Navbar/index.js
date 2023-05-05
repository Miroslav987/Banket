// import logo from "../../assets/img/logo-line.svg"
import "./style.scss";
import Logo from "../Logo";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useActions } from "../hooks/UseActions";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { profile } = useSelector(store => store.todo);
  const { getprofile } = useActions();
  useEffect(() => {
    getprofile();
  }, []);
  return (
    <>
      {profile ? (
        profile.map(item => (
          <nav className="navbar">
            <Logo />
            <Link to="/Myfeedback">
              <div className="avatar">{item.email[0]}</div>
            </Link>
          </nav>
        ))
      ) : (
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
      )}
    </>
  );
};
export default Navbar;
