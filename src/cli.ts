import * as fs from "fs";
import * as path from "path";
import {
  themeColors,
  ThemeColors,
  generateThemes,
  validateColors,
} from "./theme_generator";

const usage = () =>
  [
    `Usage: npx shadcn-themer [colors] [dir]`,
    ` Generates theme files to meet shadcn-ui needs`,
    ``,
    `ARGUMENTS:`,
    `  colors - comma-separated-list (multiple themes). See below for available colors.`,
    `  dir - directory for generated files. Defaults to './themes'`,
    ``,
    `NOTES:`,
    `  - Once generated, the theme files can be renamed`,
    `  - Within tailwind.config, they can be used with or without the "theme_" prefix`,
    `  - Available colors:\n${themeColors.map((c) => `    - ${c}`).join("\n")}`,
    ``,
  ].join("\n");
async function main() {
  if (["-h", "--help"].includes((process.argv[2] ?? "").toLowerCase())) {
    console.log(usage());
    process.exit(0);
  }
  const { colors, invalidColors } = validateColors(
    (process.argv[2] ?? "slate,sky,neutral").split(",")
  );
  if (invalidColors.length) {
    console.error(`Invalid theme colors: ${invalidColors.join("\n")}\n`);
    console.error(`Valid colors:\n${themeColors.map((c) => `  - ${c}\n`)}`);
    process.exit(-1);
  }
  const dir = process.argv[3] ?? "./themes";

  const dst = path.resolve(dir);
  const src = path.resolve(`${__dirname}/../themes`);
  let stat;
  try {
    stat = fs.statSync(dst, {});
  } catch (err: any) {
    if (err.code !== "ENOENT") {
      throw err;
    }
    fs.mkdirSync(dst, { recursive: true });
    stat = fs.statSync(dst, {});
  }
  if (!stat?.isDirectory()) {
    console.error(usage());
    console.error(` '${dst}' is not a directory`);
    process.exit(-1);
  }
  if (dst === src) {
    console.error(`Source and destination directories have be different`);
    process.exit(-1);
  }
  fs.copyFileSync(`${src}/config.js`, `${dst}/config.js`);
  generateThemes(colors, dst, fs.writeFileSync);
  console.log(`\ncustom shadcn-ui themes initialized to '${dir}'`);
}

main();
