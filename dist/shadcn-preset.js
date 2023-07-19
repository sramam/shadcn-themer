"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.shadcnPreset = void 0;
const tailwindcss_animate_1 = __importDefault(require("tailwindcss-animate"));
const shadcn_plugin_1 = require("./shadcn-plugin");
function selectTheme({ theme, themesDir, }) {
    return __awaiter(this, void 0, void 0, function* () {
        const Themer = yield Promise.resolve(`${`${themesDir}/themes.js`}`).then(s => __importStar(require(s)));
        const themes = Themer(themesDir);
        if (!Object.keys(themes).includes(theme)) {
            throw new Error(`Unknown theme '${theme}' requested`);
        }
        return themes(themesDir)[theme];
    });
}
const shadcnPreset = ({ theme = "default", themesDir = "./themes", } = {
    theme: "default",
    themesDir: `${__dirname}/themes`,
}) => __awaiter(void 0, void 0, void 0, function* () {
    return ({
        content: [],
        darkMode: "class",
        plugins: [
            tailwindcss_animate_1.default,
            (0, shadcn_plugin_1.shadcnPlugin)(yield selectTheme({
                theme,
                themesDir,
            })),
        ],
    });
});
exports.shadcnPreset = shadcnPreset;
exports.default = exports.shadcnPreset;
//# sourceMappingURL=shadcn-preset.js.map