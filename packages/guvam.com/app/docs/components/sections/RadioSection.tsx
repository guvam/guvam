import type { FC } from "react";

import { Components } from "@/app/docs/components/Components";

export const RadioSection: FC = () => (
  <Components id="radio">
    <input type="radio" className="Radio" aria-label="input" />
    <input type="radio" className="Radio" defaultChecked aria-label="input" />
    <input type="radio" className="Radio" disabled aria-label="input" />
    <input type="radio" className="Radio" defaultChecked disabled aria-label="input" />
  </Components>
);
