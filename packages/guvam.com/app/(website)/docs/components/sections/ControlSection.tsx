import type { FC } from "react";

import { Components } from "@/app/(website)/docs/components/Components";

export const ControlSection: FC = () => (
  <Components id="control">
    <div className="List-stack">
      <label className="Control">
        <span className="Control-label">Label</span>
        <div className="Input">
          <input type="text" />
        </div>
        <span className="Control-info">But instead of addressing the real issue</span>
        <span className="Control-error">But instead of addressing the real issue</span>
      </label>
    </div>
  </Components>
);
