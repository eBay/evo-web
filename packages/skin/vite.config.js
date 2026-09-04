import { defineConfig } from "vite";
import { Features } from "lightningcss";
import { resolve } from "path";
export default defineConfig({
    css: {
        lightningcss: {
            // Never rewrite :dir() into the :lang() approximation; direction is
            // set with dir attributes, not language tags.
            exclude: Features.DirSelector,
        },
    },
    base: process.env.BASE_URL,
    resolve: {
        alias: {
            "@ebay/design-tokens": resolve(
                __dirname,
                "../../node_modules/@ebay/design-tokens",
            ),
        },
    },
});
