import type { Declaration, Root, Rule } from "postcss";
import postcss from "postcss";
import { plugin } from "postcss";

/*

  Handle vars with (<--variable-name>)

  Handle functions with [<calc(2+2)>]

  Handle negative values

  Handle deriving relevant part of value, eg - grid-template-columns: repeat(<**number**>, minmax(0, 1fr));

  convert em/rem to px
*/

export const toTailwindPlugin = plugin("css-to-tailwind", () => {
  return (root: Root) => {
    const rules: Rule[] = [];
    root.walkRules((rule: Rule) => {
      const tailwindClasses: string[] = [];
      const variables: { name: string; val: string }[] = [];

      rule.walkDecls((decl: Declaration) => {
        if (decl.variable) {
          variables.push({ name: decl.prop, val: decl.value });
          return;
        }

        const tailwindProperty = TAILWIND_MAP[decl.prop];

        if (tailwindProperty) {
          let tailwindVal = decl.value;
          if (tailwindProperty.valueAliases) {
            const alias = tailwindProperty.valueAliases[tailwindVal];
            if (alias) {
              tailwindVal = alias;
            }
          }

          const noValues = VALUES_ARRAY.every((val) => {
            if (tailwindVal.includes(val)) {
              tailwindVal = `[${tailwindVal}]`;
              return false;
            }

            return true;
          });

          if (noValues && tailwindVal.includes("(")) {
            tailwindVal = `[${tailwindVal}]`;
          }

          // if (noValues && !tailwindVal.includes("[")) {
          //   if (tailwindVal.includes("var")) {
          //     tailwindVal = tailwindVal.replace("var(", "(");
          //   } else if (tailwindVal.includes("(")) {
          //     tailwindVal = `[${tailwindVal}]`;
          //   }
          // }

          if (tailwindProperty.valueOnly) {
            tailwindClasses.push(tailwindVal);
          } else {
            tailwindClasses.push(`${tailwindProperty.propertyAlias ?? decl.prop}-${tailwindVal}`);
          }
        }
      });
      const nodes = [];

      if (variables.length > 0) {
        nodes.push(
          ...variables.map((elem) => {
            return postcss.decl({
              prop: elem.name,
              value: elem.val,
            });
          })
        );
      }

      if (tailwindClasses.length > 0) {
        nodes.push(
          postcss.atRule({
            name: "apply",
            params: tailwindClasses.join(" "),
          })
        );
      }

      if (rule.selector.startsWith("&") && rules.length !== 0) {
        rules[rules.length - 1].push(
          postcss.rule({
            selector: rule.selector,
            nodes: [...nodes],
          })
        );
      } else {
        rules.push(
          postcss.rule({
            selector: rule.selector,
            nodes: [...nodes],
          })
        );
      }
    });
    // replaceWith doesn't work for some reason
    root.removeAll();
    rules.forEach((rule) => {
      root.push(rule);
    });
  };
});

type TailwindItem = {
  valueOnly: boolean;
  propertyAlias: string | null;
  valueAliases: Record<string, string> | null;
};

const VALUES_ARRAY = ["em", "rem", "pt", "calc("];

