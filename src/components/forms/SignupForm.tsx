"use client";

import { GoogleIcon } from "@/src/ui/Icons";
import Link from "next/link";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Spinner from "@/src/ui/Spinner";
import { useSignUpMutation } from "@/src/redux/features/authApiSlice";
import { toast } from "react-toastify";


const SignupForm = () => {
  const router = useRouter();
  const [signUp, { isLoading }] = useSignUpMutation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    re_password: "",
  });

  const formInputs: Array<{
    input_name: keyof typeof formData;
    input_placeholder: string;
    input_type: string;
  }> = [
    {
      input_name: "name",
      input_placeholder: "Name",
      input_type: "text",
    },
    {
      input_name: "email",
      input_placeholder: "Email",
      input_type: "text",
    },
    {
      input_name: "password",
      input_placeholder: "Password",
      input_type: "password",
    },
    {
      input_name: "re_password",
      input_placeholder: "Confirm password",
      input_type: "password",
    },
  ];

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    signUp({ ...formData })
      .unwrap()
      .then(() => {
        toast.success("Activation email was sent to your email account!!");
        router.push("/auth/login");
      })
      .catch(() => {
        toast.error("Registration failed!!");
      });
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto space-y-6 w-[400px]">
      <div>
        <h2 className="text-4xl">Create an Account</h2>
        <p className="mt-2">Enter your details below</p>
      </div>
      {formInputs.map(({ input_name, input_placeholder, input_type }, i) => (
        <input
          key={i}
          id={input_name}
          name={input_name}
          value={formData[input_name]}
          onChange={handleChange}
          className="p-2 pl-0 outline-none block border-b-4 border-slate-100 w-full"
          type={input_type}
          placeholder={input_placeholder}
        />
      ))}
      <button
        type="submit"
        className="bg-red-secondary text-white p-3 rounded block w-full"
      >
        {isLoading ? <Spinner /> : "Create Account"}
      </button>
      <button className="flex items-center justify-center space-x-4 p-3 w-full border border-slate-100 rounded">
        <GoogleIcon /> <span>Sign Up With Google</span>
      </button>
      <div className="flex space-x-4">
        <p>Already have an account?</p>
        <Link href="/auth/login" className="underline-offset-8 underline">
          Log in
        </Link>
      </div>
    </form>
  );
};

export default SignupForm;
