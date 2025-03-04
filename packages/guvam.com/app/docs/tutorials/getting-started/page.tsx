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
      <p className="Content-text">install</p>
      <pre className="Content-code">npm i @guvam/components</pre>
      <p className="Content-text">import</p>

      <pre className="Content-code">{`@import url("@guvam/components/base/index.css");
@import url("@guvam/components/colors/blue.css");
@import url("@guvam/components/themes/website.css");`}</pre>
      <h2 className="Content-heading2" id="css-naming">
        <Link className="Content-linkHash" href="#css-naming">
          CSS naming convention
        </Link>
      </h2>
      <p className="Content-text"></p>
      <p className="Content-code">{`/* File naming */
Block1/Block2/Block3.css

/* CSS class naming */
.Block1-Block2-element--modifier-value
.Block1-Block2-element--modifier
.Block1-Block2-element
.Block1-Block2--modifier-value
.Block1-Block2--modifier
.Block1-Block2-Block3-Block4
.Block1-Block2-Block3
.Block1-Block2
.Block1

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
  --textDensity: 1; /* TODO */
  --textDirection: unset;
  --motionReduction: auto; /* TODO */

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

  /* other */
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
      <h2 className="Content-heading2" id="css-layers">
        <Link className="Content-linkHash" href="#css-layers">
          CSS layers
        </Link>
      </h2>
      <pre className="Content-code">@layer base, theme, overwrite, inline;</pre>
      <ul className="Content-list">
        <li>base - reset and base css</li>
        <li>theme - import different themes</li>
        <li>overwrite - your css</li>
        <li>inline - inline css which overwrite all other css</li>
      </ul>
      <BottomNavigation
        next={{
          url: "/docs/tutorials/roadmap",
          title: "Roadmap",
        }}
      />
    </article>
  );
}
