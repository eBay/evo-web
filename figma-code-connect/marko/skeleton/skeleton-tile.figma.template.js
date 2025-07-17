// url=https://www.figma.com/design/zEBdEhbonrBOGzZ0fXzWvM/eBay-Evo-Design-System?node-id=89178-102271
const figma = require("figma");

export default {
  example: figma.code`<ebay-skeleton>
  <ebay-skeleton-image />
  <ebay-skeleton-text size="large" multiline />
</ebay-skeleton>`,
  id: "ebay-skeleton-tile",
  metadata: {
    // controls how this appears when nested in other components
    nestable: false,
  },
};
