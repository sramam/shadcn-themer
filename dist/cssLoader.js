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
function cssLoader(fPath) {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, postcss_1.default)([(0, postcss_import_1.default)()])
            .process(fs_1.default.readFileSync(fPath, "utf8"), {
            from: fPath,
            parser: postcss_1.default.parse,
        })
            .then((result) => postcss_js_1.default.objectify(result.root));
    });
}
exports.default = cssLoader;
