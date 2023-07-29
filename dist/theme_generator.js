"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateColors = exports.generateThemes = exports.themeGenerator = exports.themeColors = void 0;
const colors_1 = __importDefault(require("tailwindcss/colors"));
exports.themeColors = [
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
/**
 * This generates a theme for shadcn-ui. It does hard code the
 */
function themeGenerator(color) {
    const colorVars = ((base) => ({
        light: {
            background: {
                hex: colors_1.default.white,
                name: "white",
            },
            foreground: { hex: colors_1.default[base][950], name: `${base}-950` },
            muted: { hex: colors_1.default[base][100], name: `${base}-100` },
            "muted-foreground": { hex: colors_1.default[base][500], name: `${base}-500` },
            popover: { hex: colors_1.default.white, name: "white" },
            "popover-foreground": { hex: colors_1.default[base][950], name: `${base}-950` },
            border: { hex: colors_1.default[base][200], name: `${base}-200` },
            input: { hex: colors_1.default[base][200], name: `${base}-200` },
            card: { hex: colors_1.default.white, name: "white" },
            "card-foreground": { hex: colors_1.default[base][950], name: `${base}-950` },
            primary: { hex: colors_1.default[base][900], name: `${base}-900` },
            "primary-focus": { hex: colors_1.default[base][950], name: `${base}-950` },
            "primary-foreground": { hex: colors_1.default[base][50], name: `${base}-50` },
            secondary: { hex: colors_1.default[base][100], name: `${base}-100` },
            "secondary-focus": { hex: colors_1.default[base][200], name: `${base}-200` },
            "secondary-foreground": { hex: colors_1.default[base][900], name: `${base}-900` },
            accent: { hex: colors_1.default[base][100], name: `${base}-100` },
            "accent-focus": { hex: colors_1.default[base][200], name: `${base}-200` },
            "accent-foreground": { hex: colors_1.default[base][900], name: `${base}-900` },
            destructive: { hex: colors_1.default.red[500], name: "red-500" },
            "destructive-focus": { hex: colors_1.default[base][600], name: `red-600` },
            "destructive-foreground": { hex: colors_1.default[base][50], name: `${base}-50` },
            ring: { hex: colors_1.default[base][400], name: `${base}-400` },
            info: { hex: colors_1.default.sky[200], name: `sky-200` },
            "info-foreground": { hex: colors_1.default.sky[950], name: `sky-950` },
            success: { hex: colors_1.default.green[300], name: `green-300` },
            "success-foreground": { hex: colors_1.default.green[950], name: `green-950` },
            warning: { hex: colors_1.default.yellow[200], name: `yellow-200` },
            "warning-foreground": { hex: colors_1.default.yellow[950], name: `yellow-950` },
            error: { hex: colors_1.default.red[300], name: `red-300` },
            "error-foreground": { hex: colors_1.default.red[950], name: `red-950` },
        },
        dark: {
            background: { hex: colors_1.default[base][950], name: `${base}-950` },
            foreground: { hex: colors_1.default[base][50], name: `${base}-50` },
            muted: { hex: colors_1.default[base][800], name: `${base}-800` },
            "muted-foreground": { hex: colors_1.default[base][400], name: `${base}-400` },
            popover: { hex: colors_1.default[base][950], name: `${base}-950` },
            "popover-foreground": { hex: colors_1.default[base][50], name: `${base}-50` },
            border: { hex: colors_1.default[base][800], name: `${base}-800` },
            input: { hex: colors_1.default[base][800], name: `${base}-800` },
            card: { hex: colors_1.default[base][950], name: `${base}-950` },
            "card-foreground": { hex: colors_1.default[base][50], name: `${base}-50` },
            primary: { hex: colors_1.default[base][50], name: `${base}-50` },
            "primary-foreground": { hex: colors_1.default[base][900], name: `${base}-900` },
            secondary: { hex: colors_1.default[base][800], name: `${base}-800` },
            "secondary-foreground": { hex: colors_1.default[base][50], name: `${base}-50` },
            accent: { hex: colors_1.default[base][800], name: `${base}-800` },
            "accent-foreground": { hex: colors_1.default[base][50], name: `${base}-50` },
            destructive: { hex: colors_1.default.red[900], name: `${base}-900` },
            "destructive-foreground": { hex: colors_1.default.red[50], name: `${base}-50` },
            ring: { hex: colors_1.default[base][800], name: `${base}-800` },
            info: { hex: colors_1.default.sky[200], name: `sky-200` },
            "info-foreground": { hex: colors_1.default.sky[950], name: `sky-950` },
            success: { hex: colors_1.default.green[300], name: `green-300` },
            "success-foreground": { hex: colors_1.default.green[950], name: `green-950` },
            warning: { hex: colors_1.default.yellow[200], name: `yellow-200` },
            "warning-foreground": { hex: colors_1.default.yellow[950], name: `yellow-950` },
            error: { hex: colors_1.default.red[300], name: `red-300` },
            "error-foreground": { hex: colors_1.default.red[950], name: `red-950` },
        },
    }))(color);
    const printColor = (prop, mode, key) => {
        const color = colorVars[mode][key];
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
        `    ${printColor("--secondary-foreground", "light", "secondary-foreground")}`,
        `  `,
        `    ${printColor("--accent", "light", "accent")}`,
        `    ${printColor("--accent-foreground", "light", "accent-foreground")}`,
        `  `,
        `    ${printColor("--destructive", "light", "destructive")}`,
        `    ${printColor("--destructive-foreground", "light", "destructive-foreground")}`,
        `  `,
        `    ${printColor("--ring", "light", "ring")}`,
        `  `,
        `    --radius: 0.5rem;`,
        `  `,
        `    ${printColor("--info", "light", "info")}`,
        `    ${printColor("--info-foreground", "light", "info-foreground")}`,
        `    ${printColor("--success", "light", "success")}`,
        `    ${printColor("--success-foreground", "light", "success-foreground")}`,
        `    ${printColor("--warning", "light", "warning")}`,
        `    ${printColor("--warning-foreground", "light", "warning-foreground")}`,
        `    ${printColor("--error", "light", "error")}`,
        `    ${printColor("--error-foreground", "light", "error-foreground")}`,
        `  `,
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
        `    ${printColor("--destructive-foreground", "dark", "destructive-foreground")}`,
        `  `,
        `    ${printColor("--ring", "dark", "ring")}`,
        `  `,
        `    --radius: 0.5rem;`,
        `  `,
        `    ${printColor("--info", "dark", "info")}`,
        `    ${printColor("--info-foreground", "dark", "info-foreground")}`,
        `    ${printColor("--success", "dark", "success")}`,
        `    ${printColor("--success-foreground", "dark", "success-foreground")}`,
        `    ${printColor("--warning", "dark", "warning")}`,
        `    ${printColor("--warning-foreground", "dark", "warning-foreground")}`,
        `    ${printColor("--error", "dark", "error")}`,
        `    ${printColor("--error-foreground", "dark", "error-foreground")}`,
        `  `,
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
exports.themeGenerator = themeGenerator;
function generateThemes(colors, dst, writeFileSync) {
    console.log(`Generating themes:`);
    colors.forEach((color, idx) => {
        const themeCss = themeGenerator(color);
        writeFileSync(`${dst}/theme_${color}.css`, themeCss, "utf8");
        console.log(`  - ${color} ${idx === 0 ? "(default)" : ""}`);
    });
    // set the first theme in our list to be the default
    writeFileSync(`${dst}/default.css`, `@import url("./theme_${colors[0]}.css");`, "utf8");
}
exports.generateThemes = generateThemes;
function validateColors(inputColors) {
    let invalidColors = [];
    const colors = inputColors
        .filter((c) => {
        if (exports.themeColors.includes(c)) {
            return true;
        }
        invalidColors.push(c);
        return false;
    })
        .map((c) => c);
    return { colors, invalidColors };
}
exports.validateColors = validateColors;
//# sourceMappingURL=theme_generator.js.map