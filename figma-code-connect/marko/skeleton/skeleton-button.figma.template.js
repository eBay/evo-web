// url=https://www.figma.com/design/zEBdEhbonrBOGzZ0fXzWvM/eBay-Evo-Design-System?node-id=88945-100989
const figma = require("figma");

export default {
  example: figma.code`<ebay-skeleton>
  <ebay-skeleton-button />
</ebay-skeleton>`,
  id: "ebay-skeleton-button",
  metadata: {
    // controls how this appears when nested in other components
    nestable: false,
  },
};
