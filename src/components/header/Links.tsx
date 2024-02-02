import Link from "next/link";
import React from "react";

const Links = () => {
  return (
    <ul className="flex gap-8">
      <Link href="/">Home</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/about">About</Link>
      <Link href="/signup">Sign Up</Link>
    </ul>
  );
};

export default Links;
