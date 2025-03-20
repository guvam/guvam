import type { FC } from "react";
import { ChevronLeft, ChevronRight, ThreeDots } from "react-bootstrap-icons";

import { ComponentBlock } from "@/components/ComponentBlock";

export const PaginationSection: FC = () => (
  <ComponentBlock id="pagination">
    <nav>
      <ul className="Pagination">
        <li>
          <button className="Pagination-action">
            <ChevronLeft size={12} />
            Last Page
          </button>
        </li>
        <li>
          <button className="Pagination-action">1</button>
        </li>
        <li>
          <button className="Pagination-action">2</button>
        </li>
        <li>
          <button className="Pagination-action">3</button>
        </li>
        <li>
          <span className="Pagination-action">
            <ThreeDots />
          </span>
        </li>
        <li>
          <button className="Pagination-action">
            Next Page
            <ChevronRight size={12} />
          </button>
        </li>
      </ul>
    </nav>
  </ComponentBlock>
);
