import "@guvam/blocks/src/index.css";

export default function Page() {
  return (
    <div className="Layout-section">
      <div className="Layout-sectionContent">
        <h1 className="Content-heading1">Templates</h1>

        <div className="Grid">
          <a className="Button Button--type-muted" href="/templates/portfolio/" target="_blank">
            Portfolio
          </a>
        </div>
      </div>
    </div>
  );
}
