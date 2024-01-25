import React from "react";
import CategoryCard from "./CategoryCard";
import {
  Phone,
  Computers,
  SmartWatch,
  Camera,
  HeadPhones,
  Gaming,
} from "@/src/ui/Icons";

const categories = [
  {
    name: "Phones",
    icon: <Phone />,
  },
  {
    name: "Computers",
    icon: <Computers />,
  },
  {
    name: "SmartWatch",
    icon: <SmartWatch />,
  },
  {
    name: "Camera",
    icon: <Camera />,
  },
  {
    name: "HeadPhones",
    icon: <HeadPhones />,
  },
  {
    name: "Gaming",
    icon: <Gaming />,
  },
];

const CategoriesList = () => {
  return (
    <ul className="my-12 flex gap-10">
      {categories.map((category, index) => (
        <li key={index} className="">
          <CategoryCard name={category.name} icon={category.icon} />
        </li>
      ))}
    </ul>
  );
};

export default CategoriesList;
