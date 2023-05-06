// import logo from "../../assets/img/logo-line.svg"
import "./style.scss"
import Logo from "../Logo";
import ava from "../../assets/img/ava.svg";
import fave from "../../assets/img/heart.svg";

const Navbar = () => {
   

    return(
        <nav className="navbar">
                <Logo />
            <div className="login">
                <div className="mobile">
                    <img src={fave} alt="favorite icon" className="fave"/>
                    <img src={ava} alt="ava icon"/>
                </div>
                <div className="desktop">
                    <h6 className="login-reg">
                        Войти
                    </h6>
                    <p>
                        /
                    </p>
                    <h6 className="login-reg">
                        Регистрация
                    </h6>
                </div>
            </div>
        </nav>
    )
  }  


  

export default Navbar;