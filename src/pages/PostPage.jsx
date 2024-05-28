export default function PostPage() {
  return (
    <>
      <div className=" page-container border-blue-600 ">
        <div className=" post-area ">
          <div className=" post-body ">
            <h2>Hearder</h2>
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
