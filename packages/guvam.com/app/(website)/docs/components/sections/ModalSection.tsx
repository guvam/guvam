"use client";

import { Modal, ModalTag } from "@guvam/components";
import type { FC } from "react";
import { GearFill, X } from "react-bootstrap-icons";

import { Components } from "@/app/(website)/docs/components/Components";

export const ModalSection: FC = () => (
  <Components id="modal">
    <TemplateModalSuccess />
    <TemplateModalForm />
  </Components>
);

const TemplateModalSuccess: FC = () => (
  <Modal>
    <ModalTag tag="button" command="dialog:open" className="Button Button--icon" type="submit">
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
      <div className="Modal-body">Body</div>
    </ModalTag>
  </Modal>
);

const TemplateModalForm: FC = () => (
  <Modal>
    <ModalTag tag="button" command="dialog:open" className="Button Button--icon" type="submit">
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
        <form className="Form Modal-body">
          <fieldset className="Form-section">
            <div className="Form-columnFull">
              <legend className="Heading-H2">Personal Information</legend>
              <p className="Text">Use a permanent address where you can receive mail.</p>
            </div>
            <label className="Form-columnHalf">
              <span className="Control-label">First name</span>
              <input type="text" autoComplete="given-name" className="Input" />
            </label>
            <label className="Form-columnHalf">
              <span className="Control-label">Last name</span>
              <input type="text" autoComplete="family-name" className="Input" />
            </label>
            <label className="Form-columnHalf">
              <span className="Control-label">Email address</span>
              <input type="email" autoComplete="email" className="Input" />
            </label>
            <label className="Form-columnHalf">
              <span className="Control-label">Phone number</span>
              <input type="tel" autoComplete="tel" className="Input" />
            </label>
          </fieldset>

          <div className="Form-columnFull">
            <button type="submit" className="Button">
              Save
            </button>
          </div>
        </form>
      </div>
    </ModalTag>
  </Modal>
);
