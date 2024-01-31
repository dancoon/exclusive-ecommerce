import React from "react";
import SecondBanner from "./SecondBanner";
import FirstBanner from "./FirstBanner";
import FourthBanner from "./FourthBanner";
import ThirdBanner from "./ThirdBanner";
import { describe } from "node:test";

const ArrivalBanner = () => {
  const first = {
    image_url: "/ps5.png",
    title: "PlayStation 5",
    description: "Black and White version of the PS5 coming out on sale.",
  };

  const second = {
    image_url: "/womens.png",
    title: "Women's Collections",
    description: "Featured woman collections that give you another vibe.",
  };

  const third = {
    image_url: "/speakers.png",
    title: "Speakers",
    description: "Amazon wireless speakers",
  };

  const fourth = {
    image_url: "/perfumes.png",
    title: "Perfume",
    description: "GUCCI INTENSE OUD EDP",
  };
  return (
    <div className="flex space-x-8 w-full">
      <FirstBanner
        image_url={first.image_url}
        description={first.description}
        title={first.title}
      />
      <div className="flex-row w-1/2">
        <SecondBanner
          image_url={second.image_url}
          title={second.title}
          description={second.description}
        />
        <div className="flex space-x-8 w-full">
          <ThirdBanner
            image_url={third.image_url}
            title={third.title}
            description={third.description}
          />
          <FourthBanner image_url={fourth.image_url} title={fourth.title} description={fourth.description}  />
        </div>
      </div>
    </div>
  );
};

export default ArrivalBanner;
