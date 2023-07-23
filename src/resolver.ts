import * as fs from "fs";
import * as path from "path";

export function resolveThemeDir(
  theme: string,
  themeDir: string
): { themeDir: string; theme: string } {
  themeDir = resolvedDir(themeDir) || resolvedDir(`${__dirname}/../themes`)!;
  // this allows specifying partial theme names, ('slate' instead of 'theme_slate.css')
  const _theme = resolveTheme(theme, themeDir);
  if (!_theme) {
    throw new Error(`Invalid theme specified: '${themeDir}/${theme}'`);
  }
  return { themeDir, theme: _theme };
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
        [
          theme,
          `${theme}.css`,
          `theme_${theme}`,
          `theme_${theme}.css`,
        ].includes(f.name)
    );
  return cssFiles[0].name;
}
