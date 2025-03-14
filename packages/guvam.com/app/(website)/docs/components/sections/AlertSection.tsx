import type { FC } from "react";
import { ExclamationCircleFill, SignStopFill } from "react-bootstrap-icons";

import { Components } from "@/app/(website)/docs/components/Components";

export const AlertSection: FC = () => (
  <Components id="alert">
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
          <h2 className="Content-heading4">Ensure that these requirements are met</h2>
          <ul className="Content-list">
            <li>At least 10 characters (and up to 100 characters)</li>
            <li>At least one lowercase character</li>
            <li>Inclusion of at least one special character, e.g., ! @ # ?</li>
          </ul>
        </div>
      </div>
      <div className="Alert Alert--type-error">
        <div className="Content">
          <h2 className="Content-heading4">Ensure that these requirements are met</h2>
          <ul className="Content-list">
            <li>At least 10 characters (and up to 100 characters)</li>
            <li>At least one lowercase character</li>
            <li>Inclusion of at least one special character, e.g., ! @ # ?</li>
          </ul>
        </div>
      </div>
    </div>
  </Components>
);
