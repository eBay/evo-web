// url=https://www.figma.com/design/zEBdEhbonrBOGzZ0fXzWvM/eBay-Evo-Design-System?node-id=257326-3250
const figma = require("figma");

export default {
  example: figma.code`<ebay-tourtip a11yCloseText="Dismiss tourtip">
  <@host>
    <p>Lorem ipsum dolor sit amet</p>
  </@host>
  <@heading>Important</@heading>
  <@content>
    <p>This new feature was added.</p>
  </@content>
</ebay-tourtip>`,
  id: "ebay-tourtip",
  metadata: {
    // controls how this appears when nested in other components
    nestable: false,
  },
};
