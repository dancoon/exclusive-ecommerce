"use client";
import React, { useState } from "react";
import { FiUser } from "react-icons/fi";
import ManageProfile from "./ManageProfile";
import classNames from "classnames";

const ProfileIcon = () => {
  const [displayMenu, setDisplayMenu] = useState(false);

  const handleDisplayMenu = () => {
    setDisplayMenu(!displayMenu);
  };

  const classes: string = classNames({
    "text-black rounded-full p-1 relative cursor-pointer": true,
    "bg-red-secondary text-white-secondary": displayMenu,
  });
  return (
    <>
      <div className={classes} onClick={handleDisplayMenu}>
        <FiUser size={30} />
      </div>
      {displayMenu && <ManageProfile />}
    </>
  );
};

export default ProfileIcon;
