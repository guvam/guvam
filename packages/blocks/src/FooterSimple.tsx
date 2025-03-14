import "./FooterSimple.css";

import { Github, Linkedin } from "react-bootstrap-icons";

export const FooterSimple = () => (
  <footer className="FooterSimple">
    <a href="https://www.linkedin.com/company/105405022/" target="_blank" rel="noopener noreferrer">
      <Linkedin />
    </a>
    <a href="https://github.com/guvam/guvam" target="_blank" rel="noopener noreferrer">
      <Github />
    </a>
  </footer>
);
