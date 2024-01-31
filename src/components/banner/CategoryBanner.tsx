import Button from "@/src/ui/Button";
import Image from "next/legacy/image";
import React from "react";

const CategoryBanner = () => {
  return (
    <div className="flex bg-black justify-between p-16 mt-24">
      <div className="text-white">
        <h3 className="text-green-600 my-8 text-lg">Categories</h3>
        <p className="font-semibold text-6xl">
          Enhance Your <br />
          Music Experience
        </p>
        <div className="text-black flex space-x-4 my-8">
          <div className=" bg-slate-200 w-24 h-24 rounded-full p-3 py-6">
            <span className="block font-semibold text-center">23</span>
            <span className="block text-center">Hours</span>
          </div>
          <div className=" bg-slate-200 w-24 h-24 rounded-full p-3 py-6">
            <span className="block font-semibold text-center">05</span>
            <span className="block text-center">Days</span>
          </div>
          <div className=" bg-slate-200 w-24 h-24 rounded-full p-3 py-6">
            <span className="block font-semibold text-center">59</span>
            <span className="block text-center">Minutes</span>
          </div>
          <div className=" bg-slate-200 w-24 h-24 rounded-full p-3 py-6">
            <span className="block font-semibold text-center">35</span>
            <span className="block text-center">Seconds</span>
          </div>
        </div>
        <Button name="Buy Now" bgColor="bg-green-600" textColor="text-white" />
      </div>
      <div className="mr-24">
        <Image src="/jbl.png" height={600} width={600} alt={""} />
      </div>
    </div>
  );
};

export default CategoryBanner;
