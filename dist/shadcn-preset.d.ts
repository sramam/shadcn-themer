import type { Config } from "tailwindcss";
export type Themes = (themesDir: string) => Record<string, string>;
export declare const shadcnPreset: ({ theme, themesDir, }?: {
    theme?: string | undefined;
    themesDir?: string | undefined;
}) => Config;
export default shadcnPreset;
//# sourceMappingURL=shadcn-preset.d.ts.map