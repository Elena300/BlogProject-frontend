import "./PostCard.css";
import iot from "../assets/images/Iot-1.jpg";

function PostCard() {
  return (
    <div className="card">
      <div className="card-body">
        <div className="card-main-block">
          <div className="category">
            <div className="category-text">category /</div>
          </div>

          <div className="card-title-block">
            <div className="post-card-header">
              iMessage had an outage, but now it’s back
            </div>
            <div className="info">
              <p className=" post-author text-fluo-green">john johnson</p>
              <p className=" text-slate-400">may 16, 2024</p>
              <p className=" text-slate-400">| comment</p>
            </div>
          </div>
        </div>

        <div className="image-container">
          <img src={iot} className="post-image" alt="iot logo" />
        </div>
      </div>
      <div className="post-description">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim
        </p>
      </div>
      <button className="read-button">
        read post
      </button>
    </div>
  );
}

export default PostCard;
