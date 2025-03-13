import "./HeaderNavigation.css";

import type { FC } from "react";

export const HeaderNavigation: FC = () => (
  <nav>
    <ul className="HeaderNavigation" aria-label="main navigation">
      <li>
        <a className="HeaderNavigation-link" href="/">
          Home
        </a>
      </li>
      <li>
        <a className="HeaderNavigation-link" href="/docs">
          Docs
        </a>
      </li>
      <li>
        <a className="HeaderNavigation-link" href="/support">
          Support
        </a>
      </li>
    </ul>
    {/*<button className="Button Button--icon Button--type-text">
      <List />
    </button>*/}
  </nav>
);
