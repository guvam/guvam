"use client";

import Rating from "@guvam/components/dist/Rating";
import React from "react";

import { Components } from "@/app/docs/components/Components";

const RatingSection: React.FC = () => {
  return (
    <>
      <Components id="rating">
        <div className="Column-list">
          <Rating maxStars={5} allowHalfStars={true} defaultValue={3.5} />
          <Rating maxStars={7} allowHalfStars={false} defaultValue={2} />
        </div>
      </Components>
    </>
  );
};

export default RatingSection;
