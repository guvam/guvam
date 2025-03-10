import type { FC } from "react";

import { Components } from "@/app/(website)/docs/components/Components";

export const SkeletonSection: FC = () => (
  <Components id="skeleton">
    <div className="List">
      <div className="Skeleton Skeleton--image"></div>
      <div className="Content">
        <div className="Skeleton Skeleton--heading"></div>
        <div className="Skeleton Skeleton--subHeading"></div>
        <div className="Skeleton Skeleton--paragraph"></div>
        <div className="Skeleton Skeleton--comment"></div>
      </div>
    </div>
  </Components>
);
