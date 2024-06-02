import { useLoaderData } from 'react-router-dom';

export default function PostPage() {
	const postContent = useLoaderData();

	return (
		<>
			<div className="page-container m-10 p-4 bg-gray-800 text-white rounded shadow-lg">
				<div className="post-area">
					<div className="post-body">
						<div className="text-center">
							<h2 className="text-2xl font-bold mb-2">
								{postContent.Post.post_title}
							</h2>
						</div>
						<div className="text-sm mb-4">{postContent.Post.created_at}</div>
						<div className="mb-4">{postContent.Post.post_description}</div>
						<div>{postContent.Post.post_content}</div>
					</div>
					<div className="actions-area flex justify-between mt-4">
						<div className="like-count">{postContent.LikeCount} Likes</div>
						<div className="comment-count">
							{postContent.CommentCount} Comments
						</div>
					</div>
					<div className="toggle-comments"></div>
				</div>

				<div className="blogger-area mt-8">
					<div className="blogger-card"></div>
				</div>
			</div>
		</>
	);
}
