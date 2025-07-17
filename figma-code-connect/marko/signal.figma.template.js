// url=https://www.figma.com/design/zEBdEhbonrBOGzZ0fXzWvM/eBay-Evo-Design-System?node-id=10051-5
const figma = require("figma");
const instance = figma.selectedInstance;

const type = instance.getPropertyValue("Type");
const status = instance.getEnum("Type", {
  "new listing": "trustworthy",
  "last one": "time-sensitive",
  "great price": "recent",
  "deal ending": "time-sensitive",
  "almost gone": "time-sensitive",
});

export default {
  example: figma.code`<ebay-signal status="${status}">
  ${type}
</ebay-signal>`,
  id: "ebay-signal",
  metadata: {
    // controls how this appears when nested in other components
    nestable: false,
  },
};
