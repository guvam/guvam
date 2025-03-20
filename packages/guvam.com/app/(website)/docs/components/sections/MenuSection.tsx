import { Menu, MenuItem, MenuSeparator } from "@guvam/components";
import type { FC } from "react";
import { MoonFill, PersonFill, SunFill } from "react-bootstrap-icons";

import { ComponentBlock } from "@/components/ComponentBlock";

export const MenuSection: FC = () => (
  <ComponentBlock id="menu">
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
  </ComponentBlock>
);
