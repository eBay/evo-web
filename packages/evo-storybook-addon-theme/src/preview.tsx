import "@ebay/skin/dist/tokens/evo-core.css";
import "@ebay/skin/dist/tokens/evo-light.css";
import "@ebay/skin/dist/tokens/evo-dark.css";
import "./color-scheme.scss";
import "./layout.scss";
import ThemedDocsContainer from "./docs-container";

export default {
  globalTypes: {
    colorScheme: {},
    direction: {
      description: "Text direction",
      toolbar: {
        icon: "transfer",
        items: [
          { type: "reset", icon: "transfer", title: "System" },
          { value: "ltr", icon: "arrowright", title: "LTR" },
          { value: "rtl", icon: "arrowleft", title: "RTL" },
        ],
      },
    },
  },
  decorators: [
    (story: () => unknown, context: { globals: { direction?: string } }) => {
      const { direction } = context.globals;
      if (direction === "ltr" || direction === "rtl") {
        document.documentElement.dir = direction;
      } else {
        document.documentElement.removeAttribute("dir");
      }
      return story();
    },
  ],
  parameters: {
    layout: "centered",
    docs: {
      container: ThemedDocsContainer,
    },
  },
};
