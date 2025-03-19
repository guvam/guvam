import "./BlockExample.css";

import Link from "next/link";
import type { FC, ReactNode } from "react";

export const BlockExample: FC<{ children: ReactNode; id: string }> = (props) => (
  <>
    <h3 className="Util--capitalize" id={props.id}>
      <Link className="Util-linkHash" href={`#${props.id}`}>
        {props.id.replaceAll("-", " ")}
      </Link>
    </h3>
    <hr />
    <div className="Components-container">{props.children}</div>
  </>
);
