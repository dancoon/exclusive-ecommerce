"use client";
import React, { useState } from "react";
import Rating from "@mui/material/Rating";

interface Props {
  rating: number;
}

const StarRating: React.FC<Props> = ({ rating }) => {
  const [ratingValue, setRating] = useState(rating);
  const handleRating = (newRating: React.SetStateAction<number>) => {
    setRating(newRating);
  };
  return (
    <div className="flex items-center">
      <Rating
        name="simple-controlled"
        value={ratingValue}
        onChange={(event, newValue) => {
          setRating(newValue || 0);
        }}
      />
      <span className="font-semibold text-gray-400">(81)</span>
    </div>
  );
};

export default StarRating;
