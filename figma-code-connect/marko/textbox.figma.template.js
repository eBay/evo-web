// url=https://www.figma.com/design/zEBdEhbonrBOGzZ0fXzWvM/eBay-Evo-Design-System?node-id=25465-6418
const figma = require("figma");

export default {
  example: figma.code`<ebay-textbox value="search anything" />`,
  id: "ebay-textbox",
  metadata: {
    // controls how this appears when nested in other components
    nestable: false,
  },
};
