"use client";

import React from "react";
import { useRouter } from "next/navigation";

function NavButtons({ id, length }) {
  const router = useRouter();

  function handleNextPost(id) {
    if (id < length) {
      router.push(`/post/${id + 1}`);
    }
  }

  function handlePrevPost(id) {
    if (id > 1) {
      router.push(`/post/${id - 1}`);
    }
  }

  return (
    <div className="flex justify-center gap-4 my-6 ">
      <button
        onClick={() => handlePrevPost(id)}
        className=" w-60 rounded-2xl bg-blue-900 p-2 hover:bg-blue-300 hover:text-black hover:scale-90  text-white"
      >
        Prev
      </button>
      <button
        onClick={() => handleNextPost(id)}
        className="w-60 rounded-2xl bg-blue-900 hover:bg-blue-300 hover:text-black hover:scale-90 p-2 text-white"
      >
        Next
      </button>
    </div>
  );
}

export default NavButtons;
