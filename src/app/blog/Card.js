"use client";
import React, { useState } from "react";
import { FaThumbsUp } from "react-icons/fa";

const Card = ({ title, body }) => {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden mb-4">
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-700 mb-4">{body}</p>
        <button
          onClick={handleLike}
          className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors duration-300"
        >
          <FaThumbsUp />
          <span>{likes}</span>
        </button>
      </div>
    </div>
  );
};

export default Card;
