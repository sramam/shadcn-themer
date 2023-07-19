import type { Config } from "tailwindcss";
import tailwindCssAnimate from "tailwindcss-animate";
import { shadcnPlugin } from "./shadcn-plugin";
// import * as Themer from "../themes/themes";

type Themes = (themesDir: string) => Record<string, string>;

async function selectTheme({
  theme,
  themesDir,
}: {
  theme: string;
  themesDir: string;
}) {
  const Themer = await import(`${themesDir}/themes.js`);
  const themes = Themer(themesDir);
  if (!Object.keys(themes).includes(theme)) {
    throw new Error(`Unknown theme '${theme}' requested`);
  }
  return themes(themesDir)[theme];
}

export const shadcnPreset = async (
  {
    theme = "default",
    themesDir = "./themes",
  }: {
    theme?: string;
    themesDir?: string;
  } = {
    theme: "default",
    themesDir: `${__dirname}/themes`,
  }
): Promise<Config> => ({
  content: [],
  darkMode: "class",
  plugins: [
    tailwindCssAnimate,
    shadcnPlugin(
      await selectTheme({
        theme,
        themesDir,
      })
    ),
  ],
});

export default shadcnPreset;
