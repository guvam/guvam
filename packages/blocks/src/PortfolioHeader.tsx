"use client";

import "./PortfolioHeader.css";

import { ActiveLink } from "@guvam/guvam.com/components/ActiveLink";
import GuvamFull from "@guvam/guvam.com/public/logo-full.svg";
import Link from "next/link";
import type { FC } from "react";

export const PortfolioHeader: FC = () => (
  <>
    <div className="PortfolioHeader-placeholder"></div>
    <div className="PortfolioHeader-position">
      <header className="PortfolioHeader">
        <Link
          className="PortfolioHeader-link"
          href="/packages/guvam.com/public"
          aria-label="go to Home"
        >
          <GuvamFull />
        </Link>

        <nav className="PortfolioHeader-nav">
          <ul className="PortfolioHeader-menu" aria-label="main navigation">
            <li>
              <ActiveLink
                className="PortfolioHeader-navLink"
                activeClassName="ServicesHeader-navLink--active"
                href="/packages/guvam.com/public"
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
        </nav>
      </header>
    </div>
  </>
);
