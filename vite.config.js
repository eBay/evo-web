import { resolve } from "path";
import { defineConfig } from "vite";
import { patchCssModules } from "vite-css-modules";

export default defineConfig({
  base: process.env.BASE_URL,
  plugins: [
    patchCssModules({
      exportMode: "named",
      generateSourceTypes: true,
    }),
  ],
  resolve: {
    alias: {
      "@ebay/design-tokens": resolve(
        __dirname,
        "node_modules/@ebay/design-tokens",
      ),
    },
  },
});
