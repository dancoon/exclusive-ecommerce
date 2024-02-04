"use client";
import Image from "next/legacy/image";
import { GoogleIcon } from "@/src/ui/Icons";
import Link from "next/link";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Spinner from "@/src/ui/Spinner";
import { useSignUpMutation } from "@/src/redux/features/authApiSlice";
import { toast } from "react-toastify";
import { HiEye, HiEyeOff } from "react-icons/hi";
import validate from "./validation";
import { useAppDispatch } from "@/src/redux/hooks";
import { setUser } from "@/src/redux/features/authSlice";

function Signup() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [signUp, { isLoading }] = useSignUpMutation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    re_password: "",
  });
  const [showPassword, setShowPassword] = useState({
    password: false,
    re_password: false,
  });
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(true);

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
      input_type: showPassword.password ? "text" : "password",
    },
    {
      input_name: "re_password",
      input_placeholder: "Confirm password",
      input_type: showPassword.re_password ? "text" : "password",
    },
  ];

  const handleTogglePassword = (name: keyof typeof showPassword) => {
    const value = showPassword[name];
    setShowPassword({ ...showPassword, [name]: !value });
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
    setErrors(validate(formData));
    setIsValid(Object.values(errors).some((error) => error !== ""));

    if (Object.values(errors).some((error) => error !== "") || isValid) {
      console.log("Form is valid");
      signUp({ ...formData })
        .unwrap()
        .then(() => {
          toast.success("Activation email was sent to your email account!!");
          router.push("/activate");
        })
        .catch(() => {
          toast.error("Registration failed!!");
        });
      const { email } = formData;
      dispatch(setUser({ email }));
    } else {
      console.log("Form is invalid");
    }
  };
  return (
    <div className="mt-12 flex items-center">
      <Image src={"/auth.png"} alt={""} width={750} height={750} />
      <form onSubmit={handleSubmit} className="mx-auto space-y-6 w-[400px]">
        <div>
          <h2 className="text-4xl">Create an Account</h2>
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
            {(input_name === "password" || input_name === "re_password") &&
              (showPassword[input_name] ? (
                <HiEye
                  onClick={() => handleTogglePassword(input_name)}
                  size={20}
                />
              ) : (
                <HiEyeOff
                  onClick={() => handleTogglePassword(input_name)}
                  size={20}
                />
              ))}
            {errors[input_name as keyof typeof errors] && (
              <p className="text-red-500 text-sm">
                {errors[input_name as keyof typeof errors]}
              </p>
            )}
          </div>
        ))}

        <button
          disabled={isLoading}
          type="submit"
          className="bg-red-secondary text-white p-3 rounded block w-full"
        >
          {isLoading ? <Spinner /> : "Create Account"}
        </button>
        <button className="flex items-center justify-center space-x-4 p-3 w-full border border-slate-300 rounded">
          <GoogleIcon /> <span>Sign Up With Google</span>
        </button>
        <div className="flex space-x-4">
          <p>Already have an account?</p>
          <Link href="/login" className="underline-offset-8 underline">
            Log in
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Signup;
