# shadcn-ui

A tailwind plugin to wrap shadcn-ui config.

Adapted from [@simonswiss' tutorial](https://www.youtube.com/watch?v=QJlTWj30krw)

## Installation

```
pnpm add sramam/shadcn-themer
```

## Usage

In your tailwind.config.ts

```
import type { Config } from "tailwindcss";
import { shadcnPreset } from "shadcn-themer";

export default {
  presets: [ await shadcnPreset()]
  content: [
    './@/**/*.{jsx,tsx}',
  ],
} satisfies Config;

```

## Custom themes
`shadcn-themer` is designed to make it easy to create custom themes.
It provides a convenience cli command to generate custom themes

```
❯ npx shadcn-themer -h
Usage: npx shadcn-themer [colors] [dir]
 Generates theme files to meet shadcn-ui needs

ARGUMENTS:
  colors - comma-separated-list (multiple themes). See below for available colors.
  dir - directory for generated files. Defaults to './themes'

NOTES:
  - Once generated, the theme files can be renamed
  - Within tailwind.config, they can be used with or without the "theme_" prefix
  - Available colors:
    - slate
    - gray
    - zinc
    - neutral
    - stone
    - red
    - orange
    - amber
    - yellow
    - lime
    - green
    - emerald
    - teal
    - cyan
    - sky
    - blue
    - indigo
    - violet
    - purple
    - fuchsia
    - pink
    - rose
```

To use custom themes, `tailwind.config.ts` is transformed as below. `theme` & `themeDir` parameters can be set directly or via environment variables as shown.

```
import type { Config } from "tailwindcss";
import { shadcnPreset } from "shadcn-themer";

export default {
  presets: [ await shadcnPreset({
    theme: process.env.THEME
    themeDir: process.env.THEME_DIR
  })]
  content: [
    './@/**/*.{jsx,tsx}',
	],
} satisfies Config;
```
