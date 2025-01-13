"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const scheme_1 = __importDefault(require("./scheme"));
const font_sizes_1 = __importDefault(require("./font-sizes"));
const colors_1 = __importDefault(require("./colors"));
const gwindTheme = {
    container: scheme_1.default.CONTAINER,
    fontSize: font_sizes_1.default.SIZES,
    fontWeight: font_sizes_1.default.WEIGHTS,
    colors: Object.assign(Object.assign({}, colors_1.default), scheme_1.default.COLORS),
    extend: Object.assign(Object.assign(Object.assign(Object.assign({}, scheme_1.default.METRICS), scheme_1.default.SPACE_TOKENS), scheme_1.default.GWIND_SHADOWS), scheme_1.default.FONT_FAMILY),
};
exports.default = gwindTheme;
