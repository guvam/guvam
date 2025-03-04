"use client";

import { Popover } from "@guvam/components";
import Link from "next/link";
import type { FC } from "react";
import { createRef } from "react";
import { Github, List, XLg } from "react-bootstrap-icons";

import { ComponentsLinks } from "@/app/docs/components/ComponentsLinks";
import { TutorialsLinks } from "@/app/docs/tutorials/TutorialsLinks";
import { ActiveLink } from "@/components/ActiveLink";
import GuvamFull from "@/public/logo-full.svg";

export const HeaderMenu: FC = () => {
  const ref = createRef<HTMLDivElement>();

  return (
    <Popover id="menu">
      <button
        className="Button Button--icon Button--type-text Header-hamburgerMenu"
        aria-label="Toggle menu"
      >
        <List size={24} />
      </button>
      <div
        ref={ref}
        className="Header-mobileMenu Popover"
        onClick={(ev) => {
          if ((ev.target as HTMLElement).tagName === "A") {
            ev.currentTarget.hidePopover();
          }
        }}
      >
        <header className="Header Header--block">
          <Link className="Header-link" href="/" aria-label="go to Home">
            <GuvamFull />
          </Link>

          <nav className="Header-nav">
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
                <button
                  className="Button Button--icon Button--type-text"
                  onClick={() => {
                    ref.current?.togglePopover();
                  }}
                >
                  <XLg />
                </button>
              </li>
            </ul>
          </nav>
        </header>

        <div className="Layout-line" />

        <menu className="Header-mobileMenuList">
          <div className="SideMenu-menuSection">
            <div className="Collapse-content">
              <input id="menu-menu" type="checkbox" defaultChecked className="Util-hidden" />
              <ul>
                <li>
                  <ActiveLink className="SideMenu-menuItem" href="/">
                    Home
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink className="SideMenu-menuItem" isParent href="/docs">
                    Docs
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink className="SideMenu-menuItem" isParent href="/support">
                    Support
                  </ActiveLink>
                </li>
              </ul>
            </div>
          </div>

          <ul className="Header-nav--mobile">
            <li>
              <TutorialsLinks />
            </li>
            <li>
              <ComponentsLinks />
            </li>
          </ul>
        </menu>
      </div>
    </Popover>
  );
};
