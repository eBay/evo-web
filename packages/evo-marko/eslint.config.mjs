import { defineConfig, globalIgnores } from "eslint/config";

import js from "@eslint/js";
import ts from "typescript-eslint";
import globals from "globals";

export default defineConfig([
  globalIgnores([
    "__snapshots__",
    "coverage",
    "dist",
    "node_modules",
    // TODO: Run ESLint on tests & stories
    "**/*test*/**/*",
    "**/*.stories.ts",
  ]),
  {
    files: ["**/*.ts"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.vitest,
        ...globals.node,
      },
    },
    rules: {
      "@typescript-eslint/no-import-type-side-effects": "error",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/no-empty-function": "off",
      "@typescript-eslint/no-explicit-any": "off",
    },
    extends: [js.configs.recommended, ts.configs.recommended],
  },
]);
