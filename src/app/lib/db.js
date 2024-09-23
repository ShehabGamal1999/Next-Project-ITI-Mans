import { MongoClient } from "mongodb";

let db;
if (!db) {
  const mongoClient = new MongoClient("mongodb+srv://shehab123456:shehab12345@cluster0.mongodb.net/posts?retryWrites=true&w=majority");
  const clientPromise = await mongoClient.connect();
  db = clientPromise.db();
}

export default db;
