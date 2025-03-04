import type { FC } from "react";

import { Components } from "@/app/docs/components/Components";

export const ProgressSection: FC = () => (
  <Components id="progress">
    <progress className="Progress" max="100" defaultValue="50" />
  </Components>
);
