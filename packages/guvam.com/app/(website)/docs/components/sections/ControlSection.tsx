import type { FC } from "react";

import { ComponentBlock } from "@/components/ComponentBlock";

export const ControlSection: FC = () => (
  <ComponentBlock id="control">
    <div className="List-stack">
      <label className="Control">
        <span className="Control-label">Label</span>
        <input className="Input" type="text" />
        <span className="Control-info">But instead of addressing the real issue</span>
        <span className="Control-error">But instead of addressing the real issue</span>
      </label>
    </div>
  </ComponentBlock>
);
