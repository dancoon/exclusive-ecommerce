"use client";
import React from "react";
import Image from "next/image";
import { useResendActivationEmailMutation } from "@/src/redux/features/authApiSlice";
import { toast } from "react-toastify";
import { useAppSelector } from "@/src/redux/hooks";

const Page = () => {
  const isResendClicked = false;
  const [resendActivationEmail, { isLoading }] =
    useResendActivationEmailMutation();
  
  const email = useAppSelector((state) => state.auth.user.email);

  const handleOnClick = () => {
    console.log(email);
    resendActivationEmail(email)
      .unwrap()
      .then(() => {
        toast.success("Email has been sent successfully");
      })
      .catch((error) => {
        toast.error(error.data.detail);
      });
  };

  return (
    <div className="mt-12 flex items-center">
      <Image src={"/auth.png"} alt={""} width={750} height={750} />
      <div className="mx-auto space-y-8 w-[400px]">
        <div>
          <h2 className="text-4xl">Activate Your Account</h2>
          {isResendClicked ? (
            <p className="mt-2">
              Please check your email; a new verification link has been sent.
            </p>
          ) : (
            <p className="mt-2">
              Please check your email; a verification link has been sent. If you
              haven&apos;t received it, you can{" "}
              <button className="text-blue-500 underline" onClick={handleOnClick}>Resend Email</button>.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
