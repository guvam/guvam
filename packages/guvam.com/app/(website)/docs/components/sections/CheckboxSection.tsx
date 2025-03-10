import type { FC } from "react";

import { Components } from "@/app/(website)/docs/components/Components";

export const CheckboxSection: FC = () => (
  <Components id="checkbox">
    <input type="checkbox" className="Checkbox" aria-label="input" />
    <input type="checkbox" className="Checkbox" aria-label="input" defaultChecked />
    <input type="checkbox" className="Checkbox" aria-label="input" disabled />
    <input type="checkbox" className="Checkbox" aria-label="input" defaultChecked disabled />
  </Components>
);
