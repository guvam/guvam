import "./Banner.css";

import { XLg } from "react-bootstrap-icons";

export const Banner = () => (
  <div className="Banner">
    <span className="Content--bold">Banner Title</span>
    <span className="Content-text">Lorem Ipsum is simply dummy text</span>
    <button className="Button Button--icon">
      <XLg />
    </button>
  </div>
);

export const BannerMuted = () => (
  <div className="Banner Banner-muted">
    <span className="Content--bold">Banner Title</span>
    <div>Lorem Ipsum is simply dummy text</div>
    <button className="Button Button--icon">
      <XLg />
    </button>
  </div>
);
export const BannerGradient = () => (
  <div className="Banner Banner-gradient">
    <span className="Content--bold">Banner Title</span>
    <div>Lorem Ipsum is simply dummy text</div>
    <button className="Button">Continue</button>
  </div>
);
