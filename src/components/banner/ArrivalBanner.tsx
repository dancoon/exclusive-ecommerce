import React from "react";
import PlayStationBanner from "./PlayStationBanner";
import WomensCollectionBanner from "./WomensCollectionBanner";
import Speakers from "./Speakers";
import Perfume from "./Perfume";

const ArrivalBanner = () => {
  return (
    <div className="flex">
      <PlayStationBanner />
      <div className="flex-row">
        <div>notes</div>
        <WomensCollectionBanner />
        <div className="flex">
          <Speakers />
          <Perfume />
        </div>
      </div>
    </div>
  );
};

export default ArrivalBanner;
