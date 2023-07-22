import * as fs from "fs";
import * as path from "path";

export function resolveThemeDir(theme: string, themeDir: string): string {
  themeDir = resolvedDir(themeDir) || resolvedDir(`${__dirname}/../themes`)!;
  if (!resolveTheme(theme, themeDir)) {
    throw new Error(`Invalid theme specified: '${themeDir}/${theme}'`);
  }
  return themeDir;
}

const resolvedDir = (fPath: string) => {
  fPath = path.resolve(fPath);
  try {
    fs.statSync(fPath);
    return fPath;
  } catch {
    return null;
  }
};

function resolveTheme(theme: string, themeDir: string): string {
  const cssFiles = fs
    .readdirSync(themeDir, {
      encoding: "utf8",
      withFileTypes: true,
    })
    .filter(
      (f) =>
        f.isFile() &&
        f.name.endsWith(".css") &&
        [theme, `${theme}.css`].includes(f.name)
    );
  return themeDir;
}
