"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.gwindThemeConfig = void 0;
const theme_1 = __importDefault(require("./theme"));
const colors_1 = __importDefault(require("./colors"));
const default_1 = __importDefault(require("./default"));
const font_sizes_1 = __importDefault(require("./font-sizes"));
const scheme_1 = __importDefault(require("./scheme"));
exports.gwindThemeConfig = {
    colors: colors_1.default,
    default: default_1.default,
    fontSizes: font_sizes_1.default,
    scheme: scheme_1.default,
};
exports.default = theme_1.default;
