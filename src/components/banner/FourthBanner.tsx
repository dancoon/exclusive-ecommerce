import Image from "next/legacy/image";
import React from "react";
import ShopNow from "../custom_links";

interface Props {
  image_url: string;
  title: string;
  description: string;
}

const FourthBanner: React.FC<Props> = ({ image_url, title, description }) => {
  return (
    <div className="relative bg-black px-4 py-3 rounded mt-4 w-1/2">
      <Image src={image_url} alt={title} width={250} height={300} />
      <div className=" absolute bottom-0 text-white ml-5 mb-8">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="">{description}</p>
        <ShopNow />
      </div>
    </div>
  );
};
export default FourthBanner;
