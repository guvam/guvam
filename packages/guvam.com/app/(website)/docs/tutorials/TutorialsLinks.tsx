import { BoxArrowUpRight } from "react-bootstrap-icons";

import { ActiveLink } from "@/components/ActiveLink";

export const TutorialsLinks = () => {
  return (
    <div className="SideMenu-menuSection">
      <h2>
        <label htmlFor="menu-tutorials" className="SideMenu-menuHeading">
          Tutorials
        </label>
      </h2>
      <ul className="Collapse-content">
        <input type="checkbox" hidden id="menu-tutorials" defaultChecked />
        <li>
          <ActiveLink
            className="SideMenu-menuItem"
            href="/packages/guvam.com/app/(website)/docs/tutorials/getting-started"
          >
            Getting Started
          </ActiveLink>
        </li>
        <li>
          <ActiveLink
            className="SideMenu-menuItem"
            href="/packages/guvam.com/app/(website)/docs/tutorials/roadmap"
          >
            Roadmap
          </ActiveLink>
        </li>
        <li>
          <ActiveLink className="SideMenu-menuItem" href="/support">
            Support <BoxArrowUpRight size={10} />
          </ActiveLink>
        </li>
      </ul>
    </div>
  );
};
