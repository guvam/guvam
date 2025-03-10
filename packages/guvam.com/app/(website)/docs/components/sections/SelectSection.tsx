import type { FC } from "react";

import { Components } from "@/app/(website)/docs/components/Components";

export const SelectSection: FC = () => (
  <Components id="select">
    <div className="Input">
      <select name="select1" aria-label="input">
        <option></option>
        <option>option 1</option>
        <option>option 2</option>
        <option>option 3</option>
      </select>
    </div>
    <div className="Input">
      <select defaultValue="1" name="select2" aria-label="input">
        <option></option>
        <option value="1">option 1</option>
        <option>option 2</option>
        <option>option 3</option>
      </select>
    </div>
    <div className="Input">
      <select disabled name="select3" aria-label="input">
        <option></option>
        <option>option 1</option>
        <option>option 2</option>
        <option>option 3</option>
      </select>
    </div>
  </Components>
);
