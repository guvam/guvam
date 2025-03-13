import * as fs from "node:fs";
import * as path from "node:path";
import * as url from "node:url";

import * as csstree from "css-tree";
import postcss from "postcss";

import { toTailwindPlugin } from "./parsers/tailwind";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const parseCss = () => {
  const file = fs.readFileSync(
    path.resolve(__dirname, "../../components/themes/website/Button.css")
  );

  const root = postcss.parse(file.toString());
  postcss([toTailwindPlugin])
    .process(root, { from: undefined })
    .then((res) => {
      console.log(res.css);
      // fs.writeFileSync(
      //   path.resolve(__dirname, "../../components/themes/website/Button.css"),
      //   res.css
      // );
    });
};

export const parseCss1 = () => {
  const file = fs.readFileSync(
    path.resolve(__dirname, "../../components/themes/website/Button.css")
  );

  // parse CSS to AST
  const ast = csstree.parse(file.toString());

  // traverse AST and modify it
  csstree.walk(ast, (node) => {
    if (node.type === "ClassSelector" && node.name === "example") {
      node.name = "hello";
    }
  });

  console.log(csstree.generate(ast));
};
