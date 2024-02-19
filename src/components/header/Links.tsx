"use client";
import Link from "next/link";
import React from "react";
import { useAppSelector } from "@/src/redux/hooks";

const Links = () => {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
  return (
    <ul className="flex gap-8">
      <Link href="/">Home</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/about">About</Link>
      {!isAuthenticated && <Link href="/signup">Sign Up</Link>}
      {!isAuthenticated && <Link href="/login">Log In</Link>}

    </ul>
  );
};

export default Links;
