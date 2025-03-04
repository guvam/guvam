import Link from "next/link";
import { ArrowRight } from "react-bootstrap-icons";

export default function Page() {
  return (
    <section className="Layout-section">
      <div className="Layout-hero">
        <span className="Text">404</span>
        <h2 className="Content-heading2">Something&#39;s Missing.</h2>
        <p className="Text-Muted">
          The page you&#39;re looking for is missing or doesn&#39;t exist.
        </p>
        <Link className="Link" href="/">
          Back to main page
          <ArrowRight />
        </Link>
      </div>
    </section>
  );
}
