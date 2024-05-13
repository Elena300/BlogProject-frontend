import React from "react";
import PostGroup from "../components/PostGroup";

function Home() {
  return (
    <>
      <h1 className="font-lato-regular">Categories</h1>
      <div className=" pl-6 bg-red-200 w-full grid grid-cols-4 ">
        <PostGroup />
      </div>
    </>
  );
}

export default Home;
