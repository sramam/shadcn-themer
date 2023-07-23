import type { Config } from "tailwindcss";
import tailwindCssAnimate from "tailwindcss-animate";
import { shadcnPlugin } from "./shadcn-plugin";
import { resolveThemeDir } from "./resolver";

export const shadcnPreset = (
  {
    theme = "default",
    themeDir = `${process.cwd()}/node_modules/shadcn-themer/themes`,
    debugDir,
  }: {
    theme?: string;
    themeDir?: string;
    debugDir?: string;
  } = {
    theme: "default",
    themeDir: `${process.cwd()}/node_modules/shadcn-themer/themes`,
  }
): Config => {
  // resolve relative paths in the calling context
  const resolved = resolveThemeDir(theme, themeDir);
  return {
    content: [],
    darkMode: "class",
    plugins: [
      tailwindCssAnimate,
      shadcnPlugin({
        themeDir: resolved.themeDir,
        theme: resolved.theme,
        debugDir,
      }),
    ],
  };
};
