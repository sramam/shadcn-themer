import plugin from "tailwindcss/plugin";
import * as fs from "fs";
import cssLoaderSync from "./cssLoader";
import configSync from "./config";
import type { CssInJs } from "postcss-js";
import { Config } from "tailwindcss";
import { resolveThemeDir } from "./resolver";

export const shadcnPlugin = ({
  themeDir,
  theme,
  debugDir,
}: {
  themeDir: string;
  theme: string;
  debugDir?: string;
}) => {
  // resolve relative paths in the calling context
  const resolved = resolveThemeDir(theme, themeDir);
  // allow the user to specify theme as "theme_a" or "theme_a.css"
  const themeFile = `${resolved.themeDir}/${resolved.theme}`;
  const configFile = `${resolved.themeDir}/config.js`;
  return plugin(
    ({ addBase }) => addBase(loadBaseLayer(themeFile, debugDir)),
    loadConfig(configFile, debugDir)
  );
};

function loadBaseLayer(themeFile: string, debugDir?: string): CssInJs {
  try {
    const cssInJs = cssLoaderSync(themeFile);
    logDebugFile({ debugDir, fname: "cssInJs.json", data: cssInJs });
    const baseLayer = cssInJs["@layer base"];
    logDebugFile({ debugDir, fname: "baseLayer.json", data: baseLayer });
    return baseLayer;
  } catch (err: any) {
    const { message, stack, ...rest } = err;
    logDebugFile({
      debugDir,
      fname: "cssError.txt",
      data: { message, stack, ...rest },
    });
    throw err;
  }
}

function loadConfig(configFile: string, debugDir?: string): Config {
  let config: Config = { content: [] };
  let error: Error | null = null;
  try {
    config = configSync(configFile);
  } catch (err: any) {
    error = err;
  } finally {
    logDebugFile({ debugDir, fname: "config.json", data: config });
    return config;
  }
}

function logDebugFile({
  debugDir,
  fname,
  data,
}: {
  debugDir?: string;
  fname: string;
  data?: any;
}) {
  if (debugDir && !!data) {
    fs.mkdirSync(debugDir, { recursive: true });
    fs.writeFileSync(
      `${debugDir}/${fname}`,
      JSON.stringify(data, null, 2),
      "utf8"
    );
  }
}
