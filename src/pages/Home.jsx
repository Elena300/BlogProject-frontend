
import PostCard from "../components/PostCard";


function Home() {
  return (
    <>
      <div className=" w-100% h-100% bg-techno-black grid grid-cols-2 grid-flow-row auto-rows-min gap-x-24 gap-y-10 px-16 pt-10">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
      
    </>
  );
}

export default Home;
