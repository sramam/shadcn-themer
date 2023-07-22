"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.shadcnPreset = void 0;
const tailwindcss_animate_1 = __importDefault(require("tailwindcss-animate"));
const shadcn_plugin_1 = require("./shadcn-plugin");
const doesThemeExist_1 = require("./doesThemeExist");
const shadcnPreset = ({ theme = "default", themeDir = "./themes", debugDir, } = {
    theme: "default",
    themeDir: `${__dirname}/themes`,
}) => {
    if (!(0, doesThemeExist_1.doesThemeExist)(theme, themeDir)) {
        throw new Error(`Invalid theme specified: '${themeDir}/${theme}'`);
    }
    return {
        content: [],
        darkMode: "class",
        plugins: [
            tailwindcss_animate_1.default,
            (0, shadcn_plugin_1.shadcnPlugin)({
                themeDir,
                theme,
                debugDir,
            }),
        ],
    };
};
exports.shadcnPreset = shadcnPreset;
//# sourceMappingURL=shadcn-preset.js.map