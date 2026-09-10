import fsp from "node:fs/promises";
import { playwright } from "@vitest/browser-playwright";
import { defineConfig } from "vite";
import { Features } from "lightningcss";
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
  css: {
    lightningcss: {
      // Never rewrite :dir() into the :lang() approximation; direction is
      // set with dir attributes, not language tags.
      exclude: Features.DirSelector,
    },
  },
  test: {
    pool: "forks",
    globals: true,
    coverage: {
      enabled: isCI,
      provider: "istanbul",
      reporter: ["json-summary", "html", "cobertura", "lcov"],
      include: ["src/**/*"],
      exclude: [
        "src/**/examples",
        "src/components/evo-icon/icons/",
        "src/**/*.stories.ts",
      ],
    },
    projects: [
      {
        extends: true,
        test: {
          name: "browser",
          browser: {
            provider: playwright(),
            enabled: true,
            headless: true,
            instances: [
              {
                browser: "chromium",
              },
            ],
          },
          include: ["src/**/test.browser.{ts,js}"],
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
    ],
  },
  plugins: [marko({ linked: false }), rawMarkdown],
});
