import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
  const { shortId } = req.query;

  const client = await clientPromise;
  const db = client.db("url-shortener");

  const urlEntry = await db.collection("urls").findOne({ shortId });

  if (!urlEntry) {
    return res.status(404).end();
  }

  res.status(200).json({ url: urlEntry.url });
};
