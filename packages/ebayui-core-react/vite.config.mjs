import fs from "node:fs";
import { resolve } from "node:path";
import { defineConfig } from "vite";
import { nodeExternals } from "rollup-plugin-node-externals";
import typescript from "@rollup/plugin-typescript";
import { cjsInterop } from "vite-plugin-cjs-interop";

// find directories in src that starts with 'ebay-'
let componentEntries = fs
    .readdirSync("./src")
    .filter((file) => fs.statSync(`./src/${file}`).isDirectory() && file.startsWith("ebay-"))
    .reduce(
        (acc, componentName) => {
            acc[componentName] = resolve(__dirname, `src/${componentName}/index.ts`);
            return acc;
        },
        {
            events: resolve(__dirname, "src/events/index.ts"),
            utils: resolve(__dirname, "src/utils/index.ts"),
        },
    );

export default defineConfig({
    plugins: [
        // This plugin will automatically unwrap the default export from CJS dependencies that are specified in the list.
        // https://github.com/eBay/ebayui-core-react/issues/420
        cjsInterop({
            // By default this plugin is only for SSR vite build, here we are in library mode, so we enable "client"
            client: true,
            dependencies: ["makeup-expander", "makeup-typeahead", "makeup-floating-label", "makeup-focusables"],
        }),
        nodeExternals(),
    ],
    build: {
        lib: {
            entry: componentEntries,
            fileName: "[name]/index",
            // Use CommonJS only until we upgrade all packages that uses ui-core-react to use ESM.
            // If we use ESM, the bundle might have both ESM and CJS, which will increase the bundle size,
            // and might cause reference issues.
            formats: ["cjs"],
        },
        rollupOptions: {
            plugins: [typescript()],
        },
    },
});
