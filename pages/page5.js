import { useEffect } from "react";
import { useRouter } from "next/router";

const Page5 = ({ url }) => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push(url); // Redirect to the final URL
    }, 3000); // Delay for 3 seconds
  }, [url]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <h1 className="text-2xl font-bold">
        Redirecting to the final destination...
      </h1>
      <h1 className="text-2xl font-bold"> Page 5...</h1>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { query } = context;
  const { url } = query;

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

export default Page5;
