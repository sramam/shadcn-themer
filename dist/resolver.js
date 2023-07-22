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
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveThemeDir = void 0;
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
function resolveThemeDir(theme, themeDir) {
    themeDir = resolvedDir(themeDir) || resolvedDir(`${__dirname}/../themes`);
    if (!resolveTheme(theme, themeDir)) {
        throw new Error(`Invalid theme specified: '${themeDir}/${theme}'`);
    }
    return themeDir;
}
exports.resolveThemeDir = resolveThemeDir;
const resolvedDir = (fPath) => {
    fPath = path.relative(process.cwd(), path.resolve(fPath));
    try {
        fs.statSync(fPath);
        return fPath;
    }
    catch (_a) {
        return null;
    }
};
function resolveTheme(theme, themeDir) {
    const cssFiles = fs
        .readdirSync(themeDir, {
        encoding: "utf8",
        withFileTypes: true,
    })
        .filter((f) => f.isFile() &&
        f.name.endsWith(".css") &&
        [theme, `${theme}.css`].includes(f.name));
    return themeDir;
}
//# sourceMappingURL=resolver.js.map