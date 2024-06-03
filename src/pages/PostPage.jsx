

import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { useState } from "react";

export default function PostPage() {
  const user_id = Cookies.get("userId");
  const username = Cookies.get("username");

  const postContent = useLoaderData();
  const [likeCount, setLikeCount] = useState(postContent.LikeCount);
  const [commentCount, setCommentCount] = useState(postContent.CommentCount);
  const [commentForm, setCommentForm] = useState("");
  const [comments, setComments] = useState(postContent.Comments || []);
  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    return new Date(dateString).toLocaleString(undefined, options);
  };

  const likePostUrl = `https://goblogpost-867025111c75.herokuapp.com/api/blog/like/${user_id}/${postContent.Post.post_id}`;
  const unlikePostUrl = `https://goblogpost-867025111c75.herokuapp.com/api/blog/unlike/${user_id}/${postContent.Post.post_id}`;

  const commentPostUrl = `https://goblogpost-867025111c75.herokuapp.com/api/blog/comment/post/${user_id}/${postContent.Post.post_id}`;

  const likePost = async () => {
    if (!user_id || !username) {
      toast.error("You must be logged in to like a post");
      return;
    }
    try {
      await fetch(likePostUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      setLikeCount(likeCount + 1);
      toast.success("👍​ Liked");
    } catch (error) {
      console.error(error);
    }
  };

  const unlikePost = async () => {
    if (!user_id || !username) {
      toast.error("You must be logged in to like a post");
      return;
    }
    try {
      await fetch(unlikePostUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      setLikeCount(likeCount - 1);
      toast.success("👎​ Unliked");
    } catch (error) {
      console.error(error);
    }
  };

  const postComment = async (e) => {
    e.preventDefault();
    if (!user_id || !username) {
      toast.error("You must be logged in to post a comment");
      return;
    }
    if (!commentForm.trim()) {
      toast.error("Comment cannot be empty");
      return;
    }
    try {
      const response = await fetch(commentPostUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          comment: commentForm,
        }),
      });
      if (response.ok) {
        setComments((prevComments) => [
          {
            CommentUsername: username,
            CommentString: commentForm,
          },
          ...prevComments,
        ]);
        setCommentCount(commentCount + 1); // increment commentCount
        setCommentForm("");
        toast.success("Comment posted");
      } else {
        throw new Error("Failed to post comment");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div className="page-container m-10 p-4 bg-gray-800 text-white rounded shadow-lg">
        <div className="post-area">
          <div className="post-body">
            <div className="text-center flex">
              <h2 className="text-2xl font-bold mb-2">
                {postContent.Post.post_title}
              </h2>
              <img
                src={postContent.Post.image_url}
                className={`w-28 h-28 rounded-full ml-4`}
                alt={postContent.Post.post_title}
              />
            </div>
            <div className="text-sm mb-4">
              {formatDate(postContent.Post.created_at)}
            </div>
            <div className="mb-4">{postContent.Post.post_description}</div>
            <div>{postContent.Post.post_content}</div>
          </div>
          <div className="actions-area flex justify-between mt-4">
            <div
              className={`like-count hover:cursor-pointer ${
                !user_id || !username ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={likeCount ? unlikePost : likePost}
            >
              {likeCount} 
            </div>
          </div>
          <div className="toggle-comments"></div>
        </div>

        <div className="blogger-area mt-8">
          <div className="blogger-card"></div>
        </div>
      </div>
      <div className="m-10 p-4">
        <h3 className="text-lg text-white font-semibold mb-4">
          Comments : {commentCount}
        </h3>
        <div className="comment-form py-4">
          <form onSubmit={postComment}>
            <input
              type="text"
              name="comment"
              placeholder="Add a comment"
              value={commentForm}
              className={`bg-gray-700 p-2 rounded-lg w-96`}
              onChange={(e) => setCommentForm(e.target.value)}
            />
            <button
              type="submit"
              className={`bg-[#3CFFD0] text-black p-2 rounded-lg ml-2
							}`}
            >
              Comment
            </button>
          </form>
        </div>
        {comments &&
          comments.length > 0 &&
          comments.map((comment, index) => (
            <div key={index} className="bg-gray-700 p-4 rounded-lg mb-4 w-full">
              <div className="font-medium text-white">
                <span className="text-blue-300">{comment.CommentUsername}</span>{" "}
                : {comment.CommentString}
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
=======
/* eslint-disable no-const-assign */
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';
import { useState } from 'react';

export default function PostPage() {
	const user_id = Cookies.get('userId');
	const username = Cookies.get('username');

	const postContent = useLoaderData();
	const [likeCount, setLikeCount] = useState(postContent.LikeCount);
	const [commentCount, setCommentCount] = useState(postContent.CommentCount);
	const [commentForm, setCommentForm] = useState('');
	const [comments, setComments] = useState(postContent.Comments || []);
	const formatDate = (dateString) => {
		const options = {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
			hour: '2-digit',
			minute: '2-digit',
		};
		return new Date(dateString).toLocaleString(undefined, options);
	};

	const likePostUrl = `https://goblogpost-867025111c75.herokuapp.com/api/blog/like/${user_id}/${postContent.Post.post_id}`;
	const unlikePostUrl = `https://goblogpost-867025111c75.herokuapp.com/api/blog/unlike/${user_id}/${postContent.Post.post_id}`;

	const commentPostUrl = `https://goblogpost-867025111c75.herokuapp.com/api/blog/comment/post/${user_id}/${postContent.Post.post_id}`;

	const likePost = async () => {
		if (!user_id || !username) {
			toast.error('You must be logged in to like a post');
			return;
		}
		try {
			await fetch(likePostUrl, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				credentials: 'include',
			});
			setLikeCount(likeCount + 1);
			toast.success('👍​ Liked');
		} catch (error) {
			console.error(error);
		}
	};

	const unlikePost = async () => {
		if (!user_id || !username) {
			toast.error('You must be logged in to like a post');
			return;
		}
		try {
			await fetch(unlikePostUrl, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				credentials: 'include',
			});
			setLikeCount(likeCount - 1);
			toast.success('👎​ Unliked');
		} catch (error) {
			console.error(error);
		}
	};

	const postComment = async (e) => {
		e.preventDefault();
		if (!user_id || !username) {
			toast.error('You must be logged in to post a comment');
			return;
		}
		if (!commentForm.trim()) {
			toast.error('Comment cannot be empty');
			return;
		}
		try {
			const response = await fetch(commentPostUrl, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				credentials: 'include',
				body: JSON.stringify({
					comment: commentForm,
				}),
			});
			if (response.ok) {
				setComments((prevComments) => [
					{
						CommentUsername: username,
						CommentString: commentForm,
					},
					...prevComments,
				]);
				setCommentCount(commentCount + 1); // increment commentCount
				setCommentForm('');
				toast.success('Comment posted');
			} else {
				throw new Error('Failed to post comment');
			}
		} catch (error) {
			console.error(error);
		}
	};
	return (
		<>
			<div className="page-container m-10 p-4 bg-gray-800 text-white rounded shadow-lg">
				<div className="post-area">
					<div className="post-body">
						<div className="text-center flex">
							<h2 className="text-2xl font-bold mb-2">
								{postContent.Post.post_title}
							</h2>
							<img
								src={postContent.Post.image_url}
								className={`w-28 h-28 rounded-full ml-4`}
								alt={postContent.Post.post_title}
							/>
						</div>
						<div className="text-sm mb-4">
							{formatDate(postContent.Post.created_at)}
						</div>
						<div className="mb-4">{postContent.Post.post_description}</div>
						<div>{postContent.Post.post_content}</div>
					</div>
					<div className="actions-area flex justify-between mt-4">
						<div
							className={`like-count hover:cursor-pointer ${
								!user_id || !username ? 'opacity-50 cursor-not-allowed' : ''
							}`}
							onClick={likeCount ? unlikePost : likePost}
						>
							{likeCount} 
						</div>
					</div>
					<div className="toggle-comments"></div>
				</div>

				<div className="blogger-area mt-8">
					<div className="blogger-card"></div>
				</div>
			</div>
			<div className="m-10 p-4">
				<h3 className="text-lg text-white font-semibold mb-4">
					Comments : {commentCount}
				</h3>
				<div className="comment-form py-4">
					<form onSubmit={postComment}>
						<input
							type="text"
							name="comment"
							placeholder="Add a comment"
							value={commentForm}
							className={`bg-gray-700 p-2 rounded-lg w-96`}
							onChange={(e) => setCommentForm(e.target.value)}
						/>
						<button
							type="submit"
							className={`bg-[#3CFFD0] text-black p-2 rounded-lg ml-2
							}`}
						>
							Comment
						</button>
					</form>
				</div>
				{comments &&
					comments.length > 0 &&
					comments.map((comment, index) => (
						<div key={index} className="bg-gray-700 p-4 rounded-lg mb-4 w-full">
							<div className="font-medium text-white">
								<span className="text-blue-300">{comment.CommentUsername}</span>{' '}
								: {comment.CommentString}
							</div>
						</div>
					))}
			</div>
		</>
	);
}

