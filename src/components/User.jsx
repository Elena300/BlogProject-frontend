import { BiUser } from "react-icons/bi";
import { IconContext } from "react-icons";
import { useState } from "react";
import "./User.css";
import { loggedUser } from "../services/authService"
import { toast } from "react-toastify";
import { useAtom, useAtomValue } from "jotai";
import { userIdAtom, isLoggedInAtom, userNameAtom } from "../State";
import { Link } from 'react-router-dom';

function User() {
  console.log("User component rendered");
  const [dropdown, setDropdown] = useState(false);
  const [userId, setUserId] = useAtom(userIdAtom)
  const [loggedIn, setLoggedIn] = useAtom(isLoggedInAtom);
  const userName = useAtomValue(userNameAtom)

  function handleDropdown() {
    setDropdown(!dropdown);
    if (dropdown === false) {console.log("closed")} else {console.log("open")}
  }

  const handleClick = async (event) => {
     const userData = await loggedUser()
    if (userData.message === 'Unauthorized') 
      {toast.info("You are not authorized, please SingIn"); return}
    if (typeof userData.id === 'number' && typeof userData.username === 'string')
      {
        setUserId(userData.id); setLoggedIn(true); return userData.id
      }
      else {
        toast.info("Error")
        event.preventDefault()
      }
    }
  

  return (
    <>
      <button onClick={handleDropdown} className="user-frame">
        <IconContext.Provider value={{ className: "user-react-icon" }}>
          <div>
            <BiUser />
          </div>
        </IconContext.Provider>
        <div className="user-name">{userName}</div>
      </button>

      <div
        className={`${
          dropdown === true ? "flex open" : "hidden"
        } p-6 border-fluo-green border absolute top-28 right-8 mx-4 my-2 min-w-[140px]`}
      >
        <ul className=" list-none flex flex-col justify-end items-center flex-1">
          <li
            className="cursor-pointer text-sm text-fluo-green uppercase font-space-grotesk-light hover:decoration-solid hover:underline"
            onClick={handleClick}
          >
            {loggedIn ? (
              <Link to={`user/${userId}`}>user page</Link>
            ) : (
              <span>user page</span>
            )}
          </li>
        </ul>
      </div>
    </>
  );
}

export default User;
