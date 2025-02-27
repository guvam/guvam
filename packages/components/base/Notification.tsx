"use client";
import type { FC, ReactElement } from "react";
import { cloneElement, useEffect, useState } from "react";

export const Notification: FC<{
  children: [ReactElement<HTMLButtonElement>, ReactElement<HTMLDivElement>];
  id: string;
  modal?: boolean;
  timer?: number;
}> = ({ children, id, modal, timer }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isVisible && timer) {
      const timeout = setTimeout(() => {
        setIsVisible(false);
      }, timer * 1000);

      return () => clearTimeout(timeout);
    }
  }, [isVisible, timer]);

  return [
    cloneElement(children[0], {
      key: `notification-button-id-${id}`,
      id: `notification-button-id-${id}`,
      popoverTarget: `notification-id-${id}`,
      "aria-haspopup": "menu",
      "aria-expanded": isVisible,
      onClick: () => setIsVisible((prev) => !prev),
    } as never),
    cloneElement(children[1], {
      key: `notification-id-${id}`,
      id: `notification-id-${id}`,
      popover: "manual",
      "aria-modal": modal ?? false,
      "aria-labelledby": `notification-button-id-${id}`,
      className: `${children[1].props.className} ${isVisible ? "Show" : "Hide"}`,
    } as never),
  ];
};
