import type { FC } from "react";

import { ComponentBlock } from "@/components/ComponentBlock";

export const SliderSection: FC = () => (
  <ComponentBlock id="slider">
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
  </ComponentBlock>
);
