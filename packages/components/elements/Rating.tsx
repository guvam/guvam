"use client";

import { useState } from "react";
import { Star, StarFill, StarHalf } from "react-bootstrap-icons"; // Import Bootstrap icons

interface RatingStarsProps {
  maxStars?: number; // Total number of stars
  allowHalfStars?: boolean; // Enable/disable half-stars
  readOnly?: boolean; // If true, makes it non-interactive
  defaultValue?: number; // Initial rating
}

const Rating = ({
  maxStars = 5,
  allowHalfStars = true,
  readOnly = false,
  defaultValue = 0,
}: RatingStarsProps) => {
  const [rating, setRating] = useState(defaultValue);
  const [hoverValue, setHoverValue] = useState<number | null>(null);

  const getStarIcon = (index: number) => {
    const value = hoverValue ?? rating;
    if (value >= index + 1) {
      return <StarFill />;
    }

    if (allowHalfStars && value >= index + 0.5) {
      return <StarHalf />;
    }

    return <Star />;
  };

  const handleClick = (index: number, isHalf: boolean) => {
    if (readOnly) {
      return;
    }

    const newValue = allowHalfStars && isHalf ? index + 0.5 : index + 1;
    setRating(newValue);
  };

  return (
    <div className="Rating-stars">
      {Array.from({ length: maxStars }, (_, index) => (
        <span
          key={index}
          className="Star-wrapper"
          onMouseEnter={() => !readOnly && setHoverValue(index + 1)}
          onMouseLeave={() => !readOnly && setHoverValue(null)}
          onClick={(e) => {
            if (readOnly) {
              return;
            }

            const isHalf =
              allowHalfStars && e.nativeEvent.offsetX < e.currentTarget.clientWidth / 2;
            handleClick(index, isHalf);
          }}
        >
          {getStarIcon(index)}
        </span>
      ))}
    </div>
  );
};

export default Rating;
