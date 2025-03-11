"use client";

import "./PortfolioHeader.css";

import Link from "next/link";
import type { FC } from "react";

import { ActiveLink } from "@/components/ActiveLink";
import { HeaderSettings } from "@/components/HeaderSettings";
import type { ThemeSettings } from "@/components/Theme";
import GuvamFull from "@/public/logo-full.svg";

export const PortfolioHeader: FC<{ themeSettings: ThemeSettings }> = (props) => (
  <>
    <div className="PortfolioHeader-placeholder"></div>
    <div className="PortfolioHeader-position">
      <header className="PortfolioHeader">
        <Link className="PortfolioHeader-link" href="/" aria-label="go to Home">
          <GuvamFull />
        </Link>

        <nav className="PortfolioHeader-nav">
          <ul className="PortfolioHeader-menu" aria-label="main navigation">
            <li>
              <ActiveLink
                className="PortfolioHeader-navLink"
                activeClassName="ServicesHeader-navLink--active"
                href="/"
              >
                Home
              </ActiveLink>
            </li>
            <li>
              <ActiveLink
                className="PortfolioHeader-navLink"
                activeClassName="ServicesHeader-navLink--active"
                isParent
                href="/docs"
              >
                Docs
              </ActiveLink>
            </li>
            <li>
              <ActiveLink
                className="PortfolioHeader-navLink"
                isParent
                activeClassName="ServicesHeader-navLink--active"
                href="/support"
              >
                Support
              </ActiveLink>
            </li>
          </ul>

          <ul className="PortfolioHeader-toggle">
            <li>
              <HeaderSettings themeSettings={props.themeSettings} />
            </li>
          </ul>
        </nav>
      </header>
    </div>
  </>
);
