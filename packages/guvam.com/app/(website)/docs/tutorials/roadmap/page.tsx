import Link from "next/link";

import { BottomNavigation } from "@/components/BottomNavigation";

export default function Page() {
  return (
    <div className="Content">
      <h2 className="Content-heading2" id="roadmap">
        <Link className="Content-linkHash" href="#roadmap">
          Roadmap
        </Link>
      </h2>
      <ul className="Content-list">
        <li>
          <b className="Content--bold">Components</b>: Create the most commonly used components and
          styling{" "}
          <span className="Content--bold" style={{ color: "var(--state-)" }}>
            (Done)
          </span>
        </li>
        <li>
          <b className="Content--bold">Color theming</b>: Change the color theme of components{" "}
          <span className="Content--bold" style={{ color: "var(--state-warning)" }}>
            (In progress)
          </span>
        </li>
        <li>
          <b className="Content--bold">Theming</b>: Create themes for websites, mobile applications
          and desktop dashboards
        </li>
        <li>
          <b className="Content--bold">Blocks</b>: Create commonly used content blocks{" "}
          <span className="Content--bold" style={{ color: "var(--state-warning)" }}>
            (In progress)
          </span>
        </li>
        <li>
          <b className="Content--bold">Generate documentation</b> of stylesheets, components and
          templates
        </li>
        <li>
          <b className="Content--bold">Convert templates</b> into React, Vue, Liquid, WordPress,
          Smarty, Blade, Django, PHP and Ruby on Rails{" "}
        </li>
        <li>
          <b className="Content--bold">Convert CSS</b> into CSS Modules (Styled Components, Emotion,
          StyleX), Tailwind, SCSS
        </li>
        <li>Create website and application templates</li>
      </ul>

      <h2 className="Content-heading2" id="changelog">
        <Link className="Content-linkHash" href="#changelog">
          Changelog
        </Link>
      </h2>
      <p className="Content-text">
        <a className="Content-link" href="https://github.com/guvam/guvam" target="_blank">
          0.1.0
        </a>
        (<time dateTime="2025-02-10">2025-02-10</time>)
      </p>

      <BottomNavigation
        previous={{
          url: "/docs/tutorials/getting-started",
          title: "Getting Started",
        }}
        next={{
          url: "/docs/components",
          title: "Components",
        }}
      />
    </div>
  );
}
