import { defineWorkspace } from "vitest/config";

export default defineWorkspace([
    {
        extends: "vite.config.mjs",
        test: {
            name: "browser",
            browser: {
                enabled: true,
                provider: "playwright",
                headless: true,
                instances: [{
                    browser: "chromium",
                }]
            },
            include: ["src/**/test.browser.{ts,js}"],
            setupFiles: ["./test.setup.ts"]
        },
    },
    {
        extends: "vite.config.mjs",
        test: {
            name: "server",
            environment: "node",
            include: ["src/**/test.server.{ts,js}"],
        },
    },
]);
