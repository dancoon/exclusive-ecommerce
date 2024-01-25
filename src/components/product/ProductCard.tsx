import Image from 'next/image';
import React from 'react';
import HeartIcon from './HeartIcon';
import EyeIcon from './EyeIcon';
import StarRating from './Rating';

interface Props {
  image: string;
  discount?: number;
  title: string;
  current_price: number;
  before_price: number;
  rating: number;
}

const ProductCard: React.FC<Props> = ({ image, discount, title, current_price, before_price, rating }) => {
  return (
    <div className="my-6 min-w-[270px] flex flex-col">
      <div className="relative flex-shrink-0">
        <div className='min-h-[270px]'>
          <Image layout='fill' src={image} alt={title + " image"} />
        </div>
        {discount && (
          <span className="text-white bg-red-secondary rounded left-3 absolute top-5 p-1">
            {"-" + discount + " %"}
          </span>
        )}
        <div className="absolute right-3 top-2">
          <HeartIcon />
          <EyeIcon />
        </div>
      </div>
      <h3 className="font-medium my-1">{title}</h3>
      <div className="flex gap-2">
        <span className="text-red-secondary">{"$" + current_price}</span>
        <span className="text-gray-400 font-medium line-through">{"$" + before_price}</span>
      </div>
      <StarRating rating={rating} />
    </div>
  );
};

export default ProductCard;
