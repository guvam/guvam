import { Support } from "@/app/support/Support";

export default function Page() {
  return (
    <>
      <section className="Layout-sectionHero">
        <div className="Layout-section">
          <hgroup className="Layout-hero">
            <div className="Content">
              <h1 className="Content-title">Support</h1>
              <p className="Content-titleDescription">Get Professional Support from the Experts</p>
            </div>
          </hgroup>
        </div>
      </section>

      <Support />
    </>
  );
}
