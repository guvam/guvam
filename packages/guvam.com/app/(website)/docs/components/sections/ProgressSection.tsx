import type { FC } from "react";

import { ComponentBlock } from "@/components/ComponentBlock";

export const ProgressSection: FC = () => (
  <ComponentBlock id="progress">
    <progress className="Progress" max="100" defaultValue="50" />
  </ComponentBlock>
);
