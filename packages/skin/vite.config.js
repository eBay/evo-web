import { defineConfig } from "vite";

export default defineConfig({
    base: process.env.BASE_URL,
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
                        provider: "playwright",
                        headless: false,
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
