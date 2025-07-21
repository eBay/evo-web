// url=https://www.figma.com/design/zEBdEhbonrBOGzZ0fXzWvM/eBay-Evo-Design-System?node-id=25465-6237
const figma = require("figma");

export default {
  example: figma.code`<ebay-select name="formFieldName">
  <@option value="1" text="Option 1"/>
  <@option value="2" text="Option 2"/>
  <@option value="3" text="Option 3"/>
</ebay-select>`,
  id: "ebay-select",
  metadata: {
    // controls how this appears when nested in other components
    nestable: false,
  },
};
