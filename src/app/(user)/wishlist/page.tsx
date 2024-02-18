import HomeSections from "@/src/components/pagesections/HomeSections";
import ProductList from "@/src/components/product/ProductList";
import Button from "@/src/ui/Button";
import React from "react";

const page = () => {
  return (
    <div className="pr-32 pl-32">
      <div className="flex justify-between items-center mt-12 mb-4">
        <h3 className=" text-xl">Wishlist (4)</h3>
        <Button
          name={"Move All To Bag"}
          bgColor={"bg-white"}
          textColor={"text-black"}
          rounded
        ></Button>
      </div>
      <ProductList isWishlist></ProductList>
      <HomeSections name={"Based On Your WishList"} title={"Just For You"}>
        <ProductList></ProductList>
      </HomeSections>
    </div>
  );
};

export default page;
