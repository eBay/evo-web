import { defineConfig } from "vite";
import { resolve } from "path";
import { playwright } from "@vitest/browser-playwright";
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
    test: {
        onConsoleLog: () => true,
        globals: true,
        projects: [
            {
                extends: true,
                test: {
                    name: "browser",
                    browser: {
                        enabled: true,
                        provider: playwright(),
                        headless: true,
                        instances: [
                            {
                                browser: "chromium",
                            },
                        ],
                    },
                    include: ["src/**/test.{ts,js}"],
                    setupFiles: ["./test.setup.ts"],
                },
            },
        ],
    },
});
