import fs from "fs";
import postcss, { Root } from "postcss";
import postcssImport from "postcss-import";
import postcssJs from "postcss-js";

const cssLoader = async (fPath: string) => {
  return postcss([postcssImport()])
    .process(fs.readFileSync(fPath, "utf8") as any, {
      from: fPath,
      parser: postcss.parse,
    })
    .then((result) => postcssJs.objectify(result.root as Root))
    .then((cssInJs) => processPostCssObj(cssInJs));
};

cssLoader(process.argv[2]).then((c) => console.log(JSON.stringify(c)));

/**
 * postcssJs.objectify [converts an undefined "value" to true](https://github.com/postcss/postcss-js/blob/main/objectifier.js#L30).
 * We need it to be `{}` for it to be consumed by tailwind. So we'll do the translation here.
 * We put the function within the closure, to allow it to be stringified easily
 */
const processPostCssObj = (cssInJs: postcssJs.CssInJs): postcssJs.CssInJs => {
  const walkObj = <T>(o: T): T | {} => {
    switch (Object.prototype.toString.call(o)) {
      case "[object Object]":
        return Object.fromEntries(
          Object.entries(o as object).map(([key, val]) => [key, walkObj(val)])
        ) as T;
      case "[object Array]":
        return (o as Array<any>).map((elem: any) => walkObj(elem)) as T;
      case "[object Boolean]": {
        // the point of this function. Convert postcss booleans, 
        // (typically true) -> {}
        return {};
      }
      default:
        return o;
    }
  };
  return walkObj(cssInJs) as postcssJs.CssInJs;
};
