"use client";
import React, { ReactNode } from "react";
import Brand from "./Brand";
import Links from "./Links";
import Search from "./Search";
import WishlistIcon from "./WishlistIcon";
import { CartIcon } from "@/src/ui/Icons";
import ProfileIcon from "./ProfileIcon";
import { useAppSelector } from "@/src/redux/hooks";

const Header = () => {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
  console.log(isAuthenticated);
  return (
    <nav className="flex justify-between p-4 border-b-2 mt-6 items-center pr-32 pl-32">
      <Brand />
      <Links />
      <div className="flex items-center gap-4">
        <Search />
        <WishlistIcon />
        <CartIcon />
        {isAuthenticated && <ProfileIcon />}
      </div>
    </nav>
  );
};

export default Header;
