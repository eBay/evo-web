// url=https://www.figma.com/design/zEBdEhbonrBOGzZ0fXzWvM/eBay-Evo-Design-System?node-id=88945-103105
const figma = require("figma");

export default {
  example: figma.code`<ebay-skeleton>
  <ebay-skeleton-avatar />
</ebay-skeleton>`,
  id: "ebay-skeleton-avatar",
  metadata: {
    // controls how this appears when nested in other components
    nestable: false,
  },
};
