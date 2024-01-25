import { titleCase } from "@/src/utils";
import React from "react";
import Timer from "./Timer";
import Button from "@/src/ui/Button";
import ViewAllProducts from "../buttons/ViewAllProducts";
import { ViewProductsBtn } from "../buttons";

interface Props {
  name: string;
  title: string;
  hasTimer?: boolean;
  hasRightButton?: boolean;
  children: React.ReactNode;
}

const HomeSections: React.FC<Props> = ({
  name,
  title,
  hasTimer,
  hasRightButton,
  children,
}) => {
  return (
    <div className="mt-20 border-b">
      <div className="flex text-red-secondary items-center">
        <svg
          width="20"
          height="40"
          viewBox="0 0 20 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="20" height="40" rx="4" fill="#DB4444" />
        </svg>
        <h2 className="ml-4 font-semibold">{name}</h2>
      </div>
      <div className="flex items-center relative">
        <h2 className="font-semibold text-4xl mt-6 mr-24">
          {titleCase(title)}
        </h2>
        {hasTimer && <Timer />}
        <div className=" absolute right-0">{hasRightButton && <ViewProductsBtn btnName={"View All"} />}</div>
      </div>
      {children}
    </div>
  );
};

export default HomeSections;
