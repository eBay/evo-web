import js from "@eslint/js";
import prettier from "eslint-config-prettier";
import globals from "globals";
import babelParser from "@babel/eslint-parser";

export default [
    js.configs.recommended,
    prettier,
    {
        languageOptions: {
            parser: babelParser,
            parserOptions: {
                requireConfigFile: false,
                sourceType: "module",
            },
            globals: {
                ...globals.browser,
                ...globals.node,
                ...globals.mocha,
            },
        },
        rules: {
            "no-var": "error",
            "prefer-const": "error",
            "prefer-arrow-callback": "error",
            "prefer-spread": "error",
            "prefer-template": "error",
        },
    },
    {
        ignores: [
            "_cdn/",
            "**/docs/**",
            "dist/",
            "static/",
            "_site",
            "**/*.marko.js",
        ],
    },
];
