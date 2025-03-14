"use client";

import type { RefObject } from "react";
import { useCallback, useRef } from "react";

export type ContextType<T> = Partial<
  Record<T extends string ? T : never, <K extends HTMLElement>(node: K | null) => void>
>;
export const useRefWithCallback = <T extends HTMLElement>(
  add?: (node: T) => () => void | null
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
