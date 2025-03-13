import "./SettingsAction.css";

import { Modal, ModalTag } from "@guvam/components";
import type { FC } from "react";
import { GearFill, X } from "react-bootstrap-icons";

import { SettingsForm } from "@/components/HeaderSettings";
import type { ThemeSettings } from "@/components/Theme";

export const SettingsAction: FC<{ themeSettings: ThemeSettings }> = (props) => (
  <Modal>
    <ModalTag
      tag="button"
      command="dialog:open"
      className="Button Button--icon SettingAction"
      type="submit"
    >
      <GearFill />
    </ModalTag>
    <ModalTag tag="dialog" command="dialog:body" className="Modal">
      <div className="Modal-heading">
        Settings
        <ModalTag
          tag="button"
          command="dialog:close"
          className="Button Button--icon Button--type-text"
          type="submit"
        >
          <X />
        </ModalTag>
      </div>
      <div className="Modal-close"></div>
      <div className="Modal-body">
        <SettingsForm themeSettings={props.themeSettings} />
      </div>
    </ModalTag>
  </Modal>
);
