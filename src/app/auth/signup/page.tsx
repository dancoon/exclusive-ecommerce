import React from "react";
import Image from "next/legacy/image";
import SignupForm from "@/src/components/forms/SignupForm";

function Signup() {
  return (
    <div className="mt-12 flex items-center">
      <Image src={"/auth.png"} alt={""} width={750} height={750} />
      <SignupForm />
    </div>
  );
}

export default Signup;
