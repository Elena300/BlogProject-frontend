import { useAtomValue } from "jotai";
import { dropDownVisible } from "../State"; 
import "./DropdownUser.css"



export default function DropdownUser() {
  const showMenu = useAtomValue(dropDownVisible)
  
  return (
    <>
      <div className={`menu ${showMenu === true ? "active" : ""}`}>
        <ul>
          <li>User page</li>
          <li>Sign Out</li>
        </ul>
      </div>
    </>
  );
}

