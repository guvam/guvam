import "./Partners.css";

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

export const PartnersSimple = () => (
  <section>
    <ul className="List Partners-grid">
      {logos.map((x, i) => (
        <li className="Partners" key={i}>
          {x}
        </li>
      ))}
    </ul>
  </section>
);

export const PartnersWithHeader = () => (
  <section className="Partners-colored Partners-centered List-stack">
    <hgroup>
      <h2 className="Content-heading2">Partners</h2>
      <p className="Content-text"> Lorem Ipsum is simply dummy text</p>
    </hgroup>
    <ul className="List">
      {logos.map((x, i) => (
        <li className="Partners Logo-bright" key={i}>
          {x}
        </li>
      ))}
    </ul>
  </section>
);
