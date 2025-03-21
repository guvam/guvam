import { BoxArrowUpRight } from "react-bootstrap-icons";

import { ActiveLink } from "@/components/ActiveLink";

export const TutorialsLinks = () => {
  return (
    <div className="SideMenu-menuSection">
      <label htmlFor="menu-tutorials" className="SideMenu-menuHeading">
        Tutorials
      </label>
      <ul className="Collapse-content">
        <input type="checkbox" hidden id="menu-tutorials" defaultChecked />
        <li>
          <ActiveLink className="SideMenu-menuItem" href="/docs/tutorials/getting-started">
            Getting Started
          </ActiveLink>
        </li>
        <li>
          <ActiveLink className="SideMenu-menuItem" href="/docs/tutorials/roadmap">
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
