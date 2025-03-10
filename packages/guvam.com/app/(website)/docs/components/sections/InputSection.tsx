import type { FC } from "react";

import { Components } from "@/app/(website)/docs/components/Components";

export const InputSection: FC = () => (
  <Components id="input">
    <div className="Input">
      <input type="text" aria-label="input" />
    </div>
    <div className="Input">
      <input type="text" aria-label="input" placeholder="placeholder" />
    </div>
    <div className="Input">
      <input type="text" aria-label="input" defaultValue="value" />
    </div>
    <div className="Input">
      <input type="text" aria-label="input" defaultValue="value" disabled />
    </div>
  </Components>
);
