// url=https://www.figma.com/design/zEBdEhbonrBOGzZ0fXzWvM/eBay-Evo-Design-System?node-id=257326-3248
const figma = require("figma");

export default {
  example: figma.code`<ebay-tooltip>
  <@host>
    <a href="https://www.ebay.com">View options</a>
  </@host>
  <@content>
    <p>Use Access Key 'S' to display settings.</p>
  </@content>
</ebay-tooltip>`,
  id: "ebay-tooltip",
  metadata: {
    // controls how this appears when nested in other components
    nestable: false,
  },
};
