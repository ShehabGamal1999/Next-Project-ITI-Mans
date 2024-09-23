"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

function DetailsCard({ title, body, id, image }) {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  function handleLike() {
    setLiked(true);
    setLikeCount((prev) => prev + 1);
  }

  return (
    <>
      <div className="w-full mx-auto p-6 bg-white/70 backdrop-blur-lg shadow-xl rounded-3xl flex">
        <div className="w-1/2 pr-6 flex justify-center items-center">
          <Image
            src={image}
            width={700}
            height={900}
            alt={title}
            className="rounded-xl max-h-80 object-cover shadow-md hover:scale-110 transform transition-transform duration-300"
          />
        </div>
        <div className="w-1/2 pl-6 flex flex-col justify-between">
          <Link href={`/post/${id}`}>
            <h4 className="text-4xl font-bold text-gray-800 mb-4 hover:text-indigo-600 transition-colors duration-300">
              {title}
            </h4>
            <hr className="my-4 border-gray-300" />
            <p className="text-gray-700 text-lg line-clamp-4 leading-relaxed">{body}</p>
          </Link>

          {/* Like Button */}
          <button
            onClick={handleLike}
            className={`${
              liked
                ? "bg-gradient-to-r from-pink-500 to-red-500 text-white"
                : "bg-gradient-to-r from-gray-200 to-gray-300 text-gray-800"
            } w-full rounded-full py-3 mt-6 hover:from-pink-400 hover:to-red-400 active:from-pink-600 active:to-red-600 shadow-lg transition-all duration-300`}
          >
            {liked ? `Liked (${likeCount})` : "Like ♥️"}
          </button>
        </div>
      </div>
    </>
  );
}

export default DetailsCard;
