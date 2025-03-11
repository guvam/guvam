"use client";

import type { FC } from "react";
import { useState } from "react";
import { StarFill, StarHalf } from "react-bootstrap-icons";

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
}) => {
  const [rating, setRating] = useState(defaultValue);
  const [hoverValue, setHoverValue] = useState<number | null>(null);

  const handleStarClick = (value: number) => {
    if (!readOnly) {
      setRating(value);
    }
  };

  const handleStarHover = (value: number) => {
    if (!readOnly) {
      setHoverValue(value);
    }
  };

  const handleMouseLeave = () => {
    if (!readOnly) {
      setHoverValue(null);
    }
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= maxStars; i++) {
      const fullStarValue = i;
      const halfStarValue = i - 0.5;

      stars.push(
        <div key={i} className="Rating-starContainer">
          {allowHalfStars && (
            <label
              className="Rating-star Rating-starHalf"
              onMouseEnter={() => handleStarHover(halfStarValue)}
              onMouseLeave={handleMouseLeave}
            >
              <input
                type="radio"
                name="rating"
                value={halfStarValue}
                checked={rating === halfStarValue}
                onChange={() => handleStarClick(halfStarValue)}
                className="Rating-radio"
                disabled={readOnly}
              />
              <span
                className={`Rating-halfstar ${
                  (hoverValue !== null && hoverValue >= halfStarValue) || rating >= halfStarValue
                    ? "Gold"
                    : ""
                }`}
              >
                <StarHalf />
              </span>
            </label>
          )}

          <label
            className="Rating-star Rating-starFull"
            onMouseEnter={() => handleStarHover(fullStarValue)}
            onMouseLeave={handleMouseLeave}
          >
            <input
              type="radio"
              name="rating"
              value={fullStarValue}
              checked={rating === fullStarValue}
              onChange={() => handleStarClick(fullStarValue)}
              className="Rating-radio"
              disabled={readOnly}
            />
            <span
              className={`Rating-fullstar ${
                (hoverValue !== null && hoverValue >= fullStarValue) || rating >= fullStarValue
                  ? "Gold"
                  : ""
              }`}
            >
              <StarFill />
            </span>
          </label>
        </div>
      );
    }

    return stars;
  };

  return (
    <div className="Rating" onMouseLeave={handleMouseLeave}>
      <div className="Rating-stars">{renderStars()}</div>
    </div>
  );
};
