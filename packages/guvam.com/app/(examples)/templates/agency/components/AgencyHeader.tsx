"use client";

import "./AgencyHeader.css";

import Link from "next/link";
import type { FC } from "react";

import { ActiveLink } from "@/components/ActiveLink";
import { HeaderSettings } from "@/components/HeaderSettings";
import type { ThemeSettings } from "@/components/Theme";
import GuvamFull from "@/public/logo-full.svg";

export const AgencyHeader: FC<{ themeSettings: ThemeSettings }> = (props) => (
  <>
    <div className="AgencyHeader-placeholder"></div>
    <div className="AgencyHeader-position">
      <header className="AgencyHeader">
        <Link className="AgencyHeader-link" href="/" aria-label="go to Home">
          <GuvamFull />
        </Link>

        <nav className="AgencyHeader-nav">
          <ul className="AgencyHeader-menu" aria-label="main navigation">
            <li>
              <ActiveLink
                className="AgencyHeader-navLink"
                activeClassName="ServicesHeader-navLink--active"
                href="/"
              >
                Home
              </ActiveLink>
            </li>
            <li>
              <ActiveLink
                className="AgencyHeader-navLink"
                activeClassName="ServicesHeader-navLink--active"
                isParent
                href="/docs"
              >
                Docs
              </ActiveLink>
            </li>
            <li>
              <ActiveLink
                className="AgencyHeader-navLink"
                isParent
                activeClassName="ServicesHeader-navLink--active"
                href="/support"
              >
                Support
              </ActiveLink>
            </li>
          </ul>

          <ul className="AgencyHeader-toggle">
            <li>
              <HeaderSettings themeSettings={props.themeSettings} />
            </li>
          </ul>
        </nav>
      </header>
    </div>
  </>
);
