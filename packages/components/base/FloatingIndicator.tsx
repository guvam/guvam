"use client";

import type { FC, ReactElement } from "react";
import { Children, cloneElement, useState } from "react";

interface FloatingIndicatorProps {
  children: ReactElement<HTMLElement>[];
  indicator?: ReactElement<HTMLElement>;
}

// TODO: indicator starts stretching when resizing browser window
// FIX: Maybe make it so that on resize indicator is disabled?
export const FloatingIndicator: FC<FloatingIndicatorProps> = ({
  children,
  indicator = <div className="Indicator" />,
}) => {
  const [position, setPosition] = useState<number | null>(null);

  return (
    <>
      {position !== null &&
        cloneElement(indicator, {
          style: { positionAnchor: `--anchor-id-${position}` },
        } as never)}
      {Children.map(children, (item, i) =>
        cloneElement(item, {
          key: i,
          style: { anchorName: `--anchor-id-${i}` },
          onClick: () => setPosition(i),
        } as never)
      )}
    </>
  );
};
