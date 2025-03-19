"use client";

import "./Components.css";

import Link from "next/link";
import type { FC, ReactNode } from "react";

export const Components: FC<{ children: ReactNode; id: string }> = (props) => (
  <>
    <h3 className="Util--capitalize" id={props.id}>
      <Link className="Util-linkHash" href={`#${props.id}`}>
        {props.id}
      </Link>
    </h3>

    <div className="Components-container Content">{props.children}</div>
  </>
);
