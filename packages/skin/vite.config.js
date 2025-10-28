import { defineConfig } from "vite";
import { resolve } from "path";
export default defineConfig({
    base: process.env.BASE_URL,
    resolve: {
        alias: {
            "@ebay/design-tokens": resolve(
                __dirname,
                "../../node_modules/@ebay/design-tokens",
            ),
        },
    },
    // css: {
    //     preprocessorOptions: {
    //         sass: {
    //             loadPaths: [
    //                 resolve(__dirname, '../../node_modules'),
    //                 // resolve(__dirname, '../../node_modules/@ebay/design-tokens')
    //             ]
    //         }
    //     }
    // }
});
