import { useEffect } from "react";
import { useRouter } from "next/router";
import clientPromise from "../lib/mongodb";

const RedirectPage = ({ url }) => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push(`/page1?url=${encodeURIComponent(url)}`);
    }, 3000); // Delay for 3 seconds
  }, [url]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <h1 className="text-2xl font-bold">Redirecting...</h1>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { shortId } = context.params;
  const client = await clientPromise;
  const db = client.db("url-shortener");

  const data = await db.collection("urls").findOne({ shortId });

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      url: data.url,
    },
  };
}

export default RedirectPage;
