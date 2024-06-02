import "./PostCard.css";
import { Link } from "react-router-dom";

function PostCard({ postInfo }) {
  return (
    <div className="card">
      <div className="card-body">
        <div className="card-main-block">
          <div className="category">
            <div className="category-text">category /</div>
          </div>

          <div className="card-title-block">
            <div className="post-card-header cursor-pointer">
              {postInfo.Post.post_title}
            </div>
            <div className="info">
              <p className=" post-author text-fluo-green">
                {postInfo.Username}
              </p>
              <p className=" text-slate-400">may 16, 2024</p>
              <p className=" text-slate-400">| comment</p>
            </div>
          </div>
        </div>

        <div className="image-container">
          <img src={postInfo.Post.image_url} className="post-image" alt="iot logo" />
        </div>
      </div>
      <div className="post-description">
        <p>{postInfo.Post.post_description}</p>
      </div>
      <div className="read-button cursor-pointer">
        <Link to={`post/${postInfo.Post.post_id}`}>read post</Link>
      </div>
    </div>
  );
}

export default PostCard;
