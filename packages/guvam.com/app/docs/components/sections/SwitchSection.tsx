import type { FC } from "react";

import { Components } from "@/app/docs/components/Components";

export const SwitchSection: FC = () => (
  <Components id="switch">
    <input type="checkbox" className="Switch" aria-label="input" />
    <input type="checkbox" className="Switch" defaultChecked aria-label="input" />
    <input type="checkbox" className="Switch" disabled aria-label="input" />
    <input type="checkbox" className="Switch" defaultChecked disabled aria-label="input" />
  </Components>
);
