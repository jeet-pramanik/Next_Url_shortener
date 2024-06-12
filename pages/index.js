import { data } from "autoprefixer";
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

  function copyText() {
    const copyText = document.getElementById("text");
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices

    document.execCommand("copy");

    // alert(`Copied the text: ${copyText.value}`);
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-fuchsia-600 to-purple-600 bg-gray-100 flex flex-col items-center justify-center">
      <div className="  bg-slate-400 h-80  w-140  m-10 p-11 rounded-2xl bg-purple-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border ">
        <h1 className="text-3xl font-bold mb-4 center text-white-600">
          URL Shortener
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="url"
            id="imp1"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter your URL"
            required
            className="border border-solid-1 rounded p-2 w-64 text-blue-600 m-2"
          />
          <button
            type="submit"
            id="btn1"
            className="bg-blue-500 text-black rounded p-2 "
          >
            Shorten
          </button>
        </form>
        {shortUrl && (
          <div className="mt-4">
            <input
              value={shortUrl}
              type="url"
              className="border border-solid-1 rounded p-2 w-64 text-blue-600 m-2"
              id="text"
              readOnly
            />
            <button
              onClick={copyText}
              className="  text-black rounded shadow-lg shadow-blue-500/50  pl-4 pr-4 pt-2 pb-2 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500"
            >
              Copy
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
