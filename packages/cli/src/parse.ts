import * as fs from "node:fs";
import * as path from "node:path";
import * as url from "node:url";

import * as csstree from "css-tree";
import postcss from "postcss";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const parseCss = () => {
  const file = fs.readFileSync(path.resolve(__dirname, "../../components/src/action/Button.css"));

  const root = postcss.parse(file.toString());
  console.log(root.nodes.length);
  root.walk((node) => {
    if (node.type === "rule") {
      console.log(node.type, "|", node.selector, "|");
    }
  });
};

export const parseCss1 = () => {
  const file = fs.readFileSync(path.resolve(__dirname, "../../components/src/action/Button.css"));

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
