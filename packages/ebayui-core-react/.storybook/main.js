export default {
    stories: ["../src/**/__tests__/*.stories.tsx"],
    typescript: {
        check: false,
        reactDocgen: "react-docgen-typescript",
        reactDocgenTypescriptOptions: {
            compilerOptions: {
                allowSyntheticDefaultImports: false,
                esModuleInterop: false,
            },
            // Including every inherited prop makes docgen walk the full
            // React/DOM type surface for all ~1200 components, which runs the
            // build out of memory as of storybook 10.6.
            propFilter: (prop) =>
                prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
        },
    },
    addons: ["@storybook/addon-a11y", "@storybook/addon-docs"],

    framework: {
        name: "@storybook/react-vite",
        options: {
            builder: {
                viteConfigPath: "./.storybook/vite.config.mjs",
            },
        },
    },

    docs: {
        defaultName: "Documentation",
        autodocs: "tag",
    },

    core: {
        disableTelemetry: true,
        disableWhatsNewNotifications: true,
    },
};