const TAILWIND_MAP: Record<string, TailwindItem> = {
  "aspect-ratio": {
    valueOnly: false,
    propertyAlias: "aspect",
    valueAliases: {
      "1 / 1": "square",
      "16 / 9": "video",
    },
  },
  columns: {
    valueOnly: false,
    propertyAlias: null,
    valueAliases: null,
  },
  "break-after": {
    valueOnly: false,
    propertyAlias: null,
    valueAliases: null,
  },
  "break-before": {
    valueOnly: false,
    propertyAlias: null,
    valueAliases: null,
  },
  "break-inside": {
    valueOnly: false,
    propertyAlias: null,
    valueAliases: null,
  },
  "box-decoration-break": {
    valueOnly: false,
    propertyAlias: "box-decoration",
    valueAliases: null,
  },
  "box-sizing": {
    valueOnly: false,
    propertyAlias: "box",
    valueAliases: {
      "border-box": "border",
      "content-box": "content",
    },
  },
  display: {
    valueOnly: true,
    propertyAlias: null,
    valueAliases: {
      none: "hidden",
    },
  },
  float: {
    valueOnly: false,
    propertyAlias: null,
    valueAliases: null,
  },
  clear: {
    valueOnly: false,
    propertyAlias: null,
    valueAliases: {
      "inline-start": "start",
      "inline-end": "end",
    },
  },
  isolation: {
    valueOnly: true,
    propertyAlias: null,
    valueAliases: null,
  },
  "object-fit": {
    valueOnly: false,
    propertyAlias: "object",
    valueAliases: null,
  },
  "object-position": {
    valueOnly: false,
    propertyAlias: "object",
    valueAliases: null,
  },
  overflow: {
    valueOnly: false,
    propertyAlias: null,
    valueAliases: null,
  },
  "overflow-x": {
    valueOnly: false,
    propertyAlias: null,
    valueAliases: null,
  },
  "overflow-y": {
    valueOnly: false,
    propertyAlias: null,
    valueAliases: null,
  },
  "overscroll-behavior": {
    valueOnly: false,
    propertyAlias: "overscroll",
    valueAliases: null,
  },
  position: {
    valueOnly: true,
    propertyAlias: null,
    valueAliases: null,
  },
  // inset - Problematic
  visibility: {
    valueOnly: true,
    propertyAlias: null,
    valueAliases: {
      hidden: "invisible",
    },
  },
  "z-index": {
    valueOnly: false,
    propertyAlias: "z",
    valueAliases: null,
  },
  "flex-basis": {
    valueOnly: false,
    propertyAlias: "basis",
    valueAliases: null,
  },
  "flex-direction": {
    valueOnly: false,
    propertyAlias: "flex",
    valueAliases: null,
  },
  "flex-wrap": {
    valueOnly: false,
    propertyAlias: "flex",
    valueAliases: null,
  },
  flex: {
    valueOnly: false,
    propertyAlias: null,
    valueAliases: null,
  },
  "flex-grow": {
    valueOnly: false,
    propertyAlias: "grow",
    valueAliases: {
      "1": "", // Problematic
    },
  },
  "flex-shrink": {
    valueOnly: false,
    propertyAlias: "shrink",
    valueAliases: {
      "1": "", // Problematic
    },
  },
  order: {
    // Problematic
    valueOnly: false,
    propertyAlias: null,
    valueAliases: {
      "calc(-infinity)": "first",
      "calc(infinity)": "last",
    },
  },
  "grid-template-columns": {
    valueOnly: false,
    propertyAlias: "grid-cols",
    valueAliases: null, // see this
  },
  "grid-column": {
    valueOnly: false,
    propertyAlias: "col-span",
    valueAliases: {
      "1 / -1": "full",
    },
  },
  // Grid properties
  gap: {
    valueOnly: false,
    propertyAlias: null,
    valueAliases: null,
  },
  "column-gap": {
    valueOnly: false,
    propertyAlias: "gap-x",
    valueAliases: null,
  },
  "row-gap": {
    valueOnly: false,
    propertyAlias: "gap-y",
    valueAliases: null,
  },
  "justify-content": {
    valueOnly: false,
    propertyAlias: "justify",
    valueAliases: {
      "flex-start": "start",
      "flex-end": "end",
      "space-between": "between",
      "space-around": "around",
      "space-evenly": "evenly",
    },
  },
  "justify-items": {
    valueOnly: false,
    propertyAlias: null,
    valueAliases: null,
  },
  "justify-self": {
    valueOnly: false,
    propertyAlias: null,
    valueAliases: null,
  },
  "align-content": {
    valueOnly: false,
    propertyAlias: "content",
    valueAliases: {
      "flex-start": "start",
      "flex-end": "end",
      "space-between": "between",
      "space-around": "around",
      "space-evenly": "evenly",
    },
  },
  "align-items": {
    valueOnly: false,
    propertyAlias: "items",
    valueAliases: {
      "flex-start": "start",
      "flex-end": "end",
    },
  },
  "align-self": {
    valueOnly: false,
    propertyAlias: "self",
    valueAliases: {
      "flex-start": "start",
      "flex-end": "end",
    },
  },
  "place-content": {
    valueOnly: false,
    propertyAlias: null,
    valueAliases: {
      "space-between": "between",
      "space-around": "around",
      "space-evenly": "evenly",
    },
  },
  "place-items": {
    valueOnly: false,
    propertyAlias: null,
    valueAliases: null,
  },
  "place-self": {
    valueOnly: false,
    propertyAlias: null,
    valueAliases: null,
  },
  // Spacing
  // Sizing
  // Typography
  "background-attachment": {
    valueOnly: false,
    propertyAlias: "bg",
    valueAliases: null,
  },
  "background-clip": {
    valueOnly: false,
    propertyAlias: "bg-clip",
    valueAliases: {
      "border-box": "border",
      "padding-box": "padding",
      "content-box": "content",
    },
  },
  "background-color": {
    valueOnly: false,
    propertyAlias: "bg",
    valueAliases: {
      currentColor: "current",
    },
  },
  // backgrounds
  "border-radius": {
    valueOnly: false,
    propertyAlias: "rounded",
    valueAliases: {
      "0": "none",
      // "calc(infinity * 1px)": "full",
    },
  },
  // border-start-start-radius etc
  "border-width": {
    valueOnly: false,
    propertyAlias: "border",
    valueAliases: null,
  },
  "border-inline-width": {
    valueOnly: false,
    propertyAlias: "border-x",
    valueAliases: null,
  },
  "border-block-width": {
    valueOnly: false,
    propertyAlias: "border-y",
    valueAliases: null,
  },
  "border-inline-start-width": {
    valueOnly: false,
    propertyAlias: "border-s",
    valueAliases: null,
  },
  "border-inline-end-width": {
    valueOnly: false,
    propertyAlias: "border-e",
    valueAliases: null,
  },
  "border-top-width": {
    valueOnly: false,
    propertyAlias: "border-t",
    valueAliases: null,
  },
  "border-right-width": {
    valueOnly: false,
    propertyAlias: "border-r",
    valueAliases: null,
  },
  "border-bottom-width": {
    valueOnly: false,
    propertyAlias: "border-b",
    valueAliases: null,
  },
  "border-left-width": {
    valueOnly: false,
    propertyAlias: "border-l",
    valueAliases: null,
  },
  "border-color": {
    valueOnly: false,
    propertyAlias: "border",
    valueAliases: {
      currentColor: "current",
    },
  },
  "border-style": {
    // check divides
    valueOnly: false,
    propertyAlias: "border",
    valueAliases: null,
  },
  "outline-width": {
    valueOnly: false,
    propertyAlias: "outline",
    valueAliases: null,
  },
  "outline-color": {
    valueOnly: false,
    propertyAlias: "outline",
    valueAliases: {
      currentColor: "current",
    },
  },
  "outline-style": {
    valueOnly: false,
    propertyAlias: "outline",
    valueAliases: null, // check outline-hidden
  },
  "outline-offset": {
    valueOnly: false,
    propertyAlias: null,
    valueAliases: null,
  },
  // box shadow
  opacity: {
    // opacity: 100% is opacity-100. Problematic
    valueOnly: false,
    propertyAlias: null,
    valueAliases: null,
  },
  "mix-blend-mode": {
    valueOnly: false,
    propertyAlias: "mix-blend",
    valueAliases: null,
  },
  "background-blend-mode": {
    valueOnly: false,
    propertyAlias: "bg-blend",
    valueAliases: null,
  },
  // Filters
  "border-collapse": {
    valueOnly: false,
    propertyAlias: "border",
    valueAliases: null,
  },
};
