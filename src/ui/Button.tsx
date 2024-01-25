"use client";
import React from "react";
import classNames from "classnames";

interface ButtonProps {
  name: string;
  bgColor: string;
  textColor: string;
  width?: number;
  onclick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  name,
  bgColor,
  textColor,
  width,
  onclick,
}) => {
  const classes: string = classNames(
    {
      "bg-red-secondary": bgColor === "bg-red-secondary",
      "bg-green-600": bgColor === "bg-green-600",
      "bg-white": bgColor === "bg-white",
      "text-white": textColor === "text-white",
      "text-black": textColor === "text-black",
      "p-4 rounded my-4": true,
    },
  );
  return (
    <button
      className={classes}
      onClick={onclick}
    >
      {name}
    </button>
  );
};

export default Button;
