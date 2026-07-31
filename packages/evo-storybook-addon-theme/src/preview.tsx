import "@ebay/skin/dist/tokens/evo-core.css";
import "@ebay/skin/dist/tokens/evo-light.css";
import "@ebay/skin/dist/tokens/evo-dark.css";
import "./color-scheme.scss";
import ThemedDocsContainer from "./docs-container";

export default {
  globalTypes: {
    colorScheme: {},
  },
  parameters: {
    docs: {
      container: ThemedDocsContainer,
    },
  },
};
