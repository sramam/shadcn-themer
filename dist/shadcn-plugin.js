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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.shadcnPlugin = void 0;
const plugin_1 = __importDefault(require("tailwindcss/plugin"));
const fs = __importStar(require("fs"));
const cssLoader_1 = __importDefault(require("./cssLoader"));
const config_1 = __importDefault(require("./config"));
const resolver_1 = require("./resolver");
const shadcnPlugin = ({ themeDir, theme, debugDir, }) => {
    // resolve relative paths in the calling context
    const resolved = (0, resolver_1.resolveThemeDir)(theme, themeDir);
    // allow the user to specify theme as "theme_a" or "theme_a.css"
    const themeFile = `${resolved.themeDir}/${resolved.theme}`;
    const configFile = `${resolved.themeDir}/config.js`;
    return (0, plugin_1.default)(({ addBase }) => addBase(loadBaseLayer(themeFile, debugDir)), loadConfig(configFile, debugDir));
};
exports.shadcnPlugin = shadcnPlugin;
function loadBaseLayer(themeFile, debugDir) {
    try {
        const cssInJs = (0, cssLoader_1.default)(themeFile);
        logDebugFile({ debugDir, fname: "cssInJs.json", data: cssInJs });
        const baseLayer = cssInJs["@layer base"];
        logDebugFile({ debugDir, fname: "baseLayer.json", data: baseLayer });
        return baseLayer;
    }
    catch (err) {
        const { message, stack } = err, rest = __rest(err, ["message", "stack"]);
        logDebugFile({
            debugDir,
            fname: "cssError.txt",
            data: Object.assign({ message, stack }, rest),
        });
        throw err;
    }
}
function loadConfig(configFile, debugDir) {
    let config = { content: [] };
    let error = null;
    try {
        config = (0, config_1.default)(configFile);
    }
    catch (err) {
        error = err;
    }
    finally {
        logDebugFile({ debugDir, fname: "config.json", data: config });
        return config;
    }
}
function logDebugFile({ debugDir, fname, data, }) {
    if (debugDir && !!data) {
        fs.mkdirSync(debugDir, { recursive: true });
        fs.writeFileSync(`${debugDir}/${fname}`, JSON.stringify(data, null, 2), "utf8");
    }
}
//# sourceMappingURL=shadcn-plugin.js.map