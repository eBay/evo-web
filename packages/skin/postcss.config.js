import { resolve } from "path";
import postcssImport from "postcss-import";
import autoprefixer from "autoprefixer";
import cssnano from "cssnano";

export default (ctx) => ({
    plugins: [
        postcssImport({
            path: [import.meta.dirname, resolve("../../node_modules")],
        }),
        autoprefixer,
        cssnano({
            preset: [
                "default",
                {
                    normalizeWhitespace: ctx.env === "production",
                    rawCache: ctx.env === "production",
                    colormin: ctx.env === "production",
                },
            ],
        }),
    ],
});
