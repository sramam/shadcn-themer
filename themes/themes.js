/** @type {(themesDir: string) => Record<string, string>} */
export const themes = (themesDir = "./themes") => ({
  default: `${themesDir}/default.css`,
  theme_a: `${themesDir}/theme_a.css`,
  theme_b: `${themesDir}/theme_b.css`,
  theme_c: `${themesDir}/theme_c.css`,
});
