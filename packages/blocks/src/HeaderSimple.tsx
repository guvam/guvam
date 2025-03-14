"use client";

import "./HeaderSimple.css";

import GuvamFull from "@guvam/guvam.com/public/logo-full.svg";
import Link from "next/link";
import type { FC, ReactNode } from "react";

import { HeaderNavigation } from "./HeaderNavigation";

export const HeaderSimple: FC = () => (
  <header className="HeaderSimple">
    <Link href="/" aria-label="go to Home">
      <GuvamFull className="HeaderSimple-logo" />
    </Link>
    <HeaderNavigation />
    <a href="mailto:hello@guvam.com" className="Button Button--type-muted">
      Contact us
    </a>
  </header>
);

export const HeaderPosition: FC<{ children: ReactNode }> = (props) => (
  <>
    <div className="PortfolioHeader-placeholder"></div>
    <div className="PortfolioHeader-position">{props.children}</div>
  </>
);
