import "./ComponentBlock.css";

import Link from "next/link";
import type { FC, ReactNode } from "react";

export const ComponentBlock: FC<{ children: ReactNode; id: string }> = (props) => (
  <>
    <h3 className="Util--capitalize" id={props.id}>
      <Link className="Util-linkHash" href={`#${props.id}`}>
        {props.id.replaceAll("-", " ")}
      </Link>
    </h3>

    <div className="ComponentBlock-container">{props.children}</div>
  </>
);
