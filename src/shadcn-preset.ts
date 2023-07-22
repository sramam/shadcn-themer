import type { Config } from "tailwindcss";
import tailwindCssAnimate from "tailwindcss-animate";
import { shadcnPlugin } from "./shadcn-plugin";
import { doesThemeExist } from "./doesThemeExist";

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
  if (!doesThemeExist(theme, themeDir)) {
    throw new Error(`Invalid theme specified: '${themeDir}/${theme}'`);
  }
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
