import { ActiveLink } from "@/components/ActiveLink";

export const ComponentsLinks = () => {
  return (
    <div className="SideMenu-menuSection">
      <label htmlFor="menu-components" className="SideMenu-menuHeading">
        Components
      </label>

      <div className="Collapse-content">
        <input type="checkbox" hidden id="menu-components" defaultChecked />

        <h3 className="SideMenu-menuSubHeading">Display</h3>
        <ul>
          <li>
            <ActiveLink className="SideMenu-menuItem" href="/docs/components#content">
              Content
            </ActiveLink>
          </li>
          <li>
            <ActiveLink className="SideMenu-menuItem" href="/docs/components#avatar">
              Avatar
            </ActiveLink>
          </li>
          <li>
            <ActiveLink className="SideMenu-menuItem" href="/docs/components#badge">
              Badge
            </ActiveLink>
          </li>
          <li>
            <ActiveLink className="SideMenu-menuItem" href="/docs/components#card">
              Card
            </ActiveLink>
          </li>
          <li>
            <ActiveLink className="SideMenu-menuItem" href="/docs/components#chip">
              Chip
            </ActiveLink>
          </li>
          <li>
            <ActiveLink className="SideMenu-menuItem" href="/docs/components#collapse">
              Collapse
            </ActiveLink>
          </li>
          <li>
            <ActiveLink className="SideMenu-menuItem" href="/docs/components#tooltip">
              Tooltip
            </ActiveLink>
          </li>
        </ul>

        <h3 className="SideMenu-menuSubHeading">feedback</h3>
        <ul>
          <li>
            <ActiveLink className="SideMenu-menuItem" href="/docs/components#alert">
              Alert
            </ActiveLink>
          </li>
          <li>
            <ActiveLink className="SideMenu-menuItem" href="/docs/components#modal">
              Modal
            </ActiveLink>
          </li>
          <li>
            <ActiveLink className="SideMenu-menuItem" href="/docs/components#progress">
              Progress
            </ActiveLink>
          </li>
        </ul>

        <h3 className="SideMenu-menuSubHeading">input</h3>
        <ul>
          <li>
            <ActiveLink className="SideMenu-menuItem" href="/docs/components#button">
              Button
            </ActiveLink>
          </li>
          <li>
            <ActiveLink className="SideMenu-menuItem" href="/docs/components#control">
              Control
            </ActiveLink>
          </li>
          <li>
            <ActiveLink className="SideMenu-menuItem" href="/docs/components#input">
              Input
            </ActiveLink>
          </li>
          <li>
            <ActiveLink className="SideMenu-menuItem" href="/docs/components#textarea">
              Textarea
            </ActiveLink>
          </li>
          <li>
            <ActiveLink className="SideMenu-menuItem" href="/docs/components#select">
              Select
            </ActiveLink>
          </li>
          <li>
            <ActiveLink className="SideMenu-menuItem" href="/docs/components#switch">
              Switch
            </ActiveLink>
          </li>
          <li>
            <ActiveLink className="SideMenu-menuItem" href="/docs/components#checkbox">
              Checkbox
            </ActiveLink>
          </li>
          <li>
            <ActiveLink className="SideMenu-menuItem" href="/docs/components#radio">
              Radio
            </ActiveLink>
          </li>
          <li>
            <ActiveLink className="SideMenu-menuItem" href="/docs/components#slider">
              Slider
            </ActiveLink>
          </li>
          <li>
            <ActiveLink className="SideMenu-menuItem" href="/docs/components#rating">
              Rating
            </ActiveLink>
          </li>
        </ul>

        <h3 className="SideMenu-menuSubHeading">navigation</h3>
        <ul>
          <li>
            <ActiveLink className="SideMenu-menuItem" href="/docs/components#breadcrumbs">
              Breadcrumbs
            </ActiveLink>
          </li>
          <li>
            <ActiveLink className="SideMenu-menuItem" href="/docs/components#drawer">
              Drawer
            </ActiveLink>
          </li>
          <li>
            <ActiveLink className="SideMenu-menuItem" href="/docs/components#dropdown">
              Dropdown
            </ActiveLink>
          </li>
          <li>
            <ActiveLink className="SideMenu-menuItem" href="/docs/components#menu">
              Menu
            </ActiveLink>
          </li>
          <li>
            <ActiveLink className="SideMenu-menuItem" href="/docs/components#pagination">
              Pagination
            </ActiveLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
