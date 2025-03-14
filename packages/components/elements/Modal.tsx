"use client";

import type { ComponentProps, FC, JSX, ReactNode } from "react";
import { createContext, useMemo } from "react";

import { TagCreate } from "./TagCreate";
import type { ContextType } from "./utils/useRefWithCallback";
import { useRefWithCallback } from "./utils/useRefWithCallback";

type ModalCommandType = "dialog:open" | "dialog:close" | "dialog:body";

export const ModalContext = createContext<ContextType<ModalCommandType>>({});

export const Modal: FC<{
  children: ReactNode;
}> = (props) => {
  const [, setOpenRef] = useRefWithCallback((node) => {
    const openHandler = () => {
      dialogRef.current?.showModal();
    };

    node.addEventListener("click", openHandler);

    return () => {
      node.removeEventListener("click", openHandler);
    };
  });

  const [, setCloseRef] = useRefWithCallback((node) => {
    const closeHandler = () => {
      dialogRef.current?.close();
    };

    node.addEventListener("click", closeHandler);

    return () => {
      node.removeEventListener("click", closeHandler);
    };
  });

  const [dialogRef, setDialogRef] = useRefWithCallback<HTMLDialogElement>();

  const value = useMemo(
    () =>
      ({
        "dialog:open": setOpenRef,
        "dialog:close": setCloseRef,
        "dialog:body": setDialogRef,
      }) as ContextType<ModalCommandType>,
    []
  );

  return <ModalContext.Provider value={value}>{props.children}</ModalContext.Provider>;
};

export type TagProps<T extends keyof JSX.IntrinsicElements> = {
  tag: T;
  command: ModalCommandType;
  children: ReactNode;
} & ComponentProps<T>;

export const ModalTag = <T extends keyof JSX.IntrinsicElements>({
  tag,
  command,
  ...props
}: TagProps<T>) => (
  // TODO: FIX typing
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  <TagCreate<ModalCommandType, T> context={ModalContext} tag={tag} command={command} {...props} />
);
