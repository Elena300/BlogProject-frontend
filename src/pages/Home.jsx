
import PostCard from "../components/PostCard";
import { useLoaderData } from 'react-router-dom'

export default function Home() {
  const allPostsInfo = useLoaderData()
  
  return (
    <>
      <div className=" w-full min-h-80 bg-techno-black grid grid-cols-2 grid-flow-row auto-rows-min gap-x-24 gap-y-10 px-16 pt-10">
        {allPostsInfo.map((postInfo) => (
          <PostCard key={postInfo.Post.post_id} postInfo={postInfo} />
        ))}
      </div>
    </>
  );
}







