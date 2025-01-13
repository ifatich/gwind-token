"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const pluginName = 'postcss-gwind';
const baseCssPath = 'node_modules/gwind/dist/styles/base.css';
const postcssGwind = () => {
    return {
        postcssPlugin: pluginName,
        AtRule: {
            gwind: (atRule) => {
                const map = {
                    base: path_1.default.resolve(process.cwd(), baseCssPath)
                };
                const filePath = map[atRule.params.trim()];
                if (!filePath) {
                    throw atRule.error(`Unknown @gwind directive: ${atRule.params}`);
                }
                const fileContent = fs_1.default.readFileSync(path_1.default.resolve(__dirname, filePath), 'utf-8');
                atRule.replaceWith(fileContent);
            },
        },
    };
};
postcssGwind.postcss = true;
module.exports = postcssGwind;
