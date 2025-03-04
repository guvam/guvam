import "./BottomNavigation.css";

import Link from "next/link";
import type { FC } from "react";
import { ArrowLeft, ArrowRight } from "react-bootstrap-icons";

type Link = {
  url: string;
  title: string;
};

export const BottomNavigation: FC<{ previous?: Link; next?: Link }> = (props) => (
  <div className="BottomNavigation">
    {props.previous ? (
      <Link
        href={props.previous.url}
        className="BottomNavigation-link BottomNavigation-linkPrevious"
      >
        <span className="BottomNavigation-linkLabel">Previous</span>
        <span className="BottomNavigation-linkTitle">
          <ArrowLeft />
          {props.previous.title}
        </span>
      </Link>
    ) : (
      <div />
    )}
    {props.next ? (
      <Link href={props.next.url} className="BottomNavigation-link BottomNavigation-linkNext">
        <span className="BottomNavigation-linkLabel">Next</span>
        <span className="BottomNavigation-linkTitle">
          {props.next.title} <ArrowRight />
        </span>
      </Link>
    ) : (
      <div />
    )}
  </div>
);
