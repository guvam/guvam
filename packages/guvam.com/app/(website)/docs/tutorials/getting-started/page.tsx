import Link from "next/link";

import { BottomNavigation } from "@/components/BottomNavigation";

export default function Page() {
  return (
    <article className="Content">
      <h1 className="Content-heading1" id="getting-started">
        <Link className="Content-linkHash" href="#getting-started">
          Getting Started
        </Link>
      </h1>
      <h2 className="Content-heading2" id="installation">
        <Link className="Content-linkHash" href="#installation">
          Installation
        </Link>
      </h2>
      <pre className="Content-code">npm i @guvam/components</pre>

      <h2 className="Content-text">import styles</h2>
      <pre className="Content-code">{`@import url("@guvam/components/base/index.css");
@import url("@guvam/components/themes/website.css");
@import url("@guvam/components/colors/blue.css");`}</pre>

      <h2 className="Content-text">import components</h2>
      <pre className="Content-code">{`import { Rating } from "@guvam/components";`}</pre>

      <h2 className="Content-heading2" id="css-naming">
        <Link className="Content-linkHash" href="#css-naming">
          CSS naming convention
        </Link>
      </h2>
      <p className="Content-text">
        <span className="Content--bold">block</span>: Globally unique prefix for grouping similar
        CSS functionality together. (Pascal case)
      </p>
      <p className="Content-text">
        <span className="Content--bold">element</span>: separate item in block (Camel case)
      </p>
      <p className="Content-text">
        <span className="Content--bold">modifier</span>: element variation (Camel case)
      </p>
      <p className="Content-text">
        <span className="Content--bold">value</span>: modifier value (Camel case)
      </p>

      <h3 className="Content-heading3">Example</h3>
      <p className="Content-code">{`/* File naming */
Block1/Block2/Block3.css

/* CSS class naming */
.Block1-Block2-element--modifier-value

/* CSS variable naming */
--Block1-Block2-element

/* CSS keyframe naming */
Block1-Block2-element`}</p>

      <h2 className="Content-heading2" id="global-css-variables">
        <Link className="Content-linkHash" href="#global-css-variables">
          Global CSS variables
        </Link>
      </h2>
      <pre className="Content-code">
        {` /* global variables */
  --colorScheme: dark;
  --colorTheme: blue;
  --borderRadius: 0.5rem;
  --textScale: 1.25;
  --textSize: 16px;
  --textDirection: unset;

  font-size: var(--textSize);
  color: var(--surfaceText);
  color-scheme: var(--colorScheme);
  background-color: var(--surface);
  direction: var(--textDirection);
  anchor-name: --root-container;

  /* font */
  --textMultiplier:

  /* primary */
  --primary:
  --primaryText:
  --primaryBlock:
  --primaryBlockText:
  --primaryBorder:

  /* secondary */
  --secondary:
  --secondaryText:
  --secondaryBlock:
  --secondaryBlockText:
  --secondaryBorder:

  /* accent */
  --accent:
  --accentText:
  --accentBlock:
  --accentBlockText:
  --accentBorder:

  /* info */
  --info:
  --infoText:
  --infoBlock:
  --infoBlockText:
  --infoBorder:

  /* success */
  --success:
  --successText:
  --successBlock:
  --successBlockText:
  --successBorder:

  /* warning */
  --warning:
  --warningText:
  --warningBlock:
  --warningBlockText:
  --warningBorder:

  /* error */
  --error:
  --errorText:
  --errorBlock:
  --errorBlockText:
  --errorBorder:

  /* surface */
  --surface:
  --surfaceText:
  --surfaceBlock:
  --surfaceBlockText:
  --surfaceBorder:
  --surfacePanel:
  --surfaceShadow:
  --surfaceBackdrop:
  --surfaceHover:

  /* ui */
  --ui:
  --uiText:
  --uiBorder:
  --uiHover:
  --uiFocus:
  --uiDisabled:
  --uiActive:
  --uiSelected:`}
      </pre>

      <h2 className="Content-heading2" id="color-modes">
        <Link className="Content-linkHash" href="#color-modes">
          Color modes
        </Link>
      </h2>
      <h2 className="Content-text">import one of the color modes</h2>
      <pre className="Content-code">{`@import url("@guvam/components/colors/blue.css");
@import url("@guvam/components/colors/green.css");
@import url("@guvam/components/colors/lime.css");
@import url("@guvam/components/colors/pink.css");
@import url("@guvam/components/colors/red.css");
@import url("@guvam/components/colors/yellow.css");`}</pre>

      <p className="Content-text">
        Add matching class name to root element <span className="Chip">Theme--color-blue</span>
      </p>

      <h2 className="Content-heading2" id="theming">
        <Link className="Content-linkHash" href="#theming">
          Theming
        </Link>
      </h2>
      <h2 className="Content-text">import one of the color modes</h2>
      <pre className="Content-code">{`@import url("@guvam/components/themes/calm.css");
@import url("@guvam/components/themes/focus.css");
@import url("@guvam/components/themes/fashion.css");`}</pre>

      <p className="Content-text">
        Add matching class name to root element <span className="Chip">Theme--theme-calm</span>
      </p>

      <BottomNavigation
        next={{
          url: "/docs/tutorials/roadmap",
          title: "Roadmap",
        }}
      />
    </article>
  );
}
