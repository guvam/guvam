import { Rating } from "@guvam/components";
import type { FC } from "react";

import { ComponentBlock } from "../../../../../components/ComponentBlock";

export const RatingSection: FC = () => (
  <ComponentBlock id="rating">
    <Rating maxStars={5} allowHalfStars={true} defaultValue={3.5} />
  </ComponentBlock>
);
