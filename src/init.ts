import { generateThemes, validateColors } from "./theme_generator";
import * as fs from "fs";

const { colors } = validateColors(
  "slate,sky,neutral".split(",").map((c) => c.trim())
);
generateThemes(colors, `${__dirname}/../themes`, fs.writeFileSync);
