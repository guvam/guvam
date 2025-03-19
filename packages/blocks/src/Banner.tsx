import "./Banner.css";

import { XLg } from "react-bootstrap-icons";

export const Banner = () => (
  <div className="Banner">
    <div>Lorem Ipsum is simply dummy text</div>
    <button className="Button Button--icon">
      <XLg />
    </button>
  </div>
);

export const BannerMuted = () => (
  <div className="Banner Banner-muted">
    <div>Lorem Ipsum is simply dummy text</div>
    <button className="Button Button--icon">
      <XLg />
    </button>
  </div>
);
export const BannerGradient = () => (
  <div className="Banner Banner-gradient">
    <div>Lorem Ipsum is simply dummy text</div>
    <button className="Button">Continue</button>
  </div>
);
