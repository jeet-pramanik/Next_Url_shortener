import { useEffect } from "react";
import { useRouter } from "next/router";

const RedirectPage = ({ url }) => {
  const router = useRouter();

  useEffect(() => {
    if (url) {
      router.push(url);
    }
  }, [url]);

  return (
    <div>
      <h1>Redirecting...</h1>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { shortId } = context.params;

  // Ignore requests for favicon.ico
  if (shortId === "favicon.ico") {
    return {
      notFound: true,
    };
  }

  let url;
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/redirect?shortId=${shortId}`
    );
    const data = await res.json();
    url = data.url;
  } catch (error) {
    console.error("Error fetching redirect URL:", error);
  }

  if (!url) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      url,
    },
  };
}

export default RedirectPage;
