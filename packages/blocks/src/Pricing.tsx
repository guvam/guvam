import { Check, X } from "react-bootstrap-icons";

export const PricingTable = () => (
  <table>
    <thead>
      <tr className="Pricing-Divider">
        <th>
          <h2>Pricing</h2>
        </th>
        <th className="Content">
          <p>Basic</p>
          <p>
            <b>$12</b>
            <span> / </span>
            <mark>month</mark>
          </p>
          <button className="Button">Free Trial</button>
        </th>
        <th className="Content">
          <p>Pro</p>
          <p>
            <b>$24</b>
            <span> / </span>
            <mark>month</mark>
          </p>
          <button className="Button">Buy Now</button>
        </th>
        <th className="Content">
          <p>Company</p>
          <p>
            <b>$36</b>
            <span> / </span>
            <mark>month</mark>
          </p>
          <button className="Button Button--type-text">Contact Us</button>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr className="Pricing-Divider">
        <td>Product</td>
        <td>
          <Check className="Pricing-Icon" />
        </td>
        <td>
          <Check className="Pricing-Icon" />
        </td>
        <td>
          <Check className="Pricing-Icon" />
        </td>
      </tr>
      <tr className="Pricing-Divider">
        <td>Arcane conductor</td>
        <td>
          <Check className="Pricing-Icon" />
        </td>
        <td>
          <Check className="Pricing-Icon" />
        </td>
        <td>
          <Check className="Pricing-Icon" />
        </td>
      </tr>
      <tr className="Pricing-Divider">
        <td>Wireless Fan</td>
        <td>
          <X className="Pricing-Icon" />
        </td>
        <td>
          <Check className="Pricing-Icon" />
        </td>
        <td>
          <Check className="Pricing-Icon" />
        </td>
      </tr>
      <tr className="Pricing-Divider">
        <td>Vital sensor</td>
        <td>
          <X className="Pricing-Icon" />
        </td>
        <td>
          <Check className="Pricing-Icon" />
        </td>
        <td>
          <Check className="Pricing-Icon" />
        </td>
      </tr>
      <tr className="Pricing-Divider">
        <td>Wireless Fan</td>
        <td>
          <X className="Pricing-Icon" />
        </td>
        <td>
          <X className="Pricing-Icon" />
        </td>
        <td>
          <Check className="Pricing-Icon" />
        </td>
      </tr>
      <tr className="Pricing-Divider">
        <td>Wireless Fans</td>
        <td>
          <X className="Pricing-Icon" />
        </td>
        <td>
          <X className="Pricing-Icon" />
        </td>
        <td>
          <Check className="Pricing-Icon" />
        </td>
      </tr>
      <tr className="Pricing-Divider">
        <td>Files</td>
        <td>
          <mark>up to </mark>
          <span> 5 </span>
          <mark> files </mark>
        </td>
        <td>
          <mark>up to</mark>
          <span> 15 </span>
          <mark>files</mark>
        </td>
        <td>Unlimited</td>
      </tr>
    </tbody>
  </table>
);

export const PricingAddition = () => (
  <section className="Card Card--muted">
    <div className="Card-content">
      <div>
        <h3>Additional Content</h3>
        <p>Everything included The perfect plan if you are just getting started with our product</p>
      </div>
      <button className="Button">Additional Options</button>
    </div>
  </section>
);

export const PricingSection = () => (
  <section>
    <hgroup className="Content">
      <h1>Create Things</h1>
      <p>
        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
        Elit sunt amet fugiat veniam occaecat.
      </p>
    </hgroup>
    <ul className="Grid Grid--column-3">
      {[1, 2, 3].map((x) => (
        <li className="Card Card--muted" key={x}>
          <div className="Card-content Content">
            <h3>Hobby</h3>
            <p>Everything you need to Start</p>
            <p>
              <h1>$29</h1>
              <span className="Text-Muted">month</span>
            </p>
            <p>The perfect plan if you are just getting started with our product</p>
            <ul>
              <li>25 products</li>
              <li>Up to 10,000 active users at a time</li>
              <li>Advanced Analytics</li>
              <li>Quarterly workshops</li>
              <li>Single sign-on (SSO)</li>
              <li>Priority phone support</li>
            </ul>
            <button className="Button">Get Started Today</button>
          </div>
        </li>
      ))}
    </ul>
  </section>
);

export const PricingSectionBold = () => (
  <section>
    <hgroup className="Content">
      <h1>Create Things</h1>
      <p>
        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
        Elit sunt amet fugiat veniam occaecat.
      </p>
    </hgroup>
    <ul className="Grid Grid--column-3">
      {[1, 2, 3].map((x) => (
        <li className="Card Card--muted" key={x}>
          <div className="Card-content Content">
            <h3>Hobby</h3>
            <p>Everything you need to Start</p>
            <p>
              <h1>$29</h1>
              <span className="Text-Muted">month</span>
            </p>
          </div>
          <div className="Card-content Content">
            <p>The perfect plan if you are just getting started with our product</p>
            <ul>
              <li>25 products</li>
              <li>Up to 10,000 active users at a time</li>
              <li>Advanced Analytics</li>
              <li>Quarterly workshops</li>
              <li>Single sign-on (SSO)</li>
              <li>Priority phone support</li>
            </ul>
            <button className="Button">Get Started Today</button>
          </div>
        </li>
      ))}
    </ul>
  </section>
);
