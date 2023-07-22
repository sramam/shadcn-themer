const execaSync = require("execa").sync;
import type { Config } from "tailwindcss";

/**
 * Converts async dynamic imports of user specified config into a synchronous operation
 * Tailwind config [doesn't support async functions](https://github.com/tailwindlabs/tailwindcss/issues/11655)
 */
export default function configSync(fPath: string): Config {
  try {
    // const result = execaSync("node", [`${process.cwd()}/node_modules/shadcn-themer/dist/config/config.js`, fPath]);
    const result = execaSync("node", [
      "-e",
      `import(${fPath}).then((c) => console.log(JSON.stringify(c.default, null, 2)));`,
    ]);
    return JSON.parse(result.stdout);
  } catch (err) {
    console.error(err);
    process.exit(-1);
  }
}
