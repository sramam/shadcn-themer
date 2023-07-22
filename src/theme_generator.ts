import colors from "tailwindcss/colors";

export const themeColors = [
  "slate",
  "gray",
  "zinc",
  "neutral",
  "stone",
  "red",
  "orange",
  "amber",
  "yellow",
  "lime",
  "green",
  "emerald",
  "teal",
  "cyan",
  "sky",
  "blue",
  "indigo",
  "violet",
  "purple",
  "fuchsia",
  "pink",
  "rose",
];

export type ThemeColors =
  | "slate"
  | "gray"
  | "zinc"
  | "neutral"
  | "stone"
  | "red"
  | "orange"
  | "amber"
  | "yellow"
  | "lime"
  | "green"
  | "emerald"
  | "teal"
  | "cyan"
  | "sky"
  | "blue"
  | "indigo"
  | "violet"
  | "purple"
  | "fuchsia"
  | "pink"
  | "rose";

/**
 * This generates a theme for shadcn-ui. It does hard code the
 */
export function themeGenerator(color: ThemeColors): string {
  const colorVars = ((base) => ({
    light: {
      background: {
        hex: colors.white,
        name: "white",
      },
      foreground: { hex: colors[base][950], name: `${base}-950` },
      muted: { hex: colors[base][100], name: `${base}-100` },
      "muted-foreground": { hex: colors[base][500], name: `${base}-500` },
      popover: { hex: colors.white, name: "white" },
      "popover-foreground": { hex: colors[base][950], name: `${base}-950` },
      border: { hex: colors[base][200], name: `${base}-200` },
      input: { hex: colors[base][200], name: `${base}-200` },
      card: { hex: colors.white, name: "white" },
      "card-foreground": { hex: colors[base][950], name: `${base}-950` },
      primary: { hex: colors[base][900], name: `${base}-900` },
      "primary-foreground": { hex: colors[base][50], name: `${base}-50` },
      secondary: { hex: colors[base][100], name: `${base}-100` },
      "secondary-foreground": { hex: colors[base][900], name: `${base}-900` },
      accent: { hex: colors[base][100], name: `${base}-100` },
      "accent-foreground": { hex: colors[base][900], name: `${base}-900` },
      destructive: { hex: colors.red[500], name: "red-500" },
      "destructive-foreground": { hex: colors[base][50], name: `${base}-50` },
      ring: { hex: colors[base][400], name: `${base}-400` },
    },
    dark: {
      background: { hex: colors[base][950], name: `${base}-950` },
      foreground: { hex: colors[base][50], name: `${base}-50` },
      muted: { hex: colors[base][800], name: `${base}-800` },
      "muted-foreground": { hex: colors[base][400], name: `${base}-400` },
      popover: { hex: colors[base][950], name: `${base}-950` },
      "popover-foreground": { hex: colors[base][50], name: `${base}-50` },
      border: { hex: colors[base][800], name: `${base}-800` },
      input: { hex: colors[base][800], name: `${base}-800` },
      card: { hex: colors[base][950], name: `${base}-950` },
      "card-foreground": { hex: colors[base][50], name: `${base}-50` },
      primary: { hex: colors[base][50], name: `${base}-50` },
      "primary-foreground": { hex: colors[base][900], name: `${base}-900` },
      secondary: { hex: colors[base][800], name: `${base}-800` },
      "secondary-foreground": { hex: colors[base][50], name: `${base}-50` },
      accent: { hex: colors[base][800], name: `${base}-800` },
      "accent-foreground": { hex: colors[base][50], name: `${base}-50` },
      destructive: { hex: colors.red[900], name: `${base}-900` },
      "destructive-foreground": { hex: colors.red[50], name: `${base}-50` },
      ring: { hex: colors[base][800], name: `${base}-800` },
    },
  }))(color);

  const printColor = (prop: string, mode: "light" | "dark", key: string) => {
    const color = (colorVars as any)[mode][key];
    const hex = `${prop}: ${color.hex};`.padEnd(34, " ");
    return `${hex}  /* ${color.name} */`;
  };

  return [
    `@tailwind base;`,
    `@tailwind components;`,
    `@tailwind utilities;`,
    ``,
    `@layer base {`,
    `  :root {`,
    `    ${printColor("--background", "light", "background")}`,
    `    ${printColor("--foreground", "light", "foreground")}`,
    `  `,
    `    ${printColor("--muted", "light", "muted")}`,
    `    ${printColor("--muted-foreground", "light", "muted-foreground")}`,
    `  `,
    `    ${printColor("--popover", "light", "popover")}`,
    `    ${printColor("--popover-foreground", "light", "popover-foreground")}`,
    `  `,
    `    ${printColor("--card", "light", "card")}`,
    `    ${printColor("--card-foreground", "light", "card-foreground")}`,
    `  `,
    `    ${printColor("--border", "light", "border")}`,
    `    ${printColor("--input", "light", "input")}`,
    `  `,
    `    ${printColor("--primary", "light", "primary")}`,
    `    ${printColor("--primary-foreground", "light", "primary-foreground")}`,
    `  `,
    `    ${printColor("--secondary", "light", "secondary")}`,
    `    ${printColor("--secondary-foreground", 
      "light",
      "secondary-foreground"
    )}`,
    `  `,
    `    ${printColor("--accent", "light", "accent")}`,
    `    ${printColor("--accent-foreground", "light", "accent-foreground")}`,
    `  `,
    `    ${printColor("--destructive", "light", "destructive")}`,
    `    ${printColor("--destructive-foreground", 
      "light",
      "destructive-foreground"
    )}`,
    `  `,
    `    ${printColor("--ring", "light", "ring")}`,
    `  `,
    `    --radius: 0.5rem;`,
    `  }`,
    `  `,
    `  .dark {`,
    `    ${printColor("--background", "dark", "background")}`,
    `    ${printColor("--foreground", "dark", "foreground")}`,
    `  `,
    `    ${printColor("--muted", "dark", "muted")}`,
    `    ${printColor("--muted-foreground", "dark", "muted-foreground")}`,
    `  `,
    `    ${printColor("--popover", "dark", "popover")}`,
    `    ${printColor("--popover-foreground", "dark", "popover-foreground")}`,
    `  `,
    `    ${printColor("--card", "dark", "card")}`,
    `    ${printColor("--card-foreground", "dark", "card-foreground")}`,
    `  `,
    `    ${printColor("--border", "dark", "border")}`,
    `    ${printColor("--input", "dark", "input")}`,
    `  `,
    `    ${printColor("--primary", "dark", "primary")}`,
    `    ${printColor("--primary-foreground", "dark", "primary-foreground")}`,
    `  `,
    `    ${printColor("--secondary", "dark", "secondary")}`,
    `    ${printColor("--secondary-foreground", "dark", "secondary-foreground")}`,
    `  `,
    `    ${printColor("--accent", "dark", "accent")}`,
    `    ${printColor("--accent-foreground", "dark", "accent-foreground")}`,
    `  `,
    `    ${printColor("--destructive", "dark", "destructive")}`,
    `    ${printColor("--destructive-foreground", 
      "dark",
      "destructive-foreground"
    )}`,
    `  `,
    `    --ring: ${colorVars.dark["ring"]};`,
    `  }`,
    `}`,
    `  `,
    `@layer base {`,
    `  * {`,
    `    @apply border-border;`,
    `  }`,
    `  body {`,
    `    @apply bg-background text-foreground;`,
    `  }`,
    `}`,
  ].join("\n");
}

export function generateThemes(
  colors: ThemeColors[],
  dst: string,
  writeFileSync: (fPath: string, data: string, encoding: "utf8") => void
) {
  console.log(`Generating themes:`);
  colors.forEach((color, idx) => {
    const themeCss = themeGenerator(color);
    writeFileSync(`${dst}/theme_${color}.css`, themeCss, "utf8");
    console.log(`  - ${color} ${idx === 0 ? "(default)" : ""}`);
  });
  // set the first theme in our list to be the default
  writeFileSync(
    `${dst}/default.css`,
    `@import url("./theme_${colors[0]}.css");`,
    "utf8"
  );
}

export function validateColors(inputColors: string[]) {
  let invalidColors: string[] = [];
  const colors = inputColors
    .filter((c) => {
      if (themeColors.includes(c)) {
        return true;
      }
      invalidColors.push(c);
      return false;
    })
    .map((c) => c as ThemeColors);
  return { colors, invalidColors };
}
