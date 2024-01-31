import { UpArrowIcon } from "@/src/ui/Icons";
import React from "react";

const UpArrow = () => {
  return (
      <div className="w-full relative">
      <span className="absolute right-0 block p-3 bg-white-secondary rounded-full">
        <UpArrowIcon />
      </span>
    </div>
  );
};

export default UpArrow;
