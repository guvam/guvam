import Rating from "@guvam/components/dist/Rating";
import React from "react";

import { Components } from "../Components";

export const RatingSection: React.FC = () => (
  <Components id="rating">
    <Rating maxStars={5} allowHalfStars={true} defaultValue={3.5} />
  </Components>
);
