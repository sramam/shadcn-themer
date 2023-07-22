export declare const themeColors: string[];
export type ThemeColors = "slate" | "gray" | "zinc" | "neutral" | "stone" | "red" | "orange" | "amber" | "yellow" | "lime" | "green" | "emerald" | "teal" | "cyan" | "sky" | "blue" | "indigo" | "violet" | "purple" | "fuchsia" | "pink" | "rose";
/**
 * This generates a theme for shadcn-ui. It does hard code the
 */
export declare function themeGenerator(color: ThemeColors): string;
export declare function generateThemes(colors: ThemeColors[], dst: string, writeFileSync: (fPath: string, data: string, encoding: "utf8") => void): void;
export declare function validateColors(inputColors: string[]): {
    colors: ThemeColors[];
    invalidColors: string[];
};
//# sourceMappingURL=theme_generator.d.ts.map