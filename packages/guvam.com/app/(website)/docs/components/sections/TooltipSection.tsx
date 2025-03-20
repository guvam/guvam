import { Tooltip } from "@guvam/components";
import type { FC } from "react";

import { ComponentBlock } from "@/components/ComponentBlock";

export const TooltipSection: FC = () => (
  <ComponentBlock id="tooltip">
    <Tooltip>
      <button className="Button">Button</button>
      <span className="Tooltip Tooltip--position-top">Label</span>
    </Tooltip>
  </ComponentBlock>
);
