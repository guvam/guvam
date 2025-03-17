"use client";

import type { FC, JSX, ReactNode } from "react";
import { createContext, useMemo } from "react";

import type { ContextType, TagProps } from "./utils/TagCreate";
import { TagCreate, useRefWithCallback } from "./utils/TagCreate";

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

export const ModalTag = <T extends keyof JSX.IntrinsicElements>({
  tag,
  command,
  ...props
}: TagProps<T, ModalCommandType>) => (
  // TODO: FIX typing
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  <TagCreate<ModalCommandType, T> context={ModalContext} tag={tag} command={command} {...props} />
);
