import Link from "next/link";
import React from "react";
import Email from "./Email";
import Image from "next/legacy/image";
import { FaceBookIcon, XIcon } from "@/src/ui/Icons";

const Footer = () => {
  return (
    <div className="text-white bg-black mt-28 px-20 pt-4 flex justify-between">
      <div className=" space-y-4 p-3">
        <h2 className="text-2xl font-bold">Exclusive</h2>
        <h3 className="text-xl font-medium"> Subscribe</h3>
        <p>Get 10% off your first order</p>
        <Email />
      </div>
      <div className=" space-y-4 p-3">
        <h2 className="text-2xl font-bold">Support</h2>
        <p>
          111 Bijoy sarani, Dhaka,
          <br /> DH 1515, Bangladesh.
        </p>
        <h3>exclusive@gmail.com</h3>
        <h3>+88015-88888-9999</h3>
      </div>
      <div className=" space-y-4 p-3">
        <h2 className="text-2xl font-bold">Account</h2>
        <Link href={""} className="block">
          My Account
        </Link>
        <Link href={""} className="block">
          Login / Register
        </Link>
        <Link href={""} className="block">
          Cart
        </Link>
        <Link href={""} className="block">
          Wishlist
        </Link>
        <Link href={""} className="block">
          Shop
        </Link>
      </div>
      <div className=" space-y-4 p-3">
        <h2 className="text-2xl font-bold"> Quick Link</h2>
        <Link href={""} className="block">
          Privacy Policy
        </Link>
        <Link href={""} className="block">
          Terms Of Use
        </Link>
        <Link href={""} className="block">
          FAQ
        </Link>
        <Link href={""} className="block">
          Contact
        </Link>
      </div>
      <div className=" space-y-4 p-3">
        <h2 className="text-2xl font-bold">Download App</h2>
        <div>
          <p className="text-white-secondary text-xs font-medium">
            Save $3 with App New User Only
          </p>
          <div className="flex justify-between space-x-2 items-center mt-1">
            <div>QR CODE HERE</div>{" "}
            <div className="flex-row space-y-4">
              <Image src={"/playstore.png"} alt={""} width={100} height={100} />
              <Image
                src={"/applestore.png"}
                alt={""}
                width={100}
                height={100}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <FaceBookIcon />
          <XIcon />
        </div>
      </div>
    </div>
  );
};

export default Footer;
