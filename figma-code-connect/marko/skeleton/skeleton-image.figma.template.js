// url=https://www.figma.com/design/zEBdEhbonrBOGzZ0fXzWvM/eBay-Evo-Design-System?node-id=89925-103954
const figma = require("figma");

export default {
  example: figma.code`<ebay-skeleton>
  <ebay-skeleton-image />
</ebay-skeleton>`,
  id: "ebay-skeleton-image",
  metadata: {
    // controls how this appears when nested in other components
    nestable: false,
  },
};
