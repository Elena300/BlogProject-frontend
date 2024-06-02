import { Link } from "react-router-dom";
import User from "./User";
import { useSetAtom, useAtom } from "jotai";
import { isLoggedInAtom, modalAtom, userIdAtom, userNameAtom } from "../State";
import "./Navbar.css";
import { LogOut } from "../services/authService";
import Cookies from "js-cookie";
import { useLayoutEffect } from "react";

function Navbar() {
  const setIsOpen = useSetAtom(modalAtom);
  const [userName, setUsername] = useAtom(userNameAtom);
  const setUserId = useSetAtom(userIdAtom);
  const [loggedUser, setLoggedUser] = useAtom(isLoggedInAtom);
  
  const checkLogIn = () => {
    const isLoggedIn = Cookies.get("isLoggedIn");
    if (isLoggedIn === "true") {
      setLoggedUser(true);
    } else {
      setLoggedUser(false);
    }
  };
  
  useLayoutEffect(() => {
    checkLogIn(); // Call checkLogIn when the component mounts
  }, []); // Empty dependency array means this effect runs once on mount

  const handleClick = async () => {
    if (userName === "guest") {
      setIsOpen(true);
    } else {
      try {
        const confirmLogOut = await LogOut();
        if (confirmLogOut.message === "Logout successful") {
          setUsername("guest");
          setUserId("");
        }
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
              <User username={userName} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
