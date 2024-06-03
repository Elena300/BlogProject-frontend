import { Link } from "react-router-dom";
import User from "./User";
import { useSetAtom, useAtom } from "jotai";
import { isLoggedInAtom, modalAtom, userIdAtom, userNameAtom } from "../State";
import "./Navbar.css";
import { LogOut } from "../services/authService";
import Cookies from "js-cookie";
import { useEffect} from "react";

function Navbar() {
  const setIsOpen = useSetAtom(modalAtom);
  const [userName, setUsername] = useAtom(userNameAtom);
  const [loggedUserId, setLoggedUserId] = useAtom(userIdAtom);
  const [loggedUser, setLoggedUser] = useAtom(isLoggedInAtom);
  
  
  const checkLogIn = () => {
    const isLoggedIn = Cookies.get("isLoggedIn");
    const username = Cookies.get("username");
    const userId = Cookies.get("userId")
    if (isLoggedIn === "true") {
      setLoggedUser(true);
      setUsername(username);
      setLoggedUserId(userId);
    } else {
      setLoggedUser(false);
    }
  };
  
  useEffect(() => {
    checkLogIn();
  }, [userName, loggedUser, loggedUserId]);

  const handleClick = async () => {
    if (loggedUser === false) {
      setIsOpen(true);
    } else {
      try {
        const confirmLogOut = await LogOut();
        if (confirmLogOut.message === "Logout successful") {
          setUsername("guest");
          setLoggedUserId("");
          setLoggedUser(false);
          Cookies.remove("isLoggedIn");
          Cookies.remove("username");}
          Cookies.remove("userId");

      } catch (error) {
        console.log(error);
      }
    }
  };


  return (
    <>
      <div className="navbar-frame">
        <div className="logo-container">
          <Link to="/">
            <div className="logo">
              IoT<br></br> Blog
            </div>
          </Link>
        </div>

        <div className="nav-container">
          <div className="menu-container">
            <div className="menu-item">
              Bloggers<span>/</span>
            </div>
            <div className="menu-item">
              Gadgets <span>/</span>
            </div>
            <div className="menu-item">
              Smart Home <span>/</span>
            </div>
            <div className="menu-item">
              Industry <span>/</span>
            </div>
            <button className="menu-item">
              More <span>+</span>
            </button>
          </div>

          <div className="buttons-container">
            <button className="signin-button" onClick={handleClick}>
              {loggedUser === false ? "sign in" : "sign out"}
            </button>
            <User loggedUserName={userName} userId={loggedUserId} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
