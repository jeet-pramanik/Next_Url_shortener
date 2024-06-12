import { useEffect } from "react";
import { useRouter } from "next/router";

const Page1 = ({ url }) => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push(`/page2?url=${encodeURIComponent(url)}`);
    }, 3000); // Delay for 3 seconds
  }, [url]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <h1 className="text-2xl font-bold">Redirecting to Page 2...</h1>
      <h1 className="text-2xl font-bold"> Page 1...</h1>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { query } = context;
  const { url } = query;

  return {
    props: {
      url,
    },
  };
}

export default Page1;
