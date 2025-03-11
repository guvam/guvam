import { HeroSplit } from "@guvam/blocks/src/Hero";
import { LogoCloud } from "@guvam/blocks/src/LogoCloud";
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
          <LogoCloud />
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
