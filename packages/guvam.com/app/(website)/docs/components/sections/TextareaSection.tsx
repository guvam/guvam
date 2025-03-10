import type { FC } from "react";

import { Components } from "@/app/(website)/docs/components/Components";

export const TextareaSection: FC = () => (
  <Components id="textarea">
    <div className="Input">
      <textarea aria-label="input"></textarea>
    </div>
    <div className="Input">
      <textarea aria-label="input" placeholder="placeholder"></textarea>
    </div>
    <div className="Input">
      <textarea aria-label="input" defaultValue="value"></textarea>
    </div>
    <div className="Input">
      <textarea aria-label="input" defaultValue="value" disabled></textarea>
    </div>
  </Components>
);
