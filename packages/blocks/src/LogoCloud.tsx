import "./LogoCloud.css";

import HookLogo from "./logos/hook.svg";
import PublicisLogo from "./logos/publicis.svg";
import PulseLogo from "./logos/pulse.svg";
import SwayLogo from "./logos/sway.svg";
import ZealLogo from "./logos/zeal.svg";

const logos = [
  <HookLogo key={1} />,
  <PublicisLogo key={2} />,
  <PulseLogo key={3} />,
  <SwayLogo key={4} />,
  <ZealLogo key={5} />,
];

export const LogoCloud = () => (
  <section className="Logo-centered List-stack">
    <hgroup className="List-stack">
      <h1 className="Content-title">Partners</h1>
      <p className="Content-titleDescription">Lorem Ipsum is simply dummy text</p>
    </hgroup>
    <ul className="Logo-grid Grid Grid--gapBig">
      {logos.map((x, i) => (
        <li className="Logo" key={i}>
          {x}
        </li>
      ))}
    </ul>
  </section>
);

export const LogoCloud2 = () => (
  <section className="Logo-colored Logo-centered List-stack">
    <hgroup>
      <h2 className="Content-heading2">Partners</h2>
      <p className="Content-text"> Lorem Ipsum is simply dummy text</p>
    </hgroup>
    <ul className="List">
      {logos.map((x, i) => (
        <li className="Logo Logo-bright" key={i}>
          {x}
        </li>
      ))}
    </ul>
  </section>
);

export const LogoCloud3 = () => (
  <section className="Grid">
    <hgroup>
      <h2 className="Content-heading2">Partners</h2>
      <p className="Content--bold"> Lorem Ipsum is simply dummy text</p>
    </hgroup>
    <ul className="Grid Grid--twoTable">
      {logos.map((x, i) => (
        <li className="Logo " key={i}>
          {x}
        </li>
      ))}
    </ul>
  </section>
);
