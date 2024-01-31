import { GoogleIcon } from "@/src/ui/Icons";
import Link from "next/link";
import React from "react";

const SignupForm = () => {
  return (
    <form action="" className="mx-auto space-y-6 w-[400px]">
      <div>
        <h2 className="text-4xl">Log in to Exclusive</h2>
        <p className="mt-2">Enter your details below</p>
      </div>
      <input
        id="email"
        className="p-2 pl-0 outline-none block border-b-4 border-slate-100 w-full"
        type="text"
        placeholder="Email"
      />
      <input
        id="password"
        className="p-2 pl-0 outline-none block border-b-4 border-slate-100 w-full"
        type="password"
        placeholder="Password"
      />

      <div className="flex items-center justify-between">
        <button className="bg-red-secondary text-white px-10 p-3 rounded block">
          Log In
        </button>
        <Link href={""} className="text-red-secondary">
          {" "}
          Forgot Password?
        </Link>
      </div>
    </form>
  );
};

export default SignupForm;
