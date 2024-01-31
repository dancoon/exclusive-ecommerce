import Image from "next/legacy/image";
import React from "react";
import ShopNow from "../custom_links";

interface Props {
  image_url: string;
  title: string;
  description: string;
}

const SecondBanner: React.FC<Props> = ({ image_url, title, description }) => {
  return (
    <div className="relative bg-black rounded mt-10 w-full">
      <Image
        src={image_url}
        alt={title}
        width={350}
        height={350}
        className="ml-52"
      />
      <div className=" absolute bottom-0 text-white ml-5 mb-8">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="">{description}</p>
        <ShopNow />
      </div>
    </div>
  );
};

export default SecondBanner;
