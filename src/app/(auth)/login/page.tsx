import React from "react";
import Image from "next/legacy/image";
import LoginForm from "@/src/components/forms/LoginForm";

function Login() {
  return (
    <div className="mt-12 flex items-center">
      <Image src={"/auth.png"} alt={""} width={750} height={750} />
      <LoginForm />
    </div>
  );
}

export default Login;
