import React from "react";
import addPost from "../lib/addPost";
import { v2 as cloudinary } from "cloudinary";
import getPosts from "../lib/getPosts";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const posts = await getPosts();

const AddPost = () => {
  const create = async (formData) => {
    "use server";

    const file = formData.get("image");
    const arrayBuffer = await file.arrayBuffer();
    const buffer = new Uint8Array(arrayBuffer);
    const result = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          { tags: ["nextjs-server-actions-upload-sneakers"] },
          function (error, result) {
            if (error) {
              reject(error);
              return;
            }
            resolve(result);
          }
        )
        .end(buffer);
    });

    const id = posts.length + 1;
    const image = result.secure_url;
    const name = formData.get("name");
    const body = formData.get("body");
    addPost({ name, body, image, id });
  };

  return (
    <form
      action={create}
      className="flex flex-col w-96 mt-20 bg-cyan-300 p-5 rounded-2xl gap-2 shadow-md mx-auto"
    >
      <label>title</label>
      <input className="rounded p-2" type="text" name="title" />
      <label>body</label>
      <textarea className="rounded p-2" name="body" />
      <label>image</label>
      <input className="rounded p-2" type="file" name="image" />
      <button className="bg-slate-100 rounded-2xl mt-4 py-2 w-20">
        Submit
      </button>
    </form>
  );
};

export default AddPost;
