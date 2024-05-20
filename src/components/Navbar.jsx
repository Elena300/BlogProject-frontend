import { Link } from "react-router-dom";
import User from "./User";
import { useSetAtom } from "jotai";
import { modalAtom } from "../State";
import { FaPlus } from "react-icons/fa6";
import "./Navbar.css";

function Navbar() {
  const setIsOpen = useSetAtom(modalAtom);
  const userName = () => {
    if (localStorage.data) {
     return localStorage.getItem("username");
  }
    return "Guest";
  }
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
            <Link to="/people">
              <div className="menu-item">
                Bloggers<span>/</span>
              </div>
            </Link>
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
            <button
              className="signin-button"
              onClick={() => {
                setIsOpen(true);
              }}
            >
              sign in
            </button>
            <div className="user-container">
              <User username={userName()} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
