import "./PostCard.css"

function PostCard() {
  
  return (
    <div className="Card">
      <div className="Card--body">
        <div className="Card--header">category</div>
        <div className="image">
          <img src="https://via.placeholder.com/150" alt="Post" className=" w-10/12 " />
        </div>
        <h2>Post Title</h2>
        <p>Post date</p>
        <p>Post description</p>
      </div>
      <div className="Card--footer">
        <h3>author</h3>
        <div className="Card--footer--actions">
          <button>Like</button>
          <button>Comment</button>
          <button>Share</button>
          <button>add to fav</button>
          <div>comment</div>
        </div>
      </div>
    </div>
  );
}

export default PostCard