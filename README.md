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
It provides a convenience cli command

```
npx shadcn-themer [dir]
```

This creates a local copy of a default and a few custom themes in `dir`. This serves as a goos starting point to create custom
themes and any extensions you might want your projects.

`dir` defaults to `./themes` from `cwd`.

If custom themes are used, `tailwind.config.ts` is transformed as below. `theme` & `themesDir` parameters can be set directly or via environment variables as shown.

```
import type { Config } from "tailwindcss";
import { shadcnPreset } from "shadcn-themer";

export default {
  presets: [ await shadcnPreset({
    theme: process.env.THEME
    themesDir: process.env.THEMES_DIR
  })]
  content: [
    './@/**/*.{jsx,tsx}',
	],
} satisfies Config;
```
