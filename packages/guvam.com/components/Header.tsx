import "./Header.css";

import Link from "next/link";
import type { FC } from "react";
import { Github } from "react-bootstrap-icons";

import { ActiveLink } from "@/components/ActiveLink";
import { HeaderMenu } from "@/components/HeaderMenu";
import { HeaderSettings } from "@/components/HeaderSettings";
import type { ThemeSettings } from "@/components/Theme";
import GuvamFull from "@/public/logo-full.svg";

export const Header: FC<{ themeSettings: ThemeSettings }> = (props) => (
  <header className="Header">
    <Link className="Header-link" href="/" aria-label="go to Home">
      <GuvamFull />
    </Link>

    <nav className="Header-nav">
      <ul className="Header-menu" aria-label="main navigation">
        <li>
          <ActiveLink className="Header-navLink" activeClassName="Header-navLink--active" href="/">
            Home
          </ActiveLink>
        </li>
        <li>
          <ActiveLink
            className="Header-navLink"
            activeClassName="Header-navLink--active"
            isParent
            href="/docs/"
          >
            Docs
          </ActiveLink>
        </li>
        <li>
          <ActiveLink
            className="Header-navLink"
            activeClassName="Header-navLink--active"
            isParent
            href="/blocks/"
          >
            Blocks
          </ActiveLink>
        </li>
        <li>
          <ActiveLink
            className="Header-navLink"
            activeClassName="Header-navLink--active"
            isParent
            href="/templates/"
          >
            Templates
          </ActiveLink>
        </li>
        <li>
          <ActiveLink
            className="Header-navLink"
            isParent
            activeClassName="Header-navLink--active"
            href="/support"
          >
            Support
          </ActiveLink>
        </li>
      </ul>

      <ul className="Header-toggle">
        <li>
          <Link
            href="https://github.com/guvam/guvam"
            className="Button Button--icon Button--type-text"
          >
            <Github />
          </Link>
        </li>
        <li>
          <HeaderSettings themeSettings={props.themeSettings} />
        </li>
        <li>
          <HeaderMenu />
        </li>
      </ul>
    </nav>
  </header>
);
