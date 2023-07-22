"use strict";
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
const fs_1 = __importDefault(require("fs"));
const postcss_1 = __importDefault(require("postcss"));
const postcss_import_1 = __importDefault(require("postcss-import"));
const postcss_js_1 = __importDefault(require("postcss-js"));
const cssLoader = (fPath) => __awaiter(void 0, void 0, void 0, function* () {
    return (0, postcss_1.default)([(0, postcss_import_1.default)()])
        .process(fs_1.default.readFileSync(fPath, "utf8"), {
        from: fPath,
        parser: postcss_1.default.parse,
    })
        .then((result) => postcss_js_1.default.objectify(result.root))
        .then((cssInJs) => processPostCssObj(cssInJs));
});
cssLoader(process.argv[2]).then((c) => console.log(JSON.stringify(c)));
/**
 * postcssJs.objectify [converts an undefined "value" to true](https://github.com/postcss/postcss-js/blob/main/objectifier.js#L30).
 * We need it to be `{}` for it to be consumed by tailwind. So we'll do the translation here.
 * We put the function within the closure, to allow it to be stringified easily
 */
const processPostCssObj = (cssInJs) => {
    const walkObj = (o) => {
        switch (Object.prototype.toString.call(o)) {
            case "[object Object]":
                return Object.fromEntries(Object.entries(o).map(([key, val]) => [key, walkObj(val)]));
            case "[object Array]":
                return o.map((elem) => walkObj(elem));
            case "[object Boolean]": {
                // the point of this function. Convert postcss booleans, 
                // (typically true) -> {}
                return {};
            }
            default:
                return o;
        }
    };
    return walkObj(cssInJs);
};
//# sourceMappingURL=cssLoader.js.map