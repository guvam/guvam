import type { FC } from "react";

import { ComponentBlock } from "@/components/ComponentBlock";

export const CollapseSection: FC = () => (
  <ComponentBlock id="collapse">
    <div className="List-stack">
      {[1, 2, 3, 4].map((x) => (
        <details className="Collapse" name="accordion" key={x}>
          <summary className="Collapse-action">Example {x}</summary>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
        </details>
      ))}
    </div>
  </ComponentBlock>
);
