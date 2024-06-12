// pages/index.js
import React, { useState } from "react";

export default function Home() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/shorten", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url }),
    });

    const data = await res.json();
    setShortUrl(data.shortUrl);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4 text-blue-600">URL Shortener</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter your URL"
          required
          className="border border-solid-1 rounded p-2 w-64 text-blue-300 m-2"
        />
        <button type="submit" className="bg-blue-500 text-black rounded p-2">
          Shorten
        </button>
      </form>
      {shortUrl && (
        <div className="mt-4">
          <p className="text-blue-500">
            Short URL:{" "}
            <a href={shortUrl} className="text-blue-500">
              {shortUrl}
            </a>
          </p>
        </div>
      )}
    </div>
  );
}
