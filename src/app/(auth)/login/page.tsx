"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import Image from "next/legacy/image";
import Link from "next/link";
import { useLoginMutation } from "@/src/redux/features/authApiSlice";
import validate from "./validation";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { useAppDispatch } from "@/src/redux/hooks";
import { setAuth, setUser } from "@/src/redux/features/authSlice";

function Login() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [logIn, { isLoading }] = useLoginMutation();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const formInputs: Array<{
    input_name: keyof typeof formData;
    input_placeholder: string;
    input_type: string;
  }> = [
    {
      input_name: "email",
      input_placeholder: "Email",
      input_type: "text",
    },
    {
      input_name: "password",
      input_placeholder: "Password",
      input_type: showPassword ? "text" : "password",
    },
  ];

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors(validate(formData.email)); 

    const isValid = Object.values(errors).every((error) => error === "");

    if (isValid) {
      // console.log("Form is valid");
      logIn({ ...formData })
        .unwrap()
        .then(() => {
          toast.success("Logged in successfully!!");
          router.push("/profile");
          dispatch(setAuth());
          dispatch(setUser({ email: formData.email}));

        })
        .catch(() => {
          toast.error("Login failed!!");
        });
    } else {
      // console.log("Form is invalid");
    }
  };

  return (
    <div className="mt-12 flex items-center">
      <Image src={"/auth.png"} alt={""} width={750} height={750} />
      <form onSubmit={handleSubmit} className="mx-auto space-y-6 w-[400px]">
        <div>
          <h2 className="text-4xl">Log in to Exclusive</h2>
          <p className="mt-2">Enter your details below</p>
        </div>
        {formInputs.map(({ input_name, input_placeholder, input_type }, i) => (
          <div
            key={i}
            className="flex border-b-4 border-slate-200 items-center pr-2"
          >
            <input
              id={input_name}
              name={input_name}
              value={formData[input_name]}
              onChange={handleChange}
              className="p-2 pl-0 outline-none block w-full"
              type={input_type}
              placeholder={input_placeholder}
            />
            {input_name === "password" && (
              <div onClick={handleTogglePassword}>
                {showPassword ? <HiEye size={20} /> : <HiEyeOff size={20} />}
              </div>
            )}
            {errors[input_name as keyof typeof errors] && (
              <p className="text-red-500 text-sm">
                {errors[input_name as keyof typeof errors]}
              </p>
            )}
          </div>
        ))}

        <div className="flex items-center justify-between">
          <button className="bg-red-secondary text-white px-10 p-3 rounded block">
            Log In
          </button>
          <Link href={""} className="text-red-secondary">
            Forgot Password?
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
