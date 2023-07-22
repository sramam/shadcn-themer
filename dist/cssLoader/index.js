"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const execaSync = require("execa").sync;
/**
 * Converts async css loading into a synchronous operation.
 * Tailwind config [doesn't support async functions](https://github.com/tailwindlabs/tailwindcss/issues/11655)
 */
function cssLoaderSync(fPath) {
    try {
        const result = execaSync("node", [`${__dirname}/cssLoader.js`, fPath]);
        return JSON.parse(result.stdout);
    }
    catch (err) {
        console.error(err);
        process.exit(-1);
    }
}
exports.default = cssLoaderSync;
//# sourceMappingURL=index.js.map