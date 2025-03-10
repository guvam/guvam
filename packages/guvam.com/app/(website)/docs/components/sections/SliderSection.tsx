import type { FC } from "react";

import { Components } from "@/app/(website)/docs/components/Components";

export const SliderSection: FC = () => (
  <Components id="slider">
    <input type="range" className="Slider" min="0" max="100" defaultValue="50" aria-label="input" />
    <input
      type="range"
      className="Slider"
      min="0"
      max="100"
      defaultValue="50"
      disabled
      aria-label="input"
    />
  </Components>
);
