import type { FC } from "react";
import { ChevronRight, ThreeDots } from "react-bootstrap-icons";

import { Components } from "@/app/docs/components/Components";

export const BreadcrumbsSection: FC = () => (
  <Components id="breadcrumbs">
    <nav>
      <ul className="Breadcrumb">
        <li>
          <button className="Breadcrumb-action">Home</button>
        </li>
        <li className="Breadcrumb-separator">
          <ChevronRight />
        </li>
        <li>
          <button className="Breadcrumb-action" aria-label="Collapsed">
            <ThreeDots />
          </button>
        </li>
        <li className="Breadcrumb-separator">
          <ChevronRight />
        </li>
        <li>
          <button className="Breadcrumb-action">Navigation</button>
        </li>
        <li className="Breadcrumb-separator">
          <ChevronRight />
        </li>
        <li>
          <button className="Breadcrumb-action Breadcrumb-action--active">Active</button>
        </li>
      </ul>
    </nav>
  </Components>
);
