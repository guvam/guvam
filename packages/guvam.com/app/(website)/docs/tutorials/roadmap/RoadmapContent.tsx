export const RoadmapContent = () => (
  <>
    <h2 className="Content-heading2">Roadmap</h2>
    <ul className="Content-list">
      <li style={{ backgroundColor: "var(--successBlock)" }}>
        <b className="Content--bold">Components</b>: Create the most commonly used components and
        styling <span className="Content--highlight">(Release v0.2.0)</span>
      </li>
      <li style={{ backgroundColor: "var(--successBlock)" }}>
        <b className="Content--bold">Color theming</b>: Change the color theme of components{" "}
        <span className="Content--highlight">(Release v0.2.0)</span>
      </li>
      <li style={{ backgroundColor: "var(--successBlock)" }}>
        <b className="Content--bold">Blocks</b>: Create commonly used content blocks{" "}
        <span className="Content--highlight">(Release v0.2.0)</span>
      </li>
      <li style={{ backgroundColor: "var(--warningBlock)" }}>
        <b className="Content--bold">Convert templates</b> into React, Vue, Liquid, WordPress,
        Smarty, Blade, Django <span className="Content--highlight">(In progress)</span>
      </li>
      <li style={{ backgroundColor: "var(--warningBlock)" }}>
        <b className="Content--bold">Convert CSS</b> into CSS Modules (Styled Components, Emotion,
        StyleX), Tailwind, SCSS <span className="Content--highlight">(In progress)</span>
      </li>
      <li>
        <b className="Content--bold">Generate documentation</b> of stylesheets, components and
        templates
      </li>
    </ul>
  </>
);
