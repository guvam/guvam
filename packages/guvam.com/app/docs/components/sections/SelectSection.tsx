import type { FC } from "react";

import { Components } from "@/app/docs/components/Components";

export const SelectSection: FC = () => (
  <Components id="select">
    <select className="Select" name="select1" aria-label="input">
      <option></option>
      <option>option 1</option>
      <option>option 2</option>
      <option>option 3</option>
    </select>
    <select className="Select" defaultValue="1" name="select2" aria-label="input">
      <option></option>
      <option value="1">option 1</option>
      <option>option 2</option>
      <option>option 3</option>
    </select>
    <select className="Select" disabled name="select3" aria-label="input">
      <option></option>
      <option>option 1</option>
      <option>option 2</option>
      <option>option 3</option>
    </select>
  </Components>
);
