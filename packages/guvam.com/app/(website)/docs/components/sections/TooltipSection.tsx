import { Tooltip } from "@guvam/components";
import type { FC } from "react";

import { Components } from "@/app/(website)/docs/components/Components";

export const TooltipSection: FC = () => (
  <Components id="tooltip">
    <Tooltip>
      <button className="Button">Button</button>
      <span className="Tooltip Tooltip--position-top">Label</span>
    </Tooltip>
  </Components>
);
