const BlockElementRegex = "(?:[A-Z][A-Za-z0-9]*)(?:-[A-Z][A-Za-z0-9]*)*(?:-[a-z][A-Za-z0-9]*)?";
const ModifierRegex = "(?:--[a-z][A-Za-z0-9]*(?:-[a-z0-9][A-Za-z0-9]*)?)?";

export default {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-recess-order",
    "stylelint-prettier/recommended",
  ],
  ignoreFiles: [".idea", ".cache", "dist", "node_modules", "coverage", "docs", "bundle", ".github"],
  configBasedir: ".",
  plugins: ["stylelint-use-logical", "stylelint-gamut"],

  rules: {
    "selector-class-pattern": `^${BlockElementRegex}${ModifierRegex}$`,
    /*"selector-nested-pattern": "^&[.:].*$",*/
    "custom-property-pattern": `^(?:[A-Z][A-Za-z0-9]*)?(?:-[A-Z][A-Za-z0-9]*)*?(?:-?[a-z0-9][A-Za-z0-9]*)?$`,
    "keyframes-name-pattern": `^${BlockElementRegex}$`,
    "csstools/use-logical": "always",
    "gamut/color-no-out-gamut-range": true,
    "function-disallowed-list": ["rgba", "rgb", "lch", "hsl", "lab", "oklab"],
    "color-function-notation": "modern",
    "color-no-hex": true,
    "prettier/prettier": true,
    "declaration-property-value-no-unknown": [
      true,
      {
        ignoreProperties: { "/.*/": ["/anchor.*/"] },
      },
    ],
  },
};
