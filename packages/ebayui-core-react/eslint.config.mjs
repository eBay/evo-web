import eslint from "@eslint/js";
import jsxA11y from "eslint-plugin-jsx-a11y";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import storybook from "eslint-plugin-storybook";
import vitest from "@vitest/eslint-plugin";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
    {
        ignores: ["dist", "config", "scripts", ".storybook", "vitest.config.ts", "node_modules", "_site"],
    },
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    ...storybook.configs["flat/recommended"],
    react.configs.flat.recommended,
    jsxA11y.flatConfigs.recommended,
    {
        languageOptions: {
            ...react.configs.flat.recommended.languageOptions,
            ...jsxA11y.flatConfigs.recommended.languageOptions,
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
        settings: {
            react: {
                version: "detect",
            },
        },

        plugins: {
            "react-hooks": reactHooks,
            vitest,
        },

        rules: {
            "no-console": ["error", { allow: ["error", "warn"] }],
            "react/prop-types": "off",
            "react/react-in-jsx-scope": "off",
            ...vitest.configs.recommended.rules,
        },
    },
);
