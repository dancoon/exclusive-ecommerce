import React from "react";

const Timer = () => {
  return (
    <div className="flex gap-4">
      <div className="flex-row justify-center">
        <span className="block font-medium text-xs">Days</span>
        <span className="block font-bold text-[32px]">03 :</span>
      </div>
      <div className="flex-row justify-center">
        <span className="block font-medium text-xs">Hours</span>
        <span className="block font-bold text-[32px]">23 :</span>
      </div>
      <div className="flex-row justify-center">
        <span className="block font-medium text-xs">Minutes</span>
        <span className="block font-bold text-[32px]">19 :</span>
      </div>
      <div className="flex-row justify-center">
        <span className="block font-medium text-xs">Seconds</span>
        <span className="block font-bold text-[32px]">56</span>
      </div>
    </div>
  );
};

export default Timer;
