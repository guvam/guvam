import { TwitterX } from "react-bootstrap-icons";

export const Newsletter = () => (
  <ul className="List-stack">
    <li className="Content">
      <h1 className="Content-heading4">Subscribe to our newsletter</h1>
      <p className="Content-text">
        Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing velit quis. Duis tempor
        incididunt dolore.
      </p>
      <div className="List">
        <input className="Input" type="Text" placeholder="Enter your email" />
        <button className="Button">Subscribe</button>
      </div>
    </li>
    <li>
      <TwitterX />
      <h3 className="Content-heading4">Weekly articles</h3>
      <p className="Content-text">
        Non laboris consequat cupidatat laborum magna. Eiusmod non irure cupidatat duis commodo
        amet.
      </p>
    </li>
    <li>
      <TwitterX />
      <h3 className="Content-heading4">Weekly articles</h3>
      <p className="Content-text">
        Non laboris consequat cupidatat laborum magna. Eiusmod non irure cupidatat duis commodo
        amet.
      </p>
    </li>
  </ul>
);

export const NewsletterHorizontal = () => (
  <article className="Content">
    <h1 className="Content-heading4">Subscribe to our newsletter</h1>
    <p className="Content-text">
      Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing velit quis. Duis tempor
      incididunt dolore.
    </p>
    <div className="List">
      <input className="Input" type="Text" placeholder="Enter your email" />
      <button className="Button">Subscribe</button>
    </div>
    <p className="Content-text">
      Here is our <a className="Content-link">Privacy Policy</a>
    </p>
  </article>
);
