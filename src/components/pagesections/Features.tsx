import { DeliveryIcon } from "@/src/ui/Icons";
import React from "react";

const Features = () => {
  return (
    <div className="flex w-full justify-between px-28 mt-24 mb-6">
      <div className="flex-row text-center">
        <span className="block mx-auto">icon</span>
        <h3 className=" text-xl font-semibold">FREE AND FAST DELIVERY</h3>
        <p>Free delivery for all orders over $140</p>
      </div>
      <div className="flex-row text-center p-2">
        <span className="block mx-auto">Icon</span>
        <h3 className=" text-xl font-semibold">24/7 CUSTOMER SERVICE</h3>
        <p>Friendly 24/7 customer support</p>
      </div>
      <div className="flex-row text-center p-2">
        <span className="block mx-auto">Icon</span>
        <h3 className=" text-xl font-semibold">MONEY BACK GUARANTEE</h3>
        <p>We reurn money within 30 days</p>
      </div>
    </div>
  );
};

export default Features;
