import fs from "fs";
import postcss, { Root } from "postcss";
import postcssImport from "postcss-import";
import postcssJs, { CssInJs } from "postcss-js";

export default async function cssLoader(fPath: string) {
  return postcss([postcssImport()])
    .process(fs.readFileSync(fPath, "utf8") as any, {
      from: fPath,
      parser: postcss.parse,
    })
    .then((result) => postcssJs.objectify(result.root as Root));
}
