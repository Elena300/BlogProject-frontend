import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import User from "./User";
import { useSetAtom } from "jotai";
import { modalAtom } from "../State";

function Navbar() {
  const setIsOpen = useSetAtom(modalAtom);
  return (
    <>
      <div className=" text-fluo-green bg-[#151720]">
        <div className=" flex justify-between items-center px-6 py-4 ">
          <Link to="/">
            <div className=" font-lato-black text-5xl ">
              IoT <br></br>Blog
            </div>
          </Link>
          <Link to="/about">
            <div>About</div>
          </Link>
          <Link to="/post">
            <div>New Post</div>
          </Link>
          <SearchBar />
          <button onClick={() => {setIsOpen(true)}}>signin</button>
          <div>
            <User name="BoB" initials="K" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
