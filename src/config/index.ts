const execaSync = require("execa").sync;
import type { Config } from "tailwindcss";

/**
 * Converts async dynamic imports of user specified config into a synchronous operation
 * Tailwind config [doesn't support async functions](https://github.com/tailwindlabs/tailwindcss/issues/11655)
 */
export default function configSync(fPath: string): Config {
  try {
    const result = execaSync("node", [`${__dirname}/config.js`, fPath]);
    return JSON.parse(result.stdout);
  } catch (err) {
    console.error(err);
    process.exit(-1);
  }
}
