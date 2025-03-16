import type { ComponentProps, Context, JSX, ReactNode, RefObject } from "react";
import { createElement, useCallback, useContext, useRef } from "react";
import type { Record } from "react-bootstrap-icons";

export type ContextType<T> = Partial<
  Record<T extends string ? T : never, <K extends HTMLElement>(node: K | null) => void>
>;

export const useRefWithCallback = <T extends HTMLElement>(
  add?: (node: T) => (() => void) | null
): [RefObject<T | null>, (node: T | null) => void] => {
  const ref = useRef<T>(null);
  const cleanRef = useRef<() => void>(null);

  const setRef = useCallback((node: T | null) => {
    if (ref.current) {
      cleanRef.current?.();
    }

    if (node && add) {
      cleanRef.current = add(node);
    }

    ref.current = node;
  }, []);

  return [ref, setRef];
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

export type TagProps<T extends keyof JSX.IntrinsicElements, K> = {
  tag: T;
  command: K;
  children: ReactNode;
} & ComponentProps<T>;
