import type { Config } from "tailwindcss";
import tailwindCssAnimate from "tailwindcss-animate";
import { shadcnPlugin } from "./shadcn-plugin";
import syncPromise from "synchronized-promise";

export type Themes = (themesDir: string) => Record<string, string>;

function selectTheme({
  theme,
  themesDir,
}: {
  theme: string;
  themesDir: string;
}) {
  // convert the async import to a sync method. It seems
  // tailwind struggled to deal with config which is promise.
  const importer = syncPromise((pkg: string) => import(pkg));
  const Themer = importer(`${themesDir}/themes.js`);
  const themes = Themer(themesDir);
  if (!Object.keys(themes).includes(theme)) {
    throw new Error(`Unknown theme '${theme}' requested`);
  }
  return themes(themesDir)[theme];
}

export const shadcnPreset = (
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
): Config => ({
  content: [],
  darkMode: "class",
  plugins: [
    tailwindCssAnimate,
    shadcnPlugin(
      selectTheme({
        theme,
        themesDir,
      })
    ),
  ],
});

export default shadcnPreset;
