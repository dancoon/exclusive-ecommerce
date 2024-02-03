"use client";
// pages/auth/activate/[uid]/[token].tsx

import { useActivateAccountMutation } from "@/src/redux/features/authApiSlice";
import Spinner from "@/src/ui/Spinner";
import { useEffect } from "react";
import { toast } from "react-toastify";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Page = ({ params }: { params: { uid: string; token: string } }) => {
  const [activate, { isLoading }] = useActivateAccountMutation();
  const router = useRouter();

  useEffect(() => {
    activate(params)
      .unwrap()
      .then(() => {
        toast.success("Account has been activated successfully");
        router.push("/login");
      })
      .catch((error) => {
        toast.error(error.data.detail);
      });
  }, []);

  return (
    <div className="mt-12 flex items-center">
      <Image src={"/auth.png"} alt={""} width={750} height={750} />
      <div className="mx-auto space-y-8 w-[450px]">
        <div>
          <h2 className="text-4xl">Activating Your Account</h2>
          <p className="mt-2">Please wait...</p>
          {isLoading && <Spinner lg />}
        </div>
      </div>
    </div>
  );
};

export default Page;
