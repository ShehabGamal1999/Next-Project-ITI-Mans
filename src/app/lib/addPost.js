// import db from "./db";

// const addPost = async (body) => {
//   db.collection("posts").insertOne(body);
// };

// export default addPost;
import connectToDatabase from './db'; // Import the connection function

const addPost = async (body) => {
  try {
    // Connect to the database
    const db = await connectToDatabase();

    // Insert the post into the "posts" collection
    const result = await db.collection('posts').insertOne(body);

    // Return the result (you can choose to return any relevant information)
    return result;
  } catch (error) {
    console.error('Error adding post:', error);
    throw new Error('Failed to add post');
  }
};

export default addPost;
