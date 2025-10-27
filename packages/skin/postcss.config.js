const path = require("path");

module.exports = (ctx) => ({
    plugins: [
        require("postcss-import")({
            path: ["../../node_modules"],
        }),
        require("autoprefixer"),
        require("cssnano")({
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
