
import { useLoaderData } from 'react-router-dom';

export default function PostPage() {
  const postContent = useLoaderData();

  return (
    <>
      <div className=" page-container border-blue-600 ">
        <div className=" post-area ">
          <div className=" post-body ">
            <h2>{postContent.Post.post_title}</h2>
            <div>Date</div>
            <div>Text</div>
          </div>
          <div className=" actions-area ">
            <div>like</div>
            <div>comment</div>
          </div>
          <div className="toggle-comments"></div>
        </div>

        <div className=" blogger-area ">
          <div className=" blogger-card "></div>
        </div>
      </div>
    </>
  );
}

/*{
    "Username": "retrosax",
    "Post": {
        "post_id": 2,
        "user_id": 1,
        "post_title": "asd",
        "post_description": "asdasd",
        "post_content": "cat cat",
        "created_at": "2024-05-19T17:11:25.4883Z",
        "image_url": "https://res.cloudinary.com/dpyfweypg/image/upload/v1716133791/asd.jpg"
    },
    "LikeCount": 0,
    "CommentCount": 0
}*/
