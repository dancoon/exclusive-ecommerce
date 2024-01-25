import React from "react";
import { ArrowIcon } from "@/src/ui/Icons";

interface Props {
  index: number;
  item: string;
  hasArrow?: boolean;
}

const Item: React.FC<Props> = ({ index, item, hasArrow }) => {
  return (
    <div className="flex items-center justify-between">
      <li key={index} className="my-2">
        {item}
      </li>
      {hasArrow && <ArrowIcon />}
    </div>
  );
};

export default Item;
