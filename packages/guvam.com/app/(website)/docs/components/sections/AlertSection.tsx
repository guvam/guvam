import type { FC } from "react";
import { ExclamationCircleFill, SignStopFill } from "react-bootstrap-icons";

import { ComponentBlock } from "@/components/ComponentBlock";

export const AlertSection: FC = () => (
  <ComponentBlock id="alert">
    <div className="List-stack">
      <div className="Alert Alert--type-info">
        Info alert! Change a few things up and try submitting again.
      </div>
      <div className="Alert Alert--type-info">
        Danger alert! Change a few things up and try submitting again.
      </div>
      <div className="Alert Alert--type-success">
        Success alert! Change a few things up and try submitting again.
      </div>
      <div className="Alert Alert--type-warning">
        Warning alert! Change a few things up and try submitting again.
      </div>
      <div className="Alert Alert--type-warning Alert--icon">
        <ExclamationCircleFill className="Alert-icon" />
        <div className="Content">
          Warning alert! Change a few things up and try submitting again.
        </div>
      </div>
      <div className="Alert Alert--type-error Alert--icon">
        <SignStopFill className="Alert-icon" />
        <div className="Content">
          Warning alert! Change a few things up and try submitting again.
        </div>
      </div>
      <div className="Alert Alert--type-info">
        <div className="Content">
          <h4>Ensure that these requirements are met</h4>
          <ul>
            <li>At least 10 characters (and up to 100 characters)</li>
            <li>At least one lowercase character</li>
            <li>Inclusion of at least one special character, e.g., ! @ # ?</li>
          </ul>
        </div>
      </div>
      <div className="Alert Alert--type-error">
        <div className="Content">
          <h4>Ensure that these requirements are met</h4>
          <ul>
            <li>At least 10 characters (and up to 100 characters)</li>
            <li>At least one lowercase character</li>
            <li>Inclusion of at least one special character, e.g., ! @ # ?</li>
          </ul>
        </div>
      </div>
    </div>
  </ComponentBlock>
);
