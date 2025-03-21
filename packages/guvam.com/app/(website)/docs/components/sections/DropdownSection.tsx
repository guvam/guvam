"use client";

import { Menu, MenuItem, MenuSeparator, Popover } from "@guvam/components";
import type { FC } from "react";
import { MoonFill, PersonFill, SunFill } from "react-bootstrap-icons";

import { ComponentBlock } from "@/components/ComponentBlock";

export const DropdownSection: FC = () => (
  <ComponentBlock id="dropdown">
    <Popover id="modal" modal data-selector="dropdown">
      <button className="Button">Open dropdown</button>
      <div className="Dropdown Dropdown-modal Dropdown--left">
        <Menu className="Menu Menu--wider">
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
      </div>
    </Popover>
  </ComponentBlock>
);
