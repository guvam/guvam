import { TwitterX } from "react-bootstrap-icons";

export const Newsletter = () => (
  <ul className="Grid">
    <li className="Content Grid--span-2">
      <h1 className="Content-heading4">Subscribe to our newsletter</h1>
      <p className="Content-text">
        Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing velit quis. Duis tempor
        incididunt dolore.
      </p>
      <div className="List">
        <div className="Input">
          <input type="Text" placeholder="Enter your email" />
        </div>
        <button className="Button">Subscribe</button>
      </div>
    </li>
    <li className="Grid--span-2">
      <TwitterX />
      <h3 className="Content-heading4">Weekly articles</h3>
      <p className="Content-text">
        Non laboris consequat cupidatat laborum magna. Eiusmod non irure cupidatat duis commodo
        amet.
      </p>
    </li>
    <li className="Grid--span-2">
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
      <div className="Input">
        <input type="Text" placeholder="Enter your email" />
      </div>
      <button className="Button">Subscribe</button>
    </div>
    <p className="Content-text">
      Here is our <a className="Content-link">Privacy Policy</a>
    </p>
  </article>
);
