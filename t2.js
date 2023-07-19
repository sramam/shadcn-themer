require("dotenv").config();
const postcss = require("postcss");
const postcssImport = require("postcss-import");
const postcssJs = require("postcss-js");
// const cssToJs = (css: string) => postcssJs.objectify(postcss.parse(css));

const fs = require("fs");

async function cssToJs(fPath) {
  console.log({ fPath });
  return postcss([postcssImport()])
    // .use(postcssImport())
    .process(fs.readFileSync(fPath, "utf8"), { from: fPath,  parser: postcss.parse})
    .then((result) => postcssJs.objectify(result.root));
}


cssToJs("./themes/style.css")
  .then((b) => console.log(JSON.stringify(b, null, 2)))
  // .catch((err) => {
  //   const { reason, line, column, file } = err;
  //   throw new Error(`${file}:${line}:${column}: ${reason}`);
  // })
  .then(() => console.log({ THEME: process.env.THEME }));

// const o = postcssJs.objectify(root)
// const s = JSON.stringify(o, null, 2);

// console.log(s);
