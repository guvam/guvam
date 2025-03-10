import Link from "next/link";
import { ArrowRight } from "react-bootstrap-icons";

export default function Page() {
  return (
    <section className="Layout-section">
      <div className="Layout-hero ">
        <div className="Content">
          <h2 className="Content-heading2">Something&#39;s Missing</h2>
          <p className="Content-text">404</p>
          <p className="Content-text">
            The page you&#39;re looking for is missing or doesn&#39;t exist.
          </p>
          <Link className="Button" href="/">
            Back to main page
            <ArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}
