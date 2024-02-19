import Link from "next/link";
import React from "react";
import { FaRegStar } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { MdOutlineCancel } from "react-icons/md";
import { PiShoppingBagOpen } from "react-icons/pi";
import { TbLogout2 } from "react-icons/tb";

interface Props {
  setDisplayMenu: (a: boolean) => void;
}

const ManageProfile: React.FC<Props> = ({ setDisplayMenu }) => {
  const handleClick = () => {
    setTimeout(() => {
      setDisplayMenu(false);
    }, 1000);
  };
  const options = [
    {
      name: "Manage Profile",
      href: "/profile",
      icon: <FiUser size={24} />,
    },
    {
      name: "My Order",
      href: "/orders",
      icon: <PiShoppingBagOpen size={24} />,
    },
    {
      name: "My Cancellations",
      href: "/cancellations",
      icon: <MdOutlineCancel size={24} />,
    },
    { name: "My Reviews", href: "/reviews", icon: <FaRegStar size={24} /> },
    { name: "Logout", href: "/logout", icon: <TbLogout2 size={24} /> },
  ];
  return (
    <ul className="absolute top-24 right-32 z-50 rounded bg-rose-500 bg-opacity-80 text-white p-2">
      {options.map((option, index) => (
        <li key={index} className="pl-4 pr-4 p-1" onClick={handleClick}>
          <Link href={option.href} className="flex">
            <span className="mr-4">{option.icon}</span>
            {option.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ManageProfile;
