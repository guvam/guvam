import type { CSSProperties, FC, ReactElement } from "react";
import { cloneElement } from "react";

export const Popover: FC<{
  children: [ReactElement<HTMLButtonElement>, ReactElement<HTMLMenuElement>];
  id: string;
  modal?: boolean;
  open?: boolean;
}> = (props) => [
  cloneElement(props.children[0], {
    key: `popover-button-id-${props.id}`,
    id: `popover-button-id-${props.id}`,
    style: { anchorName: `--popover-id-${props.id}` },
    popoverTarget: `popover-id-${props.id}`,
    "aria-haspopup": "menu",
    "aria-expanded": props.open ?? false,
  } as never),
  cloneElement(props.children[1], {
    key: `popover-id-${props.id}`,
    id: `popover-id-${props.id}`,
    style: { positionAnchor: `--popover-id-${props.id}` } as CSSProperties,
    popover: "auto",
    "aria-modal": props.modal ?? false,
    "aria-labelledby": `popover-button-id-${props.id}`,
  } as never),
];
