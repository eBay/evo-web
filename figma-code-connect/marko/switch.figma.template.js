// url=https://www.figma.com/design/zEBdEhbonrBOGzZ0fXzWvM/eBay-Evo-Design-System?node-id=10385-3
const figma = require("figma");

export default {
  example: figma.code`<ebay-switch checked on-change("emit", "change")/>`,
  id: "ebay-switch",
  metadata: {
    // controls how this appears when nested in other components
    nestable: false
  },
};
