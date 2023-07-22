import type { CssInJs } from "postcss-js";
/**
 * Converts async css loading into a synchronous operation.
 * Tailwind config [doesn't support async functions](https://github.com/tailwindlabs/tailwindcss/issues/11655)
 */
export default function cssLoaderSync(fPath: string): CssInJs;
//# sourceMappingURL=index.d.ts.map