import { HeroSplit } from "@guvam/blocks/src/Hero";
import { PartnersSimple } from "@guvam/blocks/src/Partners";
import { Questions } from "@guvam/blocks/src/Questions";

export default function Page() {
  return (
    <>
      <section className="Layout-section">
        <div className="Layout-sectionContent">
          <HeroSplit />
        </div>
      </section>
      <section className="Layout-section">
        <div className="Layout-sectionContent">
          <PartnersSimple />
        </div>
      </section>
      <section className="Layout-section">
        <div className="Layout-sectionContent">
          <Questions />
        </div>
      </section>
    </>
  );
}
