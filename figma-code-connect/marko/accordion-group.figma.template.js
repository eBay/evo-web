// url=https://www.figma.com/design/zEBdEhbonrBOGzZ0fXzWvM/eBay-Evo-Design-System?node-id=256381-3831
const figma = require("figma");

export default {
  example: figma.code`<ebay-accordion ...input>
  <@details>
    <@summary>Item 1</@summary>
    <p>Lorem ipsum dolor sit amet.</p>
  </@details>
  <@details>
    <@summary>Item 2</@summary>
    <p>Lorem ipsum dolor sit amet.</p>
  </@details>
  <@details>
    <@summary>Item 3</@summary>
    <p>Lorem ipsum dolor sit amet.</p>
  </@details>
</ebay-accordion>`,
  id: "ebay-accordion-group",
  metadata: {
    // controls how this appears when nested in other components
    nestable: false
  },
};
