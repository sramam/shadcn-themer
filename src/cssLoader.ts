import fs from "fs";
import postcss, { Root } from "postcss";
import postcssImport from "postcss-import";
import postcssJs from "postcss-js";
import syncPromise from "synchronized-promise";

const cssLoader = async (fPath: string) =>
  postcss([postcssImport()])
    .process(fs.readFileSync(fPath, "utf8") as any, {
      from: fPath,
      parser: postcss.parse,
    })
    .then((result) => postcssJs.objectify(result.root as Root));

export default syncPromise(cssLoader);
