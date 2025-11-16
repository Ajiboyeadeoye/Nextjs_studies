import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute: "Blog"
    }
}




export default function Blog() {
  return (
    <>
      <h1>Welcome to the Blog</h1>
      <h2>View our latest product here</h2>
      <Link href="/products">Product page</Link>
    </>
  );
}
