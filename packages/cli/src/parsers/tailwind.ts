import type { Declaration, Root, Rule } from "postcss";
import postcss from "postcss";
import { plugin } from "postcss";

export const toTailwindPlugin = plugin("css-to-tailwind", () => {
  return (root: Root) => {
    const rules: Rule[] = [];
    root.walkRules((rule: Rule) => {
      const tailwindClasses: string[] = [];
      const variables: { name: string; val: string }[] = [];

      rule.walkDecls((decl: Declaration) => {
        if (decl.parent !== rule) {
          return;
        }

        if (decl.variable) {
          variables.push({ name: decl.prop, val: decl.value });
          return;
        }

        const tailwindProperty = TAILWIND_MAP[decl.prop];

        if (tailwindProperty) {
          let tailwindVal = decl.value;
          const alias = tailwindProperty.valueAliases
            ? tailwindProperty.valueAliases[tailwindVal]
            : undefined;

          if (alias !== undefined) {
            tailwindVal = alias;
          } else if (tailwindProperty.useRawValue) {
            tailwindVal = `[${tailwindVal}]`;
          } else {
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
          }

          if (tailwindProperty.propertyAlias == "") {
            tailwindClasses.push(tailwindVal);
          } else if (tailwindVal === "") {
            tailwindClasses.push(`${tailwindProperty.propertyAlias ?? decl.prop}`);
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
  propertyAlias: string | null;
  useRawValue: boolean;
  valueAliases: Record<string, string> | null;
};

const VALUES_ARRAY = ["em", "rem", "pt", "calc(", " ", "px"];

const TAILWIND_MAP: Record<string, TailwindItem> = {
  "aspect-ratio": {
    propertyAlias: "aspect",
    useRawValue: false,
    valueAliases: {
      "1 / 1": "square",
      "16 / 9": "video",
    },
  },
  columns: {
    propertyAlias: null,
    useRawValue: false,
    valueAliases: null,
  },
  "break-after": {
    propertyAlias: null,
    useRawValue: false,
    valueAliases: null,
  },
  "break-before": {
    propertyAlias: null,
    useRawValue: false,
    valueAliases: null,
  },
  "break-inside": {
    propertyAlias: null,
    useRawValue: false,
    valueAliases: null,
  },
  "box-decoration-break": {
    propertyAlias: "box-decoration",
    useRawValue: false,
    valueAliases: null,
  },
  "box-sizing": {
    propertyAlias: "box",
    useRawValue: false,

    valueAliases: {
      "border-box": "border",
      "content-box": "content",
    },
  },
  display: {
    propertyAlias: "",
    useRawValue: false,

    valueAliases: {
      none: "hidden",
    },
  },
  float: {
    propertyAlias: null,
    useRawValue: false,
    valueAliases: null,
  },
  clear: {
    propertyAlias: null,
    useRawValue: false,

    valueAliases: {
      "inline-start": "start",
      "inline-end": "end",
    },
  },
  isolation: {
    propertyAlias: "",
    useRawValue: false,
    valueAliases: null,
  },
  "object-fit": {
    propertyAlias: "object",
    useRawValue: false,
    valueAliases: null,
  },
  "object-position": {
    propertyAlias: "object",
    useRawValue: false,
    valueAliases: null,
  },
  overflow: {
    propertyAlias: null,
    useRawValue: false,
    valueAliases: null,
  },
  "overflow-x": {
    propertyAlias: null,
    useRawValue: false,
    valueAliases: null,
  },
  "overflow-y": {
    propertyAlias: null,
    useRawValue: false,
    valueAliases: null,
  },
  "overscroll-behavior": {
    propertyAlias: "overscroll",
    useRawValue: false,
    valueAliases: null,
  },
  position: {
    propertyAlias: "",
    useRawValue: false,
    valueAliases: null,
  },
  inset: {
    propertyAlias: "inset",
    useRawValue: false,
    valueAliases: null,
  },
  "inset-inline": {
    propertyAlias: "inset-x",
    useRawValue: false,
    valueAliases: null,
  },
  "inset-block": {
    propertyAlias: "inset-y",
    useRawValue: false,
    valueAliases: null,
  },
  "inset-inline-start": {
    propertyAlias: "start",
    useRawValue: false,
    valueAliases: null,
  },
  "inset-inline-end": {
    propertyAlias: "end",
    useRawValue: false,
    valueAliases: null,
  },
  top: {
    propertyAlias: null,
    useRawValue: false,
    valueAliases: null,
  },
  right: {
    propertyAlias: null,
    useRawValue: false,
    valueAliases: null,
  },
  bottom: {
    propertyAlias: null,
    useRawValue: false,
    valueAliases: null,
  },
  left: {
    propertyAlias: null,
    useRawValue: false,
    valueAliases: null,
  },
  visibility: {
    propertyAlias: "",
    useRawValue: false,

    valueAliases: {
      hidden: "invisible",
    },
  },
  "z-index": {
    propertyAlias: "z",
    useRawValue: false,
    valueAliases: null,
  },
  "flex-basis": {
    propertyAlias: "basis",
    useRawValue: false,
    valueAliases: null,
  },
  "flex-direction": {
    propertyAlias: "flex",
    useRawValue: false,
    valueAliases: null,
  },
  "flex-wrap": {
    propertyAlias: "flex",
    useRawValue: false,
    valueAliases: null,
  },
  flex: {
    propertyAlias: null,
    useRawValue: false,
    valueAliases: null,
  },
  "flex-grow": {
    propertyAlias: "grow",
    useRawValue: false,

    valueAliases: {
      "1": "",
    },
  },
  "flex-shrink": {
    propertyAlias: "shrink",
    useRawValue: false,

    valueAliases: {
      "1": "",
    },
  },
  order: {
    propertyAlias: "order",
    useRawValue: false,

    valueAliases: {
      "calc(-infinity)": "first",
      "calc(infinity)": "last",
    },
  },
  "grid-template-columns": {
    propertyAlias: "grid-cols",
    useRawValue: true,
    valueAliases: {
      none: "none",
      subgrid: "subgrid",
    },
  },
  "grid-column": {
    propertyAlias: "col-span",
    useRawValue: false,

    valueAliases: {
      "1 / -1": "full",
    },
  },
  "grid-template-rows": {
    propertyAlias: "grid-rows",
    useRawValue: true,
    valueAliases: {
      none: "none",
      subgrid: "subgrid",
    },
  },
  "grid-row": {
    propertyAlias: "row-span",
    useRawValue: true,
    valueAliases: {
      "1 / -1": "span-full",
      auto: "auto",
    },
  },
  "grid-row-start": {
    propertyAlias: "row-start",
    useRawValue: false,
    valueAliases: null,
  },

  "grid-row-end": {
    propertyAlias: "row-end",
    useRawValue: true,
    valueAliases: { auto: "auto" },
  },

  "grid-auto-flow": {
    propertyAlias: "grid-flow",
    useRawValue: false,
    valueAliases: {
      column: "col",
      "row dense": "row-dense",
      "column dense": "col-dense",
    },
  },
  "grid-auto-columns": {
    propertyAlias: "auto-cols",
    useRawValue: false,
    valueAliases: {
      "min-content": "min",
      "max-content": "max",
      "minmax(0, 1fr)": "fr",
    },
  },
  "grid-auto-rows": {
    propertyAlias: "auto-rows",
    useRawValue: false,
    valueAliases: {
      "min-content": "min",
      "max-content": "max",
      "minmax(0, 1fr)": "fr",
    },
  },
  gap: {
    propertyAlias: null,
    useRawValue: false,
    valueAliases: null,
  },
  "column-gap": {
    propertyAlias: "gap-x",
    useRawValue: false,
    valueAliases: null,
  },
  "row-gap": {
    propertyAlias: "gap-y",
    useRawValue: false,
    valueAliases: null,
  },
  "justify-content": {
    propertyAlias: "justify",
    useRawValue: false,

    valueAliases: {
      "flex-start": "start",
      "flex-end": "end",
      "space-between": "between",
      "space-around": "around",
      "space-evenly": "evenly",
    },
  },
  "justify-items": {
    propertyAlias: null,
    useRawValue: false,
    valueAliases: null,
  },
  "justify-self": {
    propertyAlias: null,
    useRawValue: false,
    valueAliases: null,
  },
  "align-content": {
    propertyAlias: "content",
    useRawValue: false,

    valueAliases: {
      "flex-start": "start",
      "flex-end": "end",
      "space-between": "between",
      "space-around": "around",
      "space-evenly": "evenly",
    },
  },
  "align-items": {
    propertyAlias: "items",
    useRawValue: false,

    valueAliases: {
      "flex-start": "start",
      "flex-end": "end",
    },
  },
  "align-self": {
    propertyAlias: "self",
    useRawValue: false,

    valueAliases: {
      "flex-start": "start",
      "flex-end": "end",
    },
  },
  "place-content": {
    propertyAlias: null,
    useRawValue: false,
    valueAliases: {
      "space-between": "between",
      "space-around": "around",
      "space-evenly": "evenly",
    },
  },
  "place-items": {
    propertyAlias: null,
    useRawValue: false,
    valueAliases: null,
  },
  "place-self": {
    propertyAlias: null,
    useRawValue: false,
    valueAliases: null,
  },
  padding: {
    propertyAlias: "p",
    useRawValue: false,

    valueAliases: {
      "1px": "px",
    },
  },
  "padding-inline": {
    propertyAlias: "px",
    useRawValue: false,

    valueAliases: {
      "1px": "px",
    },
  },
  "padding-block": {
    propertyAlias: "py",
    useRawValue: false,

    valueAliases: {
      "1px": "px",
    },
  },
  "padding-inline-start": {
    propertyAlias: "ps",
    useRawValue: false,

    valueAliases: {
      "1px": "px",
    },
  },
  "padding-inline-end": {
    propertyAlias: "pe",
    useRawValue: false,

    valueAliases: {
      "1px": "px",
    },
  },
  "padding-top": {
    propertyAlias: "pt",
    useRawValue: false,

    valueAliases: {
      "1px": "px",
    },
  },
  "padding-right": {
    propertyAlias: "pr",
    useRawValue: false,

    valueAliases: {
      "1px": "px",
    },
  },
  "padding-bottom": {
    propertyAlias: "pb",
    useRawValue: false,

    valueAliases: {
      "1px": "px",
    },
  },
  "padding-left": {
    propertyAlias: "pl",
    useRawValue: false,

    valueAliases: {
      "1px": "px",
    },
  },
  margin: {
    propertyAlias: "m",
    useRawValue: false,

    valueAliases: {
      "1px": "px",
    },
  },
  "margin-inline": {
    propertyAlias: "mx",
    useRawValue: false,

    valueAliases: {
      "1px": "px",
    },
  },
  "margin-block": {
    propertyAlias: "my",
    useRawValue: false,

    valueAliases: {
      "1px": "px",
    },
  },
  "margin-inline-start": {
    propertyAlias: "ms",
    useRawValue: false,

    valueAliases: {
      "1px": "px",
    },
  },
  "margin-inline-end": {
    propertyAlias: "me",
    useRawValue: false,

    valueAliases: {
      "1px": "px",
    },
  },
  "margin-top": {
    propertyAlias: "mt",
    useRawValue: false,

    valueAliases: {
      "1px": "px",
    },
  },
  "margin-block-start": {
    propertyAlias: "mt",
    useRawValue: false,

    valueAliases: {
      "1px": "px",
    },
  },
  "margin-right": {
    propertyAlias: "mr",
    useRawValue: false,

    valueAliases: {
      "1px": "px",
    },
  },
  "margin-bottom": {
    propertyAlias: "mb",
    useRawValue: false,

    valueAliases: {
      "1px": "px",
    },
  },
  "margin-block-end": {
    propertyAlias: "mb",
    useRawValue: false,

    valueAliases: {
      "1px": "px",
    },
  },
  "margin-left": {
    propertyAlias: "ml",
    useRawValue: false,

    valueAliases: {
      "1px": "px",
    },
  },
  width: {
    propertyAlias: "w",
    useRawValue: false,

    valueAliases: {
      "1px": "px",
      "100%": "full",
      "100vw": "screen",
      "100dvw": "dvw",
      "100dvh": "dvh",
      "100lvw": "lvw",
      "100lvh": "lvh",
      "100svw": "svw",
      "100svh": "svh",
      "min-content": "min",
      "max-content": "max",
      "fit-content": "fit",
    },
  },
  "inline-size": {
    propertyAlias: "w",
    useRawValue: false,

    valueAliases: {
      "1px": "px",
      "100%": "full",
      "100vw": "screen",
      "100dvw": "dvw",
      "100dvh": "dvh",
      "100lvw": "lvw",
      "100lvh": "lvh",
      "100svw": "svw",
      "100svh": "svh",
      "min-content": "min",
      "max-content": "max",
      "fit-content": "fit",
    },
  },
  "min-width": {
    propertyAlias: "min-w",
    useRawValue: false,

    valueAliases: {
      "1px": "px",
      "100%": "full",
      "100vw": "screen",
      "100dvw": "dvw",
      "100dvh": "dvh",
      "100lvw": "lvw",
      "100lvh": "lvh",
      "100svw": "svw",
      "100svh": "svh",
      "min-content": "min",
      "max-content": "max",
      "fit-content": "fit",
    },
  },
  "max-width": {
    propertyAlias: "max-w",
    useRawValue: false,

    valueAliases: {
      "1px": "px",
      "100%": "full",
      "100vw": "screen",
      "100dvw": "dvw",
      "100dvh": "dvh",
      "100lvw": "lvw",
      "100lvh": "lvh",
      "100svw": "svw",
      "100svh": "svh",
      "min-content": "min",
      "max-content": "max",
      "fit-content": "fit",
    },
  },
  height: {
    propertyAlias: "h",
    useRawValue: false,

    valueAliases: {
      "1px": "px",
      "100%": "full",
      "100vw": "screen",
      "100dvw": "dvw",
      "100dvh": "dvh",
      "100lvw": "lvw",
      "100lvh": "lvh",
      "100svw": "svw",
      "100svh": "svh",
      "min-content": "min",
      "max-content": "max",
      "fit-content": "fit",
    },
  },

  "block-size": {
    propertyAlias: "h",
    useRawValue: false,

    valueAliases: {
      "1px": "px",
      "100%": "full",
      "100vw": "screen",
      "100dvw": "dvw",
      "100dvh": "dvh",
      "100lvw": "lvw",
      "100lvh": "lvh",
      "100svw": "svw",
      "100svh": "svh",
      "min-content": "min",
      "max-content": "max",
      "fit-content": "fit",
    },
  },
  "min-height": {
    propertyAlias: "min-h",
    useRawValue: false,

    valueAliases: {
      "1px": "px",
      "100%": "full",
      "100vw": "screen",
      "100dvw": "dvw",
      "100dvh": "dvh",
      "100lvw": "lvw",
      "100lvh": "lvh",
      "100svw": "svw",
      "100svh": "svh",
      "min-content": "min",
      "max-content": "max",
      "fit-content": "fit",
    },
  },
  "max-height": {
    propertyAlias: "max-h",
    useRawValue: false,

    valueAliases: {
      "1px": "px",
      "100%": "full",
      "100vw": "screen",
      "100dvw": "dvw",
      "100dvh": "dvh",
      "100lvw": "lvw",
      "100lvh": "lvh",
      "100svw": "svw",
      "100svh": "svh",
      "min-content": "min",
      "max-content": "max",
      "fit-content": "fit",
    },
  },
  "font-family": {
    propertyAlias: "font",
    useRawValue: false,

    valueAliases: {
      "var(--font-sans)": "sans",
      "var(--font-serif)": "serif",
      "var(--font-mono)": "mono",
    },
  },
  "font-size": {
    propertyAlias: "text",
    useRawValue: true,

    valueAliases: null,
  },
  "-webkit-font-smoothing": {
    propertyAlias: "",
    useRawValue: false,
    valueAliases: { auto: "subpixel-antialiased" },
  },
  "-moz-osx-font-smoothing": {
    propertyAlias: "",
    useRawValue: false,
    valueAliases: {
      auto: "subpixel-antialiased",
      grayscale: "antialiased",
    },
  },
  "font-style": {
    propertyAlias: "",
    useRawValue: false,
    valueAliases: {
      normal: "non-italic",
    },
  },
  "font-weight": {
    propertyAlias: "font",
    useRawValue: true,
    valueAliases: {
      "100": "thin",
      "200": "extralight",
      "300": "light",
      "400": "normal",
      "500": "medium",
      "600": "semibold",
      "700": "bold",
      "800": "extrabold",
      "900": "black",
    },
  },
  "font-stretch": {
    propertyAlias: null,
    useRawValue: false,
    valueAliases: null,
  },
  "font-variant-numeric": {
    propertyAlias: "",
    useRawValue: false,
    valueAliases: {
      normal: "normal-nums",
    },
  },
  "letter-spacing": {
    propertyAlias: "tracking",
    useRawValue: true,
    valueAliases: {
      "var(--tracking-tighter)": "tighter",
      "var(--tracking-tight)": "tight",
      "var(--tracking-normal)": "normal",
      "var(--tracking-wide)": "wide",
      "var(--tracking-wider)": "wider",
      "var(--tracking-widest)": "widest",
    },
  },
  "-webkit-line-clamp": {
    propertyAlias: "line-clamp",
    useRawValue: true,
    valueAliases: { unset: "none" },
  },
  "line-height": {
    propertyAlias: "leading",
    useRawValue: true,
    valueAliases: { "1": "none" },
  },
  "list-style-image": {
    propertyAlias: "list-image",
    useRawValue: true,
    valueAliases: { none: "none" },
  },
  "list-style-position": {
    propertyAlias: "list",
    useRawValue: false,
    valueAliases: null,
  },
  "list-style-type": {
    propertyAlias: "list",
    useRawValue: false,
    valueAliases: null,
  },
  "text-align": {
    propertyAlias: "text",
    useRawValue: false,
    valueAliases: null,
  },
  color: {
    propertyAlias: "text",
    useRawValue: true,
    valueAliases: {
      inherit: "inherit",
      currentColor: "current",
      transparent: "transparent",
    },
  },
  "text-decoration-line": {
    propertyAlias: "",
    useRawValue: false,
    valueAliases: { none: "no-underline" },
  },
  "text-decoration-color": {
    propertyAlias: "decoration",
    useRawValue: true,
    valueAliases: {
      inherit: "inherit",
      currentColor: "current",
      transparent: "transparent",
    },
  },
  "text-decoration-style": {
    propertyAlias: "decoration",
    useRawValue: false,
    valueAliases: null,
  },
  "text-decoration-thickness": {
    propertyAlias: "decoration",
    useRawValue: false,
    valueAliases: null,
  },
  "text-underline-offset": {
    propertyAlias: "underline-offset",
    useRawValue: true,
    valueAliases: { auto: "auto" },
  },
  "text-transform": {
    propertyAlias: "",
    useRawValue: false,
    valueAliases: {
      none: "normal-case",
    },
  },
  "text-overflow": {
    propertyAlias: "text",
    useRawValue: false,
    valueAliases: null,
  },
  "text-wrap": {
    propertyAlias: "text",
    useRawValue: false,
    valueAliases: null,
  },
  "text-indent": {
    propertyAlias: "indent",
    useRawValue: true,
    valueAliases: {
      "1px": "px",
    },
  },
  "vertical-align": {
    propertyAlias: "align",
    useRawValue: false,
    valueAliases: null,
  },
  "white-space": {
    propertyAlias: "whitespace",
    useRawValue: false,
    valueAliases: null,
  },
  "word-break": {
    propertyAlias: "break",
    useRawValue: false,
    valueAliases: {
      "break-word": "words",
      "break-all": "all",
      "keep-all": "keep",
    },
  },
  hyphens: {
    propertyAlias: "hyphens",
    useRawValue: false,
    valueAliases: null,
  },
  content: {
    propertyAlias: "content",
    useRawValue: true,
    valueAliases: {
      none: "none",
    },
  },
  "background-attachment": {
    propertyAlias: "bg",
    useRawValue: false,
    valueAliases: null,
  },
  "background-clip": {
    propertyAlias: "bg-clip",
    useRawValue: false,

    valueAliases: {
      "border-box": "border",
      "padding-box": "padding",
      "content-box": "content",
    },
  },
  "background-color": {
    propertyAlias: "bg",
    useRawValue: true,
    valueAliases: {
      currentColor: "current",
    },
  },
  "background-image": {
    propertyAlias: "bg",
    useRawValue: true,

    valueAliases: {
      none: "none",
    },
  },
  "background-origin": {
    propertyAlias: "bg-origin",
    useRawValue: false,

    valueAliases: {
      "border-box": "border",
      "padding-box": "padding",
      "content-box": "content",
    },
  },
  "background-position": {
    propertyAlias: "bg",
    useRawValue: false,
    valueAliases: {
      "left bottom": "left-bottom",
      "left top": "left-top",
      "right bottom": "right-bottom",
      "right top": "right-top",
    },
  },
  "background-repeat": {
    propertyAlias: "bg",
    useRawValue: false,
    valueAliases: {
      space: "repeat-space",
      round: "repeat-round",
    },
  },
  "background-size": {
    propertyAlias: "bg",
    useRawValue: false,
    valueAliases: null,
  },
  "border-radius": {
    propertyAlias: "rounded",
    useRawValue: false,
    valueAliases: {
      "0": "none",
      "calc(infinity * 1px)": "full",
    },
  },
  "border-start-start-radius": {
    propertyAlias: "rounded-ss",
    useRawValue: false,
    valueAliases: {
      "0": "none",
      "calc(infinity * 1px)": "full",
    },
  },
  "border-start-end-radius": {
    propertyAlias: "rounded-se",
    useRawValue: false,
    valueAliases: {
      "0": "none",
      "calc(infinity * 1px)": "full",
    },
  },
  "border-end-end-radius": {
    propertyAlias: "rounded-ee",
    useRawValue: false,
    valueAliases: {
      "0": "none",
      "calc(infinity * 1px)": "full",
    },
  },
  "border-end-start-radius": {
    propertyAlias: "rounded-es",
    useRawValue: false,
    valueAliases: {
      "0": "none",
      "calc(infinity * 1px)": "full",
    },
  },
  "border-top-left-radius": {
    propertyAlias: "rounded-tl",
    useRawValue: false,
    valueAliases: {
      "0": "none",
      "calc(infinity * 1px)": "full",
    },
  },
  "border-top-right-radius": {
    propertyAlias: "rounded-tr",
    useRawValue: false,
    valueAliases: {
      "0": "none",
      "calc(infinity * 1px)": "full",
    },
  },
  "border-bottom-right-radius": {
    propertyAlias: "rounded-br",
    useRawValue: false,
    valueAliases: {
      "0": "none",
      "calc(infinity * 1px)": "full",
    },
  },
  "border-bottom-left-radius": {
    propertyAlias: "rounded-bl",
    useRawValue: false,
    valueAliases: {
      "0": "none",
      "calc(infinity * 1px)": "full",
    },
  },

  "border-width": {
    propertyAlias: "border",
    useRawValue: false,
    valueAliases: null,
  },
  "border-inline-width": {
    propertyAlias: "border-x",
    useRawValue: false,
    valueAliases: null,
  },
  "border-block-width": {
    propertyAlias: "border-y",
    useRawValue: false,
    valueAliases: null,
  },
  "border-inline-start-width": {
    propertyAlias: "border-s",
    useRawValue: false,
    valueAliases: null,
  },
  "border-inline-end-width": {
    propertyAlias: "border-e",
    useRawValue: false,
    valueAliases: null,
  },
  "border-top-width": {
    propertyAlias: "border-t",
    useRawValue: false,
    valueAliases: null,
  },
  "border-right-width": {
    propertyAlias: "border-r",
    useRawValue: false,
    valueAliases: null,
  },
  "border-bottom-width": {
    propertyAlias: "border-b",
    useRawValue: false,
    valueAliases: null,
  },
  "border-left-width": {
    propertyAlias: "border-l",
    useRawValue: false,
    valueAliases: null,
  },
  "border-color": {
    propertyAlias: "border",
    useRawValue: false,
    valueAliases: {
      currentColor: "current",
    },
  },
  "border-style": {
    propertyAlias: "border",
    useRawValue: false,
    valueAliases: null,
  },
  "outline-width": {
    propertyAlias: "outline",
    useRawValue: false,
    valueAliases: null,
  },
  "outline-color": {
    propertyAlias: "outline",
    useRawValue: false,
    valueAliases: {
      currentColor: "current",
    },
  },
  "outline-style": {
    propertyAlias: "outline",
    useRawValue: false,
    valueAliases: null,
  },
  "outline-offset": {
    propertyAlias: null,
    useRawValue: false,
    valueAliases: null,
  },
  "box-shadow": {
    propertyAlias: "shadow",
    useRawValue: true,
    valueAliases: {
      "0 0 #0000": "none",
    },
  },
  opacity: {
    propertyAlias: null,
    useRawValue: true,
    valueAliases: null,
  },
  "mix-blend-mode": {
    useRawValue: false,
    propertyAlias: "mix-blend",
    valueAliases: null,
  },
  "background-blend-mode": {
    useRawValue: false,
    propertyAlias: "bg-blend",
    valueAliases: null,
  },
  filter: {
    propertyAlias: null,
    useRawValue: true,
    valueAliases: null,
  },
  "border-collapse": {
    propertyAlias: "border",
    useRawValue: false,
    valueAliases: null,
  },
  "border-spacing": {
    propertyAlias: null,
    useRawValue: true,
    valueAliases: null,
  },
  "table-layout": {
    propertyAlias: "table",
    useRawValue: false,
    valueAliases: null,
  },
  "caption-side": {
    propertyAlias: "caption",
    useRawValue: false,
    valueAliases: null,
  },
  "transition-property": {
    propertyAlias: "transition",
    useRawValue: true,
    valueAliases: null,
  },
  "transition-behavior": {
    propertyAlias: "transition",
    useRawValue: false,

    valueAliases: {
      "allow-discrete": "discrete",
    },
  },
  "transition-duration": {
    propertyAlias: "duration",
    useRawValue: false,
    valueAliases: null,
  },
  "transition-timing-function": {
    propertyAlias: "ease",
    valueAliases: {
      linear: "linear",
      initial: "initial",
    },
    useRawValue: true,
  },
  "transition-delay": {
    propertyAlias: "delay",
    useRawValue: false,
    valueAliases: null,
  },
  animation: {
    propertyAlias: "animate",
    useRawValue: true,
    valueAliases: null,
  },
  "backface-visibility": {
    propertyAlias: "backface",
    useRawValue: false,
    valueAliases: null,
  },
  perspective: {
    propertyAlias: null,
    useRawValue: true,
    valueAliases: {
      none: "none",
    },
  },
  "perspective-origin": {
    propertyAlias: null,
    useRawValue: false,
    valueAliases: {
      "top right": "top-right",
      "bottom right": "bottom-right",
      "bottom left": "bottom-left",
      "top left": "top-left",
    },
  },
  rotate: {
    propertyAlias: null,
    useRawValue: true,
    valueAliases: {
      none: "none",
    },
  },
  scale: {
    propertyAlias: null,
    useRawValue: true,
    valueAliases: {
      none: "none",
    },
  },
  transform: {
    propertyAlias: null,
    useRawValue: true,
    valueAliases: {
      none: "none",
    },
  },
  "transform-origin": {
    propertyAlias: null,
    useRawValue: false,
    valueAliases: {
      "top right": "top-right",
      "bottom right": "bottom-right",
      "bottom left": "bottom-left",
      "top left": "top-left",
    },
  },
  "transform-style": {
    propertyAlias: "transform",
    useRawValue: false,

    valueAliases: {
      "preserve-3d": "3d",
    },
  },
  translate: {
    propertyAlias: null,
    useRawValue: true,
    valueAliases: {
      none: "none",
    },
  },
  "accent-color": {
    propertyAlias: "accent",
    valueAliases: {
      inherit: "inherit",
      currentColor: "current",
      transparent: "transparent",
    },
    useRawValue: true,
  },
  appearance: {
    propertyAlias: null,
    useRawValue: false,
    valueAliases: null,
  },
  "caret-color": {
    propertyAlias: "caret",
    valueAliases: {
      inherit: "inherit",
      currentColor: "current",
      transparent: "transparent",
    },
    useRawValue: true,
  },
  "color-scheme": {
    propertyAlias: "scheme",
    useRawValue: false,
    valueAliases: {
      "light dark": "light-dark",
      "only dark": "only-dark",
      "only light": "only-light",
    },
  },
  "field-sizing": {
    propertyAlias: null,

    useRawValue: false,
    valueAliases: null,
  },
  "pointer-events": {
    propertyAlias: null,

    useRawValue: false,
    valueAliases: null,
  },
  resize: {
    propertyAlias: null,

    useRawValue: false,
    valueAliases: {
      both: "",
      vertical: "y",
      horizontal: "x",
    },
  },
  "scroll-behavior": {
    propertyAlias: "scroll",
    useRawValue: false,
    valueAliases: null,
  },
  "scroll-margin": {
    propertyAlias: "scroll-m",
    useRawValue: true,
    valueAliases: null,
  },
  "scroll-margin-inline": {
    propertyAlias: "scroll-mx",
    useRawValue: true,
    valueAliases: null,
  },
  "scroll-margin-block": {
    propertyAlias: "scroll-my",
    useRawValue: true,
    valueAliases: null,
  },
  "scroll-margin-inline-start": {
    propertyAlias: "scroll-ms",
    useRawValue: true,
    valueAliases: null,
  },
  "scroll-margin-inline-end": {
    propertyAlias: "scroll-me",
    useRawValue: true,
    valueAliases: null,
  },
  "scroll-margin-top": {
    propertyAlias: "scroll-mt",
    useRawValue: true,
    valueAliases: null,
  },
  "scroll-margin-right": {
    propertyAlias: "scroll-mr",
    useRawValue: true,
    valueAliases: null,
  },
  "scroll-margin-bottom": {
    propertyAlias: "scroll-mb",
    useRawValue: true,
    valueAliases: null,
  },
  "scroll-margin-left": {
    propertyAlias: "scroll-ml",
    useRawValue: true,
    valueAliases: null,
  },

  "scroll-padding": {
    propertyAlias: "scroll-p",
    useRawValue: true,
    valueAliases: null,
  },
  "scroll-padding-inline": {
    propertyAlias: "scroll-px",
    useRawValue: true,
    valueAliases: null,
  },
  "scroll-padding-block": {
    propertyAlias: "scroll-py",
    useRawValue: true,
    valueAliases: null,
  },
  "scroll-padding-inline-start": {
    propertyAlias: "scroll-ps",
    useRawValue: true,
    valueAliases: null,
  },
  "scroll-padding-inline-end": {
    propertyAlias: "scroll-pe",
    useRawValue: true,
    valueAliases: null,
  },
  "scroll-padding-top": {
    propertyAlias: "scroll-pt",
    useRawValue: true,
    valueAliases: null,
  },
  "scroll-padding-right": {
    propertyAlias: "scroll-pr",
    useRawValue: true,
    valueAliases: null,
  },
  "scroll-padding-bottom": {
    propertyAlias: "scroll-pb",
    useRawValue: true,
    valueAliases: null,
  },
  "scroll-padding-left": {
    propertyAlias: "scroll-pl",
    useRawValue: true,
    valueAliases: null,
  },
  "scroll-snap-align": {
    propertyAlias: "snap",
    useRawValue: false,
    valueAliases: null,
  },
  "scroll-snap-stop": {
    propertyAlias: "snap",
    useRawValue: false,
    valueAliases: null,
  },
  "scroll-snap-type": {
    propertyAlias: "snap",
    useRawValue: true,
    valueAliases: null,
  },
  "touch-action": {
    propertyAlias: "touch",
    useRawValue: true,
    valueAliases: null,
  },
  "user-select": {
    propertyAlias: "select",
    useRawValue: false,
    valueAliases: null,
  },
  "will-change": {
    propertyAlias: null,
    useRawValue: false,
    valueAliases: {
      "scroll-position": "scroll",
    },
  },
  fill: {
    propertyAlias: null,
    useRawValue: true,
    valueAliases: {
      none: "none",
      inherit: "inherit",
      currentColor: "current",
      transparent: "transparent",
    },
  },
  stroke: {
    propertyAlias: null,
    valueAliases: {
      none: "none",
      inherit: "inherit",
      currentColor: "current",
      transparent: "transparent",
    },
    useRawValue: true,
  },
  "stroke-width": {
    propertyAlias: "stroke",
    useRawValue: false,
    valueAliases: null,
  },
  "force-color-adjust": {
    propertyAlias: null,
    useRawValue: false,
    valueAliases: null,
  },
};
