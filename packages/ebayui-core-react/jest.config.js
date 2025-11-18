module.exports = {
    testEnvironment: "jsdom",
    preset: 'ts-jest/presets/default-esm',
    resolver: "jest-pnp-resolver",
    moduleNameMapper: {
        "\\.(css|less)$": "identity-obj-proxy",
    },
    transform: {
        '^.+\\.[tj]sx?$': ['ts-jest', { useESM: true, diagnostics: false }],
    },
    testRegex: "(/__tests__/.*(spec))\\.(tsx?)$",
    transformIgnorePatterns: [
        '[/\\\\]node_modules[/\\\\](?!(@storybook|storybook|ts-dedent|uuid)/)',
         "^.+\\.module\\.(css|less)$"],
    moduleFileExtensions: ["ts", "tsx", "js", "json"],
    modulePathIgnorePatterns: [
        "<rootDir>/build/",
        "<rootDir>/.yarn-cache/v2/", // ignore yarn cache to make it pass Altus CI
        "<rootDir>/build-ebay/", // ignore build-ebay injected on CI
    ],
    // A set of global variables that need to be available in all test environments
    globals: {
        "ts-jest": {
            diagnostics: false, // hide non-essential info
            isolatedModules: true, // skip type checks
        },
    },
    reporters: ["default", "jest-junit"],
    collectCoverageFrom: [
        "src/**/*.{ts,tsx}",
        "!**/__tests__/**/*.{ts,tsx}", // exclude test files
        "!src/components/*/index.ts", // exclude components re-exporter file
        "!src/**/*.stories.tsx",
        "!src/**/index.d.ts",
        "!src/config.ts",
        "!**/node_modules/**",
    ],
    coverageReporters: ["json", "lcov", "text", "cobertura"],
    setupFilesAfterEnv: ["<rootDir>/config/jest/setup-tests.ts"],
};
