import { BlogCards } from "@guvam/blocks/src/Blog";
import { HeroSplit } from "@guvam/blocks/src/Hero";
import { PartnersSimple } from "@guvam/blocks/src/Partners";
import { Portfolio } from "@guvam/blocks/src/Portfolio";
import { Questions } from "@guvam/blocks/src/Questions";
import { ServicesGrid } from "@guvam/blocks/src/Services";

export default function Page() {
  return (
    <>
      <div className="Layout-background">
        <section className="Layout-section">
          <div className="Layout-sectionContent">
            <HeroSplit />
          </div>
        </section>
      </div>

      <section className="Layout-section">
        <div className="Layout-sectionContent">
          <PartnersSimple />
        </div>
      </section>

      <section className="Layout-section">
        <div className="Layout-sectionContent">
          <ServicesGrid />
        </div>
      </section>

      <div className="Layout-background">
        <section className="Layout-section">
          <div className="Layout-sectionContent">
            <BlogCards />
          </div>
        </section>
      </div>

      <section className="Layout-section">
        <div className="Layout-sectionContent">
          <Questions />
        </div>
      </section>

      <section className="Layout-section">
        <div className="Layout-sectionContent">
          <Portfolio />
        </div>
      </section>
    </>
  );
}
