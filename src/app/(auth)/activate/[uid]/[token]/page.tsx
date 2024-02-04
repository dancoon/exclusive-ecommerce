"use client";
// pages/auth/activate/[uid]/[token].tsx

import { useActivateAccountMutation } from "@/src/redux/features/authApiSlice";
import Spinner from "@/src/ui/Spinner";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/src/redux/hooks";
import { setActivated } from "@/src/redux/features/authSlice";

const Page = ({ params }: { params: { uid: string; token: string } }) => {
  const [activate, { isLoading }] = useActivateAccountMutation();
  const router = useRouter();
  const dispatch = useAppDispatch();

  const [effectTriggered, setEffectTriggered] = useState(false);

  useEffect(() => {
    // Check if the effect has already been triggered
    if (!effectTriggered) {
      // Update the flag to indicate that the effect is now triggered
      setEffectTriggered(true);

      // Define an async function to be able to use await
      const activateAccount = async () => {
        try {
          const response = await activate(params).unwrap();
          toast.success("Account has been activated successfully");
          dispatch(setActivated());
          router.push("/login");
        } catch (error: any) {
          toast.error((error as { data: { detail: string } }).data.detail);
        }
      };

      // Call the async function
      activateAccount();
    }
  }, [effectTriggered]); // Add effectTriggered to the dependency array

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
