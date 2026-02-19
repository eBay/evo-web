import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { nodeExternals } from "rollup-plugin-node-externals";
import typescript from "@rollup/plugin-typescript";
import { playwright } from "@vitest/browser-playwright";

const isCI = !!process.env.CI;

export default defineConfig({
  plugins: [
    react(),
    nodeExternals({
      // Externalize peer dependencies but bundle makeup-js libraries
      include: [/^makeup-/],
    }),
  ],
  build: {
    lib: {
      entry: "./src/index.ts",
      formats: ["es"],
    },
    rollupOptions: {
      output: {
        preserveModules: true,
        preserveModulesRoot: "src",
        entryFileNames: "[name].js",
        banner: `"use client";\n`,
      },
      plugins: [
        typescript({
          // We use a different tsconfig for building so vite doesn't generate types for tests,
          // but we still want to have typescript checking for test files.
          tsconfig: "./tsconfig.prod.json",
          declaration: true,
          declarationMap: true,
          outDir: "./dist",
        }),
      ],
    },
    sourcemap: true,
    minify: false,
    target: "es2020",
  },
  test: {
    globals: true,
    pool: "forks",
    coverage: {
      enabled: isCI,
      provider: "v8",
      reporter: ["json-summary", "html", "cobertura", "lcov"],
      include: ["src/**/*.{ts,tsx}"],
      exclude: [
        "src/**/test/**",
        "src/**/*.stories.tsx",
        "src/**/*.d.ts",
        "src/index.ts",
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
            instances: [
              {
                browser: "chromium",
              },
            ],
          },
          include: ["src/**/test.browser.{ts,tsx}"],
        },
      },
      {
        extends: true,
        test: {
          name: "server",
          environment: "node",
          include: ["src/**/test.server.{ts,tsx}"],
        },
      },
    ],
  },
});
