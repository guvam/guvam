import { Support } from "@/app/(website)/support/Support";

export default function Page() {
  return (
    <>
      <section className="Layout-sectionFull Layout-sectionFull--hero">
        <div className="Layout-section">
          <hgroup className="Hero">
            <div className="Content">
              <h1 className="Title">Support</h1>
              <p className="Title-description">Get Professional Support from the Experts</p>
            </div>
          </hgroup>
        </div>
      </section>

      <Support />
    </>
  );
}
