import fs from "node:fs";
import { join, resolve } from "node:path";
import { defineConfig } from "vite";
import { Features } from "lightningcss";
import react from "@vitejs/plugin-react";
import { nodeExternals } from "rollup-plugin-node-externals";
import typescript from "@rollup/plugin-typescript";
import { playwright } from "@vitest/browser-playwright";

const isCI = !!process.env.CI;

const componentEntries = fs
  .readdirSync("./src", { withFileTypes: true })
  .filter(
    (dirent) =>
      dirent.isDirectory() &&
      fs.existsSync(join("./src", dirent.name, "index.ts")),
  )
  .reduce((acc, dirent) => {
    acc[dirent.name] = resolve(
      import.meta.dirname,
      `src/${dirent.name}/index.ts`,
    );
    return acc;
  }, {});

const iconsEntries = fs
  .readdirSync("./src/icon/icons")
  .filter(
    (file) =>
      fs.statSync(`./src/icon/icons/${file}`).isFile() && file.endsWith(".tsx"),
  )
  .reduce((acc, fileName) => {
    acc[join("icon/icons/", fileName.replace(".tsx", ""))] = resolve(
      import.meta.dirname,
      `src/icon/icons/${fileName}`,
    );
    return acc;
  }, {});

export default defineConfig({
  css: {
    lightningcss: {
      // Never rewrite :dir() into the :lang() approximation; direction is
      // set with dir attributes, not language tags.
      exclude: Features.DirSelector,
    },
  },
  plugins: [
    react(),
    nodeExternals({
      // Externalize peer dependencies but bundle makeup-js libraries
      include: [/^makeup-/],
    }),
  ],
  build: {
    lib: {
      entry: {
        ...componentEntries,
        ...iconsEntries,
      },
      formats: ["es"],
    },
    rollupOptions: {
      output: {
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
      exclude: ["src/**/test/**", "src/**/*.stories.tsx", "src/**/*.d.ts"],
    },
    projects: [
      {
        extends: true,
        test: {
          name: "browser",
          setupFiles: ["./test.setup.ts"],
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
