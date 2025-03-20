import type { FC } from "react";

import { ComponentBlock } from "@/components/ComponentBlock";

export const SwitchSection: FC = () => (
  <ComponentBlock id="switch">
    <input type="checkbox" className="Switch" aria-label="input" />
    <input type="checkbox" className="Switch" defaultChecked aria-label="input" />
    <input type="checkbox" className="Switch" disabled aria-label="input" />
    <input type="checkbox" className="Switch" defaultChecked disabled aria-label="input" />
  </ComponentBlock>
);
