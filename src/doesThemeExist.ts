import * as fs from "fs";

export function doesThemeExist(theme: string, themeDir: string): boolean {
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
  return cssFiles.length > 0;
}
