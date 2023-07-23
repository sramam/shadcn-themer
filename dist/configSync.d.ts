import type { Config } from "tailwindcss";
/**
 * Converts async dynamic imports of user specified config into a synchronous operation
 * Tailwind config [doesn't support async functions](https://github.com/tailwindlabs/tailwindcss/issues/11655)
 */
export default function configSync(fPath: string): Config;
//# sourceMappingURL=configSync.d.ts.map