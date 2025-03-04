import type { FC } from "react";

import { Components } from "@/app/docs/components/Components";

export const InputSection: FC = () => (
  <Components id="input">
    <input type="text" className="Input" aria-label="input" />
    <input type="text" className="Input" aria-label="input" placeholder="placeholder" />
    <input type="text" className="Input" aria-label="input" defaultValue="value" />
    <input type="text" className="Input" aria-label="input" defaultValue="value" disabled />
  </Components>
);
