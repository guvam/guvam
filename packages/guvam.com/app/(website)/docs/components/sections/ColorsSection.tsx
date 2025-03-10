import "./ColorsSection.css";

import type { FC } from "react";

import { Components } from "@/app/(website)/docs/components/Components";

const VARS1 = ["--primary", "--secondary", "--accent"];
const VARS2 = ["--info", "--success", "--warning", "--error"];

export const ColorsSection: FC = () => (
  <Components id="colors">
    <h3 className="Content-heading3">Brand</h3>
    <ColorBlock colors={VARS1} />
    <h3 className="Content-heading3">State</h3>
    <ColorBlock colors={VARS2} />
  </Components>
);

const ColorBlock: FC<{ colors: string[] }> = (props) => (
  <div className="ColorsSection">
    {props.colors.map((x) => (
      <div
        key={x}
        style={
          {
            "--ColorSection-color": `var(${x})`,
            "--ColorSection-colorText": `var(${x}Text)`,
            "--ColorSection-colorBlock": `var(${x}Block)`,
            "--ColorSection-colorBlockText": `var(${x}BlockText)`,
            "--ColorSection-colorBorder": `var(${x}Border)`,
          } as never
        }
      >
        <div className="ColorsSection-item ColorsSection-itemMain">{x}</div>
        <div className="ColorsSection-item ColorsSection-itemText">{x}Text</div>
        <div className="ColorsSection-item ColorsSection-itemBlock">{x}Block</div>
        <div className="ColorsSection-item ColorsSection-itemBlockText">{x}BlockText</div>
        <div className="ColorsSection-item ColorsSection-itemBorder">{x}Border</div>
      </div>
    ))}
  </div>
);
