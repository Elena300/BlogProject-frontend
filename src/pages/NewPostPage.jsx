import { useState } from "react";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function UserArea() {
  const [postTitle, setPostTitle] = useState("");
  const [postDescription, setPostDescription] = useState("");
  const [postContent, setPostContent] = useState("");
  const [image, setImage] = useState(null);
  const user_id = Cookies.get("userId");
  const navigate = useNavigate();
  console.log(user_id);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("post_title", postTitle);
    formData.append("post_description", postDescription);
    formData.append("post_content", postContent);
    formData.append("image", image);

    try {
      const response = await fetch(
        `https://goblogpost-867025111c75.herokuapp.com/api/blog/${user_id}`,
        {
          method: "POST",
          body: formData,
          credentials: "include",
        }
      );
      const data = await response.json();
      console.log(data);
      toast.success("Blog created successfully");
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4 p-10 ">
          <input
            type="text"
            value={postTitle}
            onChange={(e) => setPostTitle(e.target.value)}
            placeholder="Post Title"
            required
            className="text-fluo-green border border-fluo-green bg-techno-black p-2"
          />
          <textarea
            value={postDescription}
            onChange={(e) => setPostDescription(e.target.value)}
            placeholder="Post Description"
            required
            className="text-fluo-green border border-fluo-green bg-techno-black p-2 h-20"
          />
          <textarea
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
            placeholder="Post Content"
            required
            className="text-fluo-green border border-fluo-green bg-techno-black p-2 h-40 "
          />
          <div className=" flex justify-between">
            <input
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
              required
              className="text-fluo-green bg-techno-black font-space-grotesk-light uppercase text-base py-1 px-4 border border-solid border-fluo-green hover:bg-fluo-green hover:text-techno-black cursor-pointer"
            />
            <button
              type="submit"
              className="text-fluo-green bg-techno-black font-space-grotesk-light uppercase text-base py-1 px-4 border border-solid border-fluo-green hover:bg-fluo-green hover:text-techno-black cursor-pointer"
            >
              Create Blog
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
