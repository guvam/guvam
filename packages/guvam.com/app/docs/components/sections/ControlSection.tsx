import type { FC } from "react";

import { Components } from "@/app/docs/components/Components";

export const ControlSection: FC = () => (
  <Components id="control">
    <div className="List-stack">
      <label className="Control">
        <span className="Control-label">Label</span>
        <input type="text" className="Input" />
        <span className="Control-info">But instead of addressing the real issue</span>
        <span className="Control-error">But instead of addressing the real issue</span>
      </label>
    </div>
  </Components>
);
