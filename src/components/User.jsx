
import { BiUser } from "react-icons/bi";
import { IconContext } from "react-icons";
import "./User.css";

function User(props) {
  console.log(props.username);
  return (
    <div className="user-frame">
    <IconContext.Provider value={{ className: "user-react-icon" }}>
      <div>
        <BiUser />
      </div>
    </IconContext.Provider>
      <div className="user-name">
        {props.username}
      </div>
    </div>
  );
}

export default User;
