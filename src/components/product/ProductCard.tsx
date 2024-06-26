import Image from "next/legacy/image";
import React from "react";
import HeartIcon from "./HeartIcon";
import EyeIcon from "./EyeIcon";
import StarRating from "./Rating";
import { IoTrashOutline } from "react-icons/io5";

interface Props {
  image: string;
  discount?: number;
  isNew?: boolean;
  title: string;
  current_price: number;
  before_price: number;
  rating: number;
  isInWishlist?: boolean;
}

const ProductCard: React.FC<Props> = ({
  image,
  discount,
  isNew,
  title,
  current_price,
  before_price,
  rating,
  isInWishlist,
}) => {
  return (
    <div className="my-6 min-w-[270px] flex flex-col">
      <div className="relative flex-shrink-0">
        <div className="min-h-[270px]">
          <Image layout="fill" src={image} alt={title + " image"} />
        </div>
        {discount && (
          <span className="text-white bg-red-secondary rounded left-3 absolute top-5 p-1">
            {"-" + discount + " %"}
          </span>
        )}
        {isNew && (
          <span className="bg-green-600 text-white absolute top-14 p-1 rounded left-3">
            NEW
          </span>
        )}
        <div className="absolute right-3 top-2">
          {!isInWishlist && (
            <>
              <HeartIcon />
              <EyeIcon />
            </>
          )}
          {isInWishlist && (
            <div className=" bg-white-secondary rounded-full p-2 mt-4">
              <IoTrashOutline size={24} />
            </div>
          )}
        </div>
      </div>
      <h3 className="font-medium my-1">{title}</h3>
      <div className="flex gap-2">
        <span className="text-red-secondary">{"$" + current_price}</span>
        {discount && (
          <span className="text-gray-400 font-medium line-through">
            {"$" + before_price}
          </span>
        )}
      </div>
      {!isInWishlist && <StarRating rating={rating} />}
    </div>
  );
};

export default ProductCard;
