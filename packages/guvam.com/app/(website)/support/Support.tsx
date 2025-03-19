import "./Support.css";

import Link from "next/link";
import type { FC } from "react";
import { EnvelopeFill } from "react-bootstrap-icons";

export const Support: FC = () => {
  return (
    <section className="Layout-section">
      <div className="Layout-sectionContent">
        <div className="Grid Content">
          <div className="Card Grid--span-3 Card--muted">
            <div className="Card-content Content">
              <h2>Community Support</h2>
              <p>Become part of our community!</p>
              <p>
                <Link className="Support-link" href="https://github.com/guvam/guvam/discussions">
                  Talk to the community
                </Link>
              </p>
              <p>
                <Link className="Support-link" href="https://github.com/guvam/guvam/issues">
                  Report any issues
                </Link>
              </p>
            </div>
          </div>
          <div className="Card Grid--span-3 Card--muted">
            <div className="Card-content Content">
              <h2>Professional Support</h2>
              <p>
                Have any questions or need assistance? Send an email, and we&apos;ll get back to you
                as soon as possible.
              </p>
              <p>
                <Link className="Support-link" href="mailto:hello@guvam.com">
                  <EnvelopeFill /> Talk to us
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
