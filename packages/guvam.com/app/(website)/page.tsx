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
              <h1 className="Title">Light / Headless components for you web project</h1>

              <div className="Title-description">
                <ul>
                  <li>make easy for designers and developers to work on same code base</li>
                  <li>automatically generate UI code documentation / playground</li>
                </ul>
                {/*<div className="Title-Carousel">
                    <span className="Title-carouselItem">React</span>
                    <span className="Title-carouselItem">Vue</span>
                    <span className="Title-carouselItem">Liquid</span>
                    <span className="Title-carouselItem">WordPress</span>
                    <span className="Title-carouselItem">Smarty</span>
                    <span className="Title-carouselItem">Blade</span>
                    <span className="Title-carouselItem">Django</span>
                    <span className="Title-carouselItem">PHP</span>
                    <span className="Title-carouselItem">Ruby</span>
                  </div>*/}
              </div>
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
          <h2>Why Guvam UI Library?</h2>
          <div className="Grid">
            <div className="Card Grid--span-2 Card--muted">
              <div className="Card-content">
                <div className="Content">
                  <h3>Developer Experience</h3>
                  <p>
                    <b>Separation of concerns</b>: Interactivity, content and styles are completely
                    separated, allowing for easy code reusability.
                  </p>
                  <p>
                    <b>Statically analyzable</b>: Automatically improves webpage load times and user
                    interface speed.
                  </p>
                  <p>
                    <b>Code generation</b>: generate templates into many supported formats,
                    including React, Vue, Liquid, WordPress, Smarty, Blade, Django, PHP, and Ruby on
                    Rails. Generate CSS into CSS Modules (Styled Components, Emotion, StyleX)
                    Tailwind and SCSS
                  </p>
                  <p>
                    <b>Accessibility</b>: W3C-compliant components
                  </p>
                </div>
              </div>
            </div>

            <div className="Card Grid--span-2 Card--muted">
              <div className="Card-content">
                <div className="Content">
                  <h3>Designer Experience</h3>
                  <p>
                    <b>Headless</b>: Completely unstyled components, through which you gain complete
                    control over your app&apos;s styles and accessibility.
                  </p>
                  <p>
                    <b>Color themes</b>: Use generated color schemes or create your own custom
                    theme.
                  </p>
                  <p>
                    <b>Multiple ready-made themes</b>: Pre-made themes for various use cases,
                    including mobile applications, websites, dashboards, desktop applications.
                  </p>
                  <p>
                    <b>Plain CSS</b>: Contribute directly to CSS styles
                  </p>
                </div>
              </div>
            </div>

            <div className="Card Grid--span-2 Card--muted">
              <div className="Card-content">
                <div className="Content">
                  <h3>Documentation</h3>
                  <p>
                    <b>Automatic documentation generation</b>: Generate documentation directly from
                    your code. Show all components, attributes and styles.
                  </p>
                  <p>
                    <b>Playbook</b>: Generate a playbook of code examples which allows you to
                    showcase and experiment with different implementations.
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
