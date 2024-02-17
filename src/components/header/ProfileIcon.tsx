"use client";
import React, { useState } from "react";
import { FiUser } from "react-icons/fi";
import ManageProfile from "./ManageProfile";

const ProfileIcon = () => {
  const [displayMenu, setDisplayMenu] = useState(false);

  const handleDisplayMenu = () => {
    setDisplayMenu(!displayMenu);
  }

  return (
    <>
      <div className="bg-red-secondary rounded-full p-1 relative" onClick={handleDisplayMenu}>
        <FiUser size={24} color="white" />
      </div>
      {displayMenu && <ManageProfile />}
    </>
  );
};

export default ProfileIcon;
