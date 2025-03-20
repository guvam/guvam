import { Menu, MenuItem, MenuSeparator, Popover } from "@guvam/components";
import type { FC } from "react";
import { MoonFill, PersonFill, SunFill } from "react-bootstrap-icons";

import { ComponentBlock } from "@/components/ComponentBlock";

export const DrawerSection: FC = () => (
  <ComponentBlock id="drawer">
    <Popover id="left" modal={true}>
      <button className="Button">Open Left Drawer</button>
      <menu className="Drawer Drawer--position-left">
        <TemplateMenu />
      </menu>
    </Popover>

    <Popover id="top" modal={true}>
      <button className="Button">Open Top Drawer</button>
      <menu className="Drawer Drawer--position-top">
        <TemplateMenu />
      </menu>
    </Popover>

    <Popover id="right" modal={true}>
      <button className="Button">Open Right Drawer</button>
      <menu className="Drawer Drawer--position-right">
        <TemplateMenu />
      </menu>
    </Popover>

    <Popover id="bottom" modal={true}>
      <button className="Button">Open Bottom Drawer</button>
      <menu className="Drawer Drawer--position-bottom">
        <TemplateMenu />
      </menu>
    </Popover>
  </ComponentBlock>
);

const TemplateMenu = () => (
  <Menu className="Menu">
    <MenuItem icon={<MoonFill />}>Profile</MenuItem>
    <MenuItem icon={<SunFill />} info="⌘+T">
      Back
    </MenuItem>
    <MenuItem>Reload</MenuItem>
    <MenuItem>Profile</MenuItem>
    <MenuSeparator />
    <MenuItem icon={<PersonFill />} disabled>
      More tools
    </MenuItem>
    <MenuItem>Info</MenuItem>
  </Menu>
);
