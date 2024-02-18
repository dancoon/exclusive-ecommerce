import React from "react";
import ProductCard from "./ProductCard";

interface Product {
  image: string;
  discount?: number;
  title: string;
  current_price: number;
  before_price: number;
  rating: number;
}

interface Props {
  isWishlist?: boolean;
}

const ProductList: React.FC<Props> = ({isWishlist}) => {
  const products: Product[] = [
    {
      title: "HAVIT HV-G92 Gamepad",
      image: "/products/gaming-controller.png",
      current_price: 120,
      before_price: 160,
      discount: 40,
      rating: 5,
    },
    {
      title: "AK-900 Wired Keyboard",
      image: "/products/keyboard.png",
      current_price: 960,
      before_price: 1160,
      discount: 35,
      rating: 4,
    },
    {
      title: "IPS LCD Gaming Monitor",
      image: "/products/monitor.png",
      current_price: 370,
      before_price: 400,
      discount: 30,
      rating: 5,
    },
    {
      title: "S-Series Comfort Chair ",
      image: "/products/chair.png",
      current_price: 375,
      before_price: 400,
      discount: 25,
      rating: 4,
    },
    {
      title: "Gucci duffle bag",
      image: "/products/bag.png",
      current_price: 960,
      before_price: 1160,
      discount: 35,
      rating: 4,
    },
    {
      title: "Breed Dry Dog Food",
      image: "/products/cesar.png",
      current_price: 100,
      before_price: 0,
      discount: 0,
      rating: 4,
    },
  ];

  return (
    <ul className="flex gap-10 overflow-x-auto my-2">
      {products.map((product, index) => (
        <li className="" key={index}>
          <ProductCard {...product} isInWishlist={isWishlist} />
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
