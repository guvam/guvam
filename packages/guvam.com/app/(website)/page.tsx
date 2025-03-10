import Link from "next/link";
import { ArrowRight } from "react-bootstrap-icons";

import { RoadmapContent } from "@/app/(website)/docs/tutorials/roadmap/RoadmapContent";
import { Support } from "@/app/(website)/support/Support";

export default function Page() {
  return (
    <>
      <section className="Layout-sectionHero">
        <div className="Layout-section">
          <div className="Layout-hero">
            <hgroup className="Content">
              <h1 className="Content-title">Web Project Components</h1>
              <p className="Content-titleDescription">
                Headless, Lightweight Components with Themes
              </p>
            </hgroup>

            <div className="List">
              <Link href="/docs" className="Button">
                Documentation <ArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="Layout-section">
        <div className="Layout-sectionContent">
          <h2 className="Content-heading2">Why Guvam UI Library?</h2>
          <div className="Grid">
            <div className="Card">
              <div className="Card-content">
                <div className="Content">
                  <h3 className="Content-heading3">Developer Experience</h3>
                  <p className="Content-text">
                    <b className="Content--bold">Separation of concerns</b>: Interactivity, content
                    and styles are completely separated, allowing for easy code reusability.
                  </p>
                  <p className="Content-text">
                    <b className="Content--bold">Statically analyzable</b>: Automatically improves
                    webpage load times and user interface speed.
                  </p>
                  <p className="Content-text">
                    <b className="Content--bold">Code generation</b>: generate templates into many
                    supported formats, including React, Vue, Liquid, WordPress, Smarty, Blade,
                    Django, PHP, and Ruby on Rails. Generate CSS into CSS Modules (Styled
                    Components, Emotion, StyleX) Tailwind and SCSS
                  </p>
                  <p className="Content-text">
                    <b className="Content--bold">Accessibility</b>: W3C-compliant components
                  </p>
                </div>
              </div>
            </div>

            <div className="Card">
              <div className="Card-content">
                <div className="Content">
                  <h3 className="Content-heading3">Designer Experience</h3>
                  <p className="Content-text">
                    <b className="Content--bold">Headless</b>: Completely unstyled components,
                    through which you gain complete control over your app&apos;s styles and
                    accessibility.
                  </p>
                  <p className="Content-text">
                    <b className="Content--bold">Color themes</b>: Use generated color schemes or
                    create your own custom theme.
                  </p>
                  <p className="Content-text">
                    <b className="Content--bold">Multiple ready-made themes</b>: Pre-made themes for
                    various use cases, including mobile applications, websites, dashboards, desktop
                    applications.
                  </p>
                  <p className="Content-text">
                    <b className="Content--bold">Plain CSS</b>: Contribute directly to CSS styles
                  </p>
                </div>
              </div>
            </div>
            <div className="Card">
              <div className="Card-content">
                <div className="Content">
                  <h3 className="Content-heading3">Documentation</h3>
                  <p className="Content-text">
                    <b className="Content--bold">Automatic documentation generation</b>: Generate
                    documentation directly from your code. Show all components, attributes and
                    styles.
                  </p>
                  <p className="Content-text">
                    <b className="Content--bold">Playbook</b>: Generate a playbook of code examples
                    which allows you to showcase and experiment with different implementations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="Layout-section">
        <div className="Layout-sectionContent">
          <div className="Content">
            <RoadmapContent />
          </div>
        </div>
      </section>

      <Support />
    </>
  );
}
