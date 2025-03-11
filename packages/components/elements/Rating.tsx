"use client";

import type { FC } from "react";
import { useState } from "react";
import { Star, StarFill, StarHalf } from "react-bootstrap-icons";

interface RatingStarsProps {
  maxStars?: number;
  allowHalfStars?: boolean;
  readOnly?: boolean;
  defaultValue?: number;
}

export const Rating: FC<RatingStarsProps> = ({
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
