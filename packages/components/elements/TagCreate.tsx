import type { ComponentProps, Context, JSX, ReactNode } from "react";
import { createElement, useContext } from "react";

import type { ContextType } from "./utils/useRefWithCallback";

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
