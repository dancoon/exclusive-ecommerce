"use client";
// pages/auth/activate/[uid]/[token].tsx

import { useActivateAccountMutation } from "@/src/redux/features/authApiSlice";
import Spinner from "@/src/ui/Spinner";
import { useEffect } from "react";
import { toast } from "react-toastify";

const Page = ({ params }: { params: { uid: string; token: string } }) => {
  const [activate, { isLoading }] = useActivateAccountMutation();

  return <div>{isLoading && <Spinner lg />}</div>;
};

export default Page;
