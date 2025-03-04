"use client";

import type { LinkProps } from "next/link";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { FC, HTMLProps } from "react";
import { createElement, useEffect, useState } from "react";

export const ActiveLink: FC<
  LinkProps & HTMLProps<HTMLAnchorElement> & { activeClassName?: string; isParent?: boolean }
> = ({
  children,
  activeClassName = "SideMenu-menuItem--active",
  isParent = false,
  ...attributes
}) => {
  const pathname = usePathname();
  const hash = useHash();

  if (
    (isParent && typeof attributes.href === "string" && pathname.startsWith(attributes.href)) ||
    attributes.href === `${pathname}${hash}`
  ) {
    attributes.className =
      (attributes.className ? attributes.className + " " : "") + activeClassName;
  }

  return createElement(Link, attributes, children);
};

const useHash = () => {
  const [hash, setHash] = useState("");

  useEffect(() => {
    const onHashChanged = () => setHash(location.hash);
    const { pushState, replaceState } = window.history;

    window.history.pushState = function (...args) {
      pushState.apply(window.history, args);
      setTimeout(() => setHash(location.hash));
    };

    window.history.replaceState = function (...args) {
      replaceState.apply(window.history, args);
      setTimeout(() => setHash(location.hash));
    };

    window.addEventListener("hashchange", onHashChanged);

    onHashChanged();

    return () => {
      window.removeEventListener("hashchange", onHashChanged);
    };
  }, []);

  return hash;
};
