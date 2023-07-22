import type { Config } from "tailwindcss";
import tailwindCssAnimate from "tailwindcss-animate";
import { shadcnPlugin } from "./shadcn-plugin";
import { resolveThemeDir } from "./resolver";

export const shadcnPreset = (
  {
    theme = "default",
    themeDir = "./themes",
    debugDir,
  }: {
    theme?: string;
    themeDir?: string;
    debugDir?: string;
  } = {
    theme: "default",
    themeDir: `${__dirname}/themes`,
  }
): Config => {
  // resolve relative paths in the calling context
  themeDir = resolveThemeDir(theme, themeDir);
  return {
    content: [],
    darkMode: "class",
    plugins: [
      tailwindCssAnimate,
      shadcnPlugin({
        themeDir,
        theme,
        debugDir,
      }),
    ],
  };
};
