"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const execaSync = require("execa").sync;
/**
 * Converts async dynamic imports of user specified config into a synchronous operation
 * Tailwind config [doesn't support async functions](https://github.com/tailwindlabs/tailwindcss/issues/11655)
 */
function configSync(fPath) {
    try {
        const result = execaSync("node", [`${__dirname}/config.js`, fPath]);
        return JSON.parse(result.stdout);
    }
    catch (err) {
        console.error(err);
        process.exit(-1);
    }
}
exports.default = configSync;
//# sourceMappingURL=index.js.map