import "./LayoutApp.css";

import Link from "next/link";
import { List, MoonFill, SunFill } from "react-bootstrap-icons";

import { ActiveLink } from "../../../../guvam.com/packages/guvam.com/components/ActiveLink";

export const LayoutApp = () => (
  <div className="Block-Template">
    <header className="Header">
      <Link className="Header-link" href="/packages/guvam.com/public" aria-label="go to Home">
        LOGO
      </Link>

      <nav className="Header-nav">
        <ul className="Header-menu" aria-label="main navigation">
          <li>
            <ActiveLink className="Header-navLink" activeClassName="Header-NavLink--Active" href="">
              Things
            </ActiveLink>
          </li>
          <li>
            <ActiveLink className="Header-navLink" activeClassName="Header-NavLink--Active" href="">
              Stuff
            </ActiveLink>
          </li>
          <li>
            <ActiveLink
              className="Header-navLink"
              isParent
              activeClassName="Header-NavLink--Active"
              href=""
            >
              Content
            </ActiveLink>
          </li>
          <li>
            <ActiveLink
              className="Header-navLink"
              isParent
              activeClassName="Header-NavLink--Active"
              href=""
            >
              Content
            </ActiveLink>
          </li>
        </ul>
        <div className="Header-navDivider" role="separator"></div>
        <ul>
          <li>
            <label>
              <span className="Button Button--icon Button--type-text">
                <MoonFill className="Header-iconDark" />
                <SunFill className="Header-iconLight" />
              </span>
            </label>
          </li>
        </ul>
      </nav>
    </header>
    <div className="Blocks-Content"></div>
  </div>
);

export const LayoutApp1 = () => (
  <div className="Block-Template">
    <header className="Header">
      <Link className="Header-link" href="/packages/guvam.com/public" aria-label="go to Home">
        LOGO
      </Link>

      <nav className="Header-nav">
        <ul className="Header-menu" aria-label="main navigation">
          <li>
            <ActiveLink className="Header-navLink" activeClassName="Header-NavLink--Active" href="">
              Things
            </ActiveLink>
          </li>
          <li>
            <ActiveLink className="Header-navLink" activeClassName="Header-NavLink--Active" href="">
              Stuff
            </ActiveLink>
          </li>
          <li>
            <ActiveLink
              className="Header-navLink"
              isParent
              activeClassName="Header-NavLink--Active"
              href=""
            >
              Content
            </ActiveLink>
          </li>
        </ul>
        <div className="Header-navDivider" role="separator"></div>
      </nav>
    </header>
    <div className="Blocks-Content-Wrapper">
      <div className="SideMenu-menu">
        <a href="#" className="Menu-Link">
          Documents
        </a>
        <a href="#" className="Menu-Link">
          Teams
        </a>
        <a href="#" className="Menu-Link">
          Reports
        </a>{" "}
        <a href="#" className="Menu-Link">
          Reports
        </a>{" "}
        <a href="#" className="Menu-Link">
          Reports
        </a>{" "}
        <a href="#" className="Menu-Link">
          Reports
        </a>
      </div>
      <div className="Blocks-Content"></div>
    </div>
  </div>
);

export const LayoutApp2 = () => (
  <div className="Block-Template">
    <header className="Header">
      <Link className="Header-link" href="/packages/guvam.com/public" aria-label="go to Home">
        LOGO
      </Link>

      <nav className="Header-nav">
        <ul className="Header-menu" aria-label="main navigation">
          <li>
            <ActiveLink className="Header-navLink" activeClassName="Header-NavLink--Active" href="">
              Things
            </ActiveLink>
          </li>
          <li>
            <ActiveLink className="Header-navLink" activeClassName="Header-NavLink--Active" href="">
              Stuff
            </ActiveLink>
          </li>
          <li>
            <ActiveLink
              className="Header-navLink"
              isParent
              activeClassName="Header-NavLink--Active"
              href=""
            >
              Content
            </ActiveLink>
          </li>
        </ul>
        <div className="Header-navDivider" role="separator"></div>
        <ul>
          <li>
            <label htmlFor="menu-toggle" className="Button Button--icon Button--type-text">
              <List />
            </label>
          </li>
        </ul>
      </nav>
    </header>
    <div className="Blocks-Content-Wrapper">
      <input type="checkbox" id="menu-toggle" className="Menu-Toggle" />
      <div className="SideMenu-menu SideMenu-Menu--sliding">
        <a href="#" className="Menu-Link">
          Documents
        </a>
        <a href="#" className="Menu-Link">
          Teams
        </a>
        <a href="#" className="Menu-Link">
          Reports
        </a>
        <a href="#" className="Menu-Link">
          Reports
        </a>
        <a href="#" className="Menu-Link">
          Reports
        </a>
        <a href="#" className="Menu-Link">
          Reports
        </a>
      </div>
      <div className="Blocks-Content"></div>
    </div>
  </div>
);
