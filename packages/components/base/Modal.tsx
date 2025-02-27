"use client";

import type { FC, ReactNode } from "react";
import { useEffect } from "react";

export const Modal: FC<{
  children: ReactNode;
  onClose: () => void;
  isOpen: boolean;
  position?: string;
  closeOnEscape?: boolean;
  closeOnClickAway?: boolean;
}> = (props) => {
  // Prevent chrome default behavior when using showModal()
  useEffect(() => {
    const preventEscape = (e: KeyboardEvent) => {
      if (e.key !== "Escape") {
        return;
      }

      if (!props.closeOnEscape) {
        e.preventDefault();
      }
    };

    document.addEventListener("keydown", preventEscape);

    return () => {
      document.removeEventListener("keydown", preventEscape);
    };
  }, [props.closeOnEscape]);

  /* FIX: naming */
  return (
    <dialog
      className={"Modal" + (props.position ? ` ${props.position}` : " Center Top")}
      ref={(ref) => {
        if (ref) {
          if (props.isOpen) {
            ref.showModal();

            if (props.closeOnEscape) {
              ref.addEventListener(
                "keydown",
                (e) => {
                  if (e.key === "Escape") {
                    props.onClose();
                  }
                },
                { once: true }
              );
            }
          } else {
            ref.close();
          }
        }
      }}
    >
      {props.children}
    </dialog>
  );
};
