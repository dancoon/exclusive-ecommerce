import React from "react";
import { MailIcon } from "./Icons";

const EmailInput = () => {
  return (
    <div className="flex p-2 rounded border-white-secondary border">
      <input type="text" className="bg-black" placeholder="Enter your email" />
      <button>
        <MailIcon />
      </button>
    </div>
  );
};

export default EmailInput;
