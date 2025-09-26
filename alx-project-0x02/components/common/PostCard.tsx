import React from "react";
import { PostProps } from "@/interfaces";

const PostCard: React.FC<PostProps> = ({ userId, title, content }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4 w-full max-w-md mx-auto">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="mb-2 text-gray-700">{content}</p>
      <span className="text-sm text-gray-500">User ID: {userId}</span>
    </div>
  );
};

export default PostCard;
