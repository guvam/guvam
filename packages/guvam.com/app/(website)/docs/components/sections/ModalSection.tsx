"use client";
import { Modal } from "@guvam/components";
import type { FC } from "react";
import { useState } from "react";
import { Check, X } from "react-bootstrap-icons";

import { Components } from "@/app/(website)/docs/components/Components";

export const ModalSection: FC = () => (
  <Components id="modal">
    <TemplateModalFailure />
    <TemplateModalSuccess />
    <TemplateModalForm />
  </Components>
);

const TemplateModalSuccess: FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <button
        className="Button"
        onClick={() => {
          setModalOpen(!modalOpen);
        }}
      >
        Open modal
      </button>
      <Modal
        isOpen={modalOpen}
        onClose={() => {
          setModalOpen(false);
        }}
        closeOnEscape
        closeOnClickAway
      >
        <div className="Modal-heading ">
          <div className="List">
            <Check size={32} />
            Action Successful
          </div>
        </div>
        <div className="Modal-body">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore.
        </div>
        <div className="Modal-actions Modal-Background--Highlight">
          <button
            className="Button"
            onClick={() => {
              setModalOpen(false);
            }}
          >
            Confirm
          </button>
          <button
            className="Button Button--type-text"
            onClick={() => {
              setModalOpen(false);
            }}
          >
            Cancel
          </button>
        </div>
      </Modal>
    </div>
  );
};

const TemplateModalFailure: FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <button
        className="Button"
        onClick={() => {
          setModalOpen(!modalOpen);
        }}
      >
        Open modal
      </button>
      <Modal
        isOpen={modalOpen}
        onClose={() => {
          setModalOpen(false);
        }}
        closeOnEscape
        closeOnClickAway
      >
        <div className="Modal-heading Modal--content-center">Action was unsuccessful</div>
        <div className="Modal-actions Modal--content-center">
          <button
            className="Button"
            onClick={() => {
              setModalOpen(false);
            }}
          >
            Try Again
          </button>
        </div>
      </Modal>
    </div>
  );
};

const TemplateModalForm: FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <button
        className="Button"
        onClick={() => {
          setModalOpen(!modalOpen);
        }}
      >
        Authenticate
      </button>
      <Modal
        isOpen={modalOpen}
        onClose={() => {
          setModalOpen(false);
        }}
        closeOnEscape
      >
        <div className="Modal-heading">
          <h2 className="Content-heading3">Authentication</h2>
          <button
            className="Button Button--icon Button--type-text"
            onClick={() => setModalOpen(false)}
          >
            <X />
          </button>
        </div>
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
      </Modal>
    </div>
  );
};
