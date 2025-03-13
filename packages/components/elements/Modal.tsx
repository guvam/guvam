"use client";

import type { ComponentProps, Context, FC, JSX, ReactNode } from "react";
import { createContext, createElement, useContext, useMemo } from "react";

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

export type TagCreateProps<K, T extends keyof JSX.IntrinsicElements> = {
  tag: T;
  command: K;
  children: ReactNode;
  context: Context<ContextType<K>>;
} & ComponentProps<T>;

export const TagCreate = <K, T extends keyof JSX.IntrinsicElements>({
  tag,
  context,
  children,
  command,
  ...props
}: TagCreateProps<K, T>) => {
  const context1 = useContext(context);
  // TODO: FIX typing
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  return createElement(tag, { ...props, ref: context1[command] }, children);
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

/*
export const DialogBlock: FC = () => {
  return (
    <Modal>
      <ModalTag tag="button" command="dialog:open">
        button
      </ModalTag>
      <ModalTag tag="dialog" command="dialog:body">
        <h1>dialog</h1>
        <ModalTag tag="button" command="dialog:close">
          close
        </ModalTag>
      </ModalTag>
    </Modal>
  );
};

export const DialogBlock1: FC = () => {
    <div id="dialog-id">
      <button data-command-for="dialog-id" data-command="dialog:open" className="Button">
        button
      </button>
      <dialog data-command-for="dialog-id" data-command="dialog:body">
        <h1>dialog</h1>
        <button data-commnad-for="dialog-id" data-command="dialog:close">
          close
        </button>
      </dialog>
    </div>
  );
};
*/
