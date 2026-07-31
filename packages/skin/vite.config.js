import { defineConfig } from "vite";
import { resolve } from "path";
export default defineConfig({
    base: process.env.BASE_URL,
    resolve: {
        alias: {
            // The Sass CLI uses physical `dist` imports, which package exports hide
            // from Vite. This alias lets both build paths use the same imports.
            "@ebay/design-tokens": resolve(
                __dirname,
                "node_modules/@ebay/design-tokens",
            ),
        },
    },
});
