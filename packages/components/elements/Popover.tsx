"use client";

import { autoUpdate } from "@floating-ui/dom";
import type { FC, ReactElement } from "react";
import { cloneElement, createRef, useCallback, useEffect } from "react";

export const Popover: FC<{
  children: [ReactElement<HTMLButtonElement>, ReactElement<HTMLMenuElement>];
  id: string;
  modal?: boolean;
  open?: boolean;
}> = (props) => {
  const buttonRef = createRef<HTMLElement>();
  const popoverRef = createRef<HTMLElement>();

  const popoverId = `popover-${props.id}`;
  const buttonId = `popover-button-${props.id}`;

  const update = useCallback(() => {
    const button = buttonRef.current;
    const target = popoverRef.current;
    if (button && target) {
      return autoUpdate(button, target, () => {
        const { width, height, left, top } = button.getBoundingClientRect();

        target.style.setProperty("--Popover-offsetTop", `${button.offsetTop}px`);
        target.style.setProperty("--Popover-offsetLeft", `${button.offsetLeft}px`);
        target.style.setProperty("--Popover-top", `${top}px`);
        target.style.setProperty("--Popover-left", `${left}px`);
        target.style.setProperty("--Popover-width", `${width}px`);
        target.style.setProperty("--Popover-height", `${height}px`);
      });
    }
  }, [buttonRef, popoverRef]);

  useEffect(() => {
    let cleanup: (() => void) | undefined = () => {};

    const target = popoverRef.current;
    const toggle = (event: Event) => {
      if ((event as ToggleEvent).newState === "open") {
        cleanup = update();
      } else {
        cleanup?.();
      }
    };

    target?.addEventListener("toggle", toggle);

    return () => {
      cleanup?.();
      target?.removeEventListener("toggle", toggle);
    };
  }, [update, popoverRef]);

  return [
    cloneElement(props.children[0], {
      key: buttonId,
      id: buttonId,
      ref: buttonRef,
      popoverTarget: popoverId,
      "aria-haspopup": "menu",
      "aria-expanded": props.open ?? false,
    } as never),
    cloneElement(props.children[1], {
      key: popoverId,
      id: popoverId,
      ref: popoverRef,
      popover: "auto",
      "aria-modal": props.modal ?? false,
      "aria-labelledby": buttonId,
    } as never),
  ];
};
