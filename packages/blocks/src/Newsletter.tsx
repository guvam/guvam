import { TwitterX } from "react-bootstrap-icons";

export const Newsletter = () => (
  <ul className="Grid">
    <li className="Content Grid--span-2">
      <h4>Subscribe to our newsletter</h4>
      <p>
        Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing velit quis. Duis tempor
        incididunt dolore.
      </p>
      <div className="List">
        <input className="Input" type="Text" placeholder="Enter your email" />
        <button className="Button">Subscribe</button>
      </div>
    </li>
    <li className="Grid--span-2">
      <TwitterX />
      <h4>Weekly articles</h4>
      <p>
        Non laboris consequat cupidatat laborum magna. Eiusmod non irure cupidatat duis commodo
        amet.
      </p>
    </li>
    <li className="Grid--span-2">
      <TwitterX />
      <h4>Weekly articles</h4>
      <p>
        Non laboris consequat cupidatat laborum magna. Eiusmod non irure cupidatat duis commodo
        amet.
      </p>
    </li>
  </ul>
);

export const NewsletterHorizontal = () => (
  <article className="Content">
    <h4>Subscribe to our newsletter</h4>
    <p>
      Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing velit quis. Duis tempor
      incididunt dolore.
    </p>
    <div className="List">
      <input className="Input" type="Text" placeholder="Enter your email" />
      <button className="Button">Subscribe</button>
    </div>
    <p>
      Here is our <a href="/">Privacy Policy</a>
    </p>
  </article>
);
