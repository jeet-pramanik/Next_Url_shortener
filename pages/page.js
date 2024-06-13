// pages/page.js
import App from "next/app";
import HomePage from "./index"; // Rename the import to avoid conflict

export default function Page() {
  // Rename the function to avoid conflict
  return (
    <>
      <HomePage />
    </>
  );
}
