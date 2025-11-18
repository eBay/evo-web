import fsp from "node:fs/promises";
import { defineConfig } from "vite";
import { playwright } from '@vitest/browser-playwright';
import marko from "@marko/vite";
const isCI = !!process.env.CI;

const markdownMatch = /\.md$/;
const rawMarkdown = {
    name: "markdown-loader",
    async load(id) {
        if (markdownMatch.test(id)) {
            // raw query, read file and return as string
            return `export default ${JSON.stringify(
                await fsp.readFile(id, "utf-8"),
            )}`;
        }
    },
};

export default defineConfig({
    onConsoleLog: () => true,
    optimizeDeps: {
        include: [
            "marko/src/runtime/vdom/hot-reload.js"
        ]
    },
    test: {
        onConsoleLog: () => true,
        globals: true,
        coverage: {
            enabled: isCI,
            reporter: ["json-summary", "html", "cobertura", "lcov"],
            include: ["src/**/*"],
            exclude: [
                "src/**/examples",
                "src/components/ebay-icon/icons/",
                "src/**/*.stories.ts",
                "src/**/*.md(x?)",
                "src/**/*.md",
            ],
        },
        projects: [
            {
                extends: true,
                test: {
                    name: "browser",
                    browser: {
                        enabled: true,
                        provider: playwright(),
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
                extends: true,
                test: {
                    name: "server",
                    environment: "node",
                    include: ["src/**/test.server.{ts,js}"],
                },
            },

        ]
    },

    plugins: [marko({ linked: false }), rawMarkdown],
});
