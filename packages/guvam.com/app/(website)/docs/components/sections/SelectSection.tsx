import type { FC } from "react";

import { ComponentBlock } from "@/components/ComponentBlock";

export const SelectSection: FC = () => (
  <ComponentBlock id="select">
    <select className="Input" name="select1" aria-label="input">
      <option></option>
      <option>option 1</option>
      <option>option 2</option>
      <option>option 3</option>
    </select>

    <select className="Input" defaultValue="1" name="select2" aria-label="input">
      <option></option>
      <option value="1">option 1</option>
      <option>option 2</option>
      <option>option 3</option>
    </select>

    <select className="Input" disabled name="select3" aria-label="input">
      <option></option>
      <option>option 1</option>
      <option>option 2</option>
      <option>option 3</option>
    </select>
  </ComponentBlock>
);
