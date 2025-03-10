"use client";

import type { FC, ReactElement } from "react";
import { cloneElement, useId, useRef } from "react";

export const Tooltip: FC<{
  children: [ReactElement<HTMLButtonElement>, ReactElement<HTMLElement>];
  id?: string;
  show?: "click" | "hover";
}> = ({ children: [button, tooltip], show = "hover", id }) => {
  const ref = useRef<HTMLElement>(null);
  const idGen = useId().replace(":", "").replace(":", "").toLowerCase();
  const tooltipId = `tooltip-id-${id ?? idGen}`;
  const anchorId = `--${tooltipId}`;
  const buttonId = `button-${tooltipId}`;

  const optional =
    show === "click"
      ? { popoverTarget: tooltipId }
      : {
          onMouseOver: (ev: MouseEvent) => {
            if (!(ev.currentTarget as HTMLElement).hasAttribute("disabled")) {
              ref.current?.showPopover();
            }
          },
          onMouseOut: () => ref.current?.hidePopover(),
        };

  return [
    cloneElement(button, {
      key: buttonId,
      id: buttonId,
      style: { anchorName: anchorId },
      ...optional,
    } as never),
    cloneElement(tooltip, {
      key: tooltipId,
      id: tooltipId,
      style: { positionAnchor: anchorId },
      popover: "manual",
      role: "tooltip",
      ref: ref,
    } as never),
  ];
};
