export default {
  stories: ["../src/**/*.stories.tsx"],
  typescript: {
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      compilerOptions: {
        allowSyntheticDefaultImports: true,
        esModuleInterop: true,
      },
    },
  },
  addons: ["@storybook/addon-a11y", "@storybook/addon-docs"],

  framework: {
    name: "@storybook/react-vite",
    options: {
      builder: {
        viteConfigPath: "./.storybook/vite.config.js",
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
