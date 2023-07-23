"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.shadcnPreset = void 0;
const tailwindcss_animate_1 = __importDefault(require("tailwindcss-animate"));
const shadcn_plugin_1 = require("./shadcn-plugin");
const resolver_1 = require("./resolver");
const shadcnPreset = ({ theme = "default", themeDir = `${process.cwd()}/node_modules/shadcn-themer/themes`, debugDir, } = {
    theme: "default",
    themeDir: `${process.cwd()}/node_modules/shadcn-themer/themes`,
}) => {
    // resolve relative paths in the calling context
    const resolved = (0, resolver_1.resolveThemeDir)(theme, themeDir);
    return {
        content: [],
        darkMode: "class",
        plugins: [
            tailwindcss_animate_1.default,
            (0, shadcn_plugin_1.shadcnPlugin)({
                themeDir: resolved.themeDir,
                theme: resolved.theme,
                debugDir,
            }),
        ],
    };
};
exports.shadcnPreset = shadcnPreset;
//# sourceMappingURL=shadcn-preset.js.map