"use client";

import "./ServicesHeader.css";

import Link from "next/link";
import type { FC } from "react";

import { ActiveLink } from "@/components/ActiveLink";
import { HeaderSettings } from "@/components/HeaderSettings";
import type { ThemeSettings } from "@/components/Theme";
import GuvamFull from "@/public/logo-full.svg";

export const ServicesHeader: FC<{ themeSettings: ThemeSettings }> = (props) => (
  <>
    <div className="ServicesHeader-placeholder"></div>
    <div className="ServicesHeader-position">
      <header className="ServicesHeader">
        <Link className="ServicesHeader-link" href="/" aria-label="go to Home">
          <GuvamFull />
        </Link>

        <nav className="ServicesHeader-nav">
          <ul className="ServicesHeader-menu" aria-label="main navigation">
            <li>
              <ActiveLink
                className="ServicesHeader-navLink"
                activeClassName="ServicesHeader-navLink--active"
                href="/"
              >
                Home
              </ActiveLink>
            </li>
            <li>
              <ActiveLink
                className="ServicesHeader-navLink"
                activeClassName="ServicesHeader-navLink--active"
                isParent
                href="/docs"
              >
                Docs
              </ActiveLink>
            </li>
            <li>
              <ActiveLink
                className="ServicesHeader-navLink"
                isParent
                activeClassName="ServicesHeader-navLink--active"
                href="/support"
              >
                Support
              </ActiveLink>
            </li>
          </ul>

          <ul className="ServicesHeader-toggle">
            <li>
              <HeaderSettings themeSettings={props.themeSettings} />
            </li>
          </ul>
        </nav>
      </header>
    </div>
  </>
);
