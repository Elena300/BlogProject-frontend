import { BiUser } from "react-icons/bi";
import { IconContext } from "react-icons";
import { useState } from "react";
import "./User.css";

function User(props) {
  console.log("User component rendered");
  console.log(props.username);
  const [dropdown, setDropdown] = useState(false);
  function handleDropdown() {
    setDropdown(!dropdown);
    if (dropdown === false) {console.log("closed")} else {console.log("open")}
  }

  return (
    <>
      <button onClick={handleDropdown} className="user-frame">
        <IconContext.Provider value={{ className: "user-react-icon" }}>
          <div>
            <BiUser />
          </div>
        </IconContext.Provider>
        <div className="user-name">{props.username}</div>
      </button>

      <div
        className={`${
          dropdown === true ? "flex open" : "hidden"
        } p-6 border-fluo-green border absolute top-28 right-8 mx-4 my-2 min-w-[140px]`}
      >
        <ul className=" list-none flex flex-col justify-end items-center flex-1">
          <li className="cursor-pointer text-sm text-fluo-green uppercase font-space-grotesk-light">
           user page
          </li>
        </ul>
      </div>
    </>
  );
}

export default User;
