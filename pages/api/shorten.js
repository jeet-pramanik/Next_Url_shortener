import { v4 as uuidv4 } from "uuid";
import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const { url } = req.body;
  const shortId = uuidv4().slice(0, 6);

  const client = await clientPromise;
  const db = client.db("url-shortener");

  await db.collection("urls").insertOne({ shortId, url });

  res
    .status(200)
    .json({ shortUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/${shortId}` });
};
