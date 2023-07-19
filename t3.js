const cssLoader = require("./dist/cssLoader").default;

cssLoader("./themes/style.css").then((r) => console.log(JSON.stringify(r)));
