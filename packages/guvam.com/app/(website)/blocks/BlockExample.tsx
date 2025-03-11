import "./BlockExample.css";

import Link from "next/link";
import type { FC, ReactNode } from "react";

export const BlockExample: FC<{ children: ReactNode; id: string }> = (props) => (
  <>
    <h3 className="Content-heading3 Content--capitalize" id={props.id}>
      <Link className="Content-linkHash" href={`#${props.id}`}>
        {props.id.replaceAll("-", " ")}
      </Link>
    </h3>
    <hr className="Content-divider" />
    <div className="Components-container">{props.children}</div>
  </>
);
