const cssLoader = require("./dist/cssLoader").default;

const cssJson = cssLoader("./themes/style.css"); // .then((r) => console.log(JSON.stringify(r)));
console.log(JSON.stringify(cssJson, null, 2));
