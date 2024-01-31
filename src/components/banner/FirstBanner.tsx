import Image from "next/legacy/image";
import Link from "next/link";
import React from "react";
import ShopNow from "../custom_links";

interface Props {
  image_url: string;
  title: string;
  description: string;
}

const FirstBanner: React.FC<Props> = ({ image_url, title, description }) => {
  return (
    <div className="relative bg-black p-1 rounded mt-10 w-1/2">
      <Image
        src={image_url}
        alt={title}
        width={500}
        height={450}
        className="absolute right-0"
      />
      <div className=" absolute bottom-0 text-white ml-5 mb-8">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="">{description}</p>
        <ShopNow />
      </div>
    </div>
  );
};

export default FirstBanner;
