// url=https://www.figma.com/design/zEBdEhbonrBOGzZ0fXzWvM/eBay-Evo-Design-System?node-id=64873-99272
const figma = require("figma");

export default {
  example: figma.code`<ebay-page-notice ...input>
  <p>
    <strong>Error:</strong>
    Please take another look at the following:
  </p>
  <p>
    <a href="#">Card number</a>,
    <a href="#">Expiration date</a>,
    &amp;
    <a href="#">Security code</a>
  </p>
</ebay-page-notice>`,
  id: "ebay-page-notice",
  metadata: {
    // controls how this appears when nested in other components
    nestable: false
  },
};