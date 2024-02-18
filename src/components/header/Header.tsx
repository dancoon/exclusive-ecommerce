"use client";
import React, { ReactNode } from "react";
import Brand from "./Brand";
import Links from "./Links";
import Search from "./Search";
import WishlistIcon from "./WishlistIcon";
import { CartIcon } from "@/src/ui/Icons";
import ProfileIcon from "./ProfileIcon";
import { useAppSelector } from "@/src/redux/hooks";
import { useRouter } from "next/router";
import Link from "next/link";

const Header = () => {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
  // const router = ;

  const handleWishListIconClick: () => void = () => {
    // router.push("/wishlist");
  };

  console.log(isAuthenticated);
  return (
    <nav className="flex justify-between p-4 border-b-2 mt-6 items-center pr-32 pl-32">
      <Brand />
      <Links />
      <div className="flex items-center gap-4">
        <Search />
        <div className="relative">
          <span className=" bg-red-secondary text-white rounded-full text-center absolute -top-2 -right-3 h-6 w-6">
            4
          </span>
          <Link href={"/wishlist"}>
            <WishlistIcon />
          </Link>
        </div>
        <div className="relative">
          <span className=" bg-red-secondary text-white rounded-full text-center absolute -top-2 -right-3 h-6 w-6">
            3
          </span>
          <Link href={"/cart"}>
            <CartIcon />
          </Link>
        </div>
        {isAuthenticated && <ProfileIcon />}
      </div>
    </nav>
  );
};

export default Header;
