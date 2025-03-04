"use client";

import React from "react";
import { StarFill, StarHalf } from "react-bootstrap-icons";

import { Components } from "@/app/docs/components/Components";

const RatingSection: React.FC = () => {
  const [rating1, setRating1] = React.useState<number>(0);
  const [rating2, setRating2] = React.useState<number>(0);

  const handleStarClick1 = (starValue: number) => {
    setRating1(starValue);
  };

  const handleStarClick2 = (starValue: number) => {
    setRating2(starValue);
  };

  const renderStars1 = () => {
    return [1, 2, 3, 4, 5].map((star) => (
      <span
        key={star}
        className={`Rating-star ${star <= rating1 ? "Gold" : ""}`}
        onClick={() => handleStarClick1(star)}
      >
        <StarFill />
      </span>
    ));
  };

  const renderStars2 = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const starValue = i * 2;
      const isHalfStar = rating2 >= starValue - 1 && rating2 < starValue;
      const isFullStar = rating2 >= starValue;

      stars.push(
        <span
          key={i}
          className={`Rating-star ${isFullStar ? "Gold" : ""}`}
          onClick={() => handleStarClick2(starValue)}
        >
          <StarFill />
          <span
            className={`Rating-halfstar ${isHalfStar ? "Gold" : ""}`}
            onClick={(e) => {
              e.stopPropagation();
              handleStarClick2(starValue - 1);
            }}
          >
            <StarHalf />
          </span>
        </span>
      );
    }

    return stars;
  };

  return (
    <>
      <Components id="rating">
        <div className="Rating">
          <div className="Rating-stars">{renderStars1()}</div>
          <input
            type="range"
            min="1"
            max="5"
            step="1"
            value={rating1}
            onChange={(e) => setRating1(Number(e.target.value))}
            className="Rating-slider"
          />
        </div>
      </Components>

      <Components id="rating">
        <div className="Rating">
          <div className="Rating-stars">{renderStars2()}</div>
          <input
            type="range"
            min="0"
            max="5"
            step="0.5"
            value={rating2}
            onChange={(e) => setRating2(Number(e.target.value))}
            className="Rating-slider"
          />
        </div>
      </Components>
    </>
  );
};

export default RatingSection;
