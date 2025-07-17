// url=https://www.figma.com/design/zEBdEhbonrBOGzZ0fXzWvM/eBay-Evo-Design-System?node-id=38612-44629
const figma = require("figma");
const instance = figma.selectedInstance;

const number = instance.getString("Number");

export default {
  example: figma.code`<ebay-badge number="${number}" aria-label="${number} unread item"/>`,
  id: "ebay-badge",
  metadata: {
    // controls how this appears when nested in other components
    nestable: false
  },
};
