"use client";

import { autoUpdate } from "@floating-ui/dom";
import type { FC, ReactElement } from "react";
import { cloneElement, createRef } from "react";

export const Popover: FC<{
  children: [ReactElement<HTMLButtonElement>, ReactElement<HTMLMenuElement>];
  id: string;
  placement?: "left" | "right";
  modal?: boolean;
  open?: boolean;
}> = (props) => {
  const ref = createRef<HTMLDivElement>();

  const popoverId = `popover-${props.id}`;
  const buttonId = `popover-button-${props.id}`;

  return [
    cloneElement(props.children[0], {
      key: buttonId,
      id: buttonId,
      ref,
      popoverTarget: popoverId,
      "aria-haspopup": "menu1",
      "aria-expanded": props.open ?? false,
    } as never),
    cloneElement(props.children[1], {
      key: popoverId,
      id: popoverId,
      popover: "auto",
      "aria-modal": props.modal ?? false,
      "aria-labelledby": buttonId,
      onBeforeToggle: (event: ToggleEvent) => {
        const button = ref.current;
        const target = event.target as HTMLMenuElement | null;

        if (button && target && event.newState === "open") {
          autoUpdate(button, target, () => {
            const rect = button.getBoundingClientRect();
            const screenY = button.offsetTop + rect.height;
            const screenX =
              props.placement === "right" ? button.offsetLeft + rect.width : button.offsetLeft;
            console.log(button.scrollLeft, screenX, screenY);
            Object.assign(target.style, {
              left: `${screenX}px`,
              top: `${screenY}px`,
            });
          });
        }
      },
    } as never),
  ];
};
