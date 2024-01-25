import { Slackside_One } from "next/font/google";
import React from "react";

interface CategoryCardProps {
  name: string;
  icon: React.ReactNode;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ name, icon }) => {
  return (
    <div className="border rounded h-[165px] w-[200px] py-8">
      {icon}
      <h3 className="text-center mt-1">{name}</h3>
    </div>
  );
};

export default CategoryCard;
