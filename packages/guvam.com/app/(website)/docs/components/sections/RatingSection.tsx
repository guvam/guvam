import { Rating } from "@guvam/components";
import type { FC } from "react";

import { Components } from "../Components";

export const RatingSection: FC = () => (
  <Components id="rating">
    <Rating maxStars={5} allowHalfStars={true} defaultValue={3.5} />
  </Components>
);
