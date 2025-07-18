// url=https://www.figma.com/design/zEBdEhbonrBOGzZ0fXzWvM/eBay-Evo-Design-System?node-id=137211-228217
const figma = require("figma");

export default {
  example: figma.code`<ebay-combobox name="example">
  <@option text="August Campaign"/>
  <@option text="4th of July Sale (paused)"/>
  <@option text="Basic Offer"/>
  <@option text="Basic Offer 1"/>
  <@option text="Basic Offer 3"/>
</ebay-combobox>`,
  id: "ebay-combobox",
  metadata: {
    // controls how this appears when nested in other components
    nestable: false
  },
};
