// url=https://www.figma.com/design/zEBdEhbonrBOGzZ0fXzWvM/eBay-Evo-Design-System?node-id=65849-91206
const figma = require("figma");
const instance = figma.selectedInstance;

const title = instance.getString("Title");
const showLeadIcon = instance.getBoolean("Show lead icon");
const leadIcon = instance.findInstance("Lead icon");
const showTrailingIcon = instance.getBoolean("Show trailing icon");
const trailingIcon = instance.findInstance("Trailing icon");
const stateVal = instance.getPropertyValue("State");

export default {
  example: figma.code`<ebay-button
  disabled="${stateVal === "Disabled"}"
  href=""
>${
    showLeadIcon &&
    `
  `
  }${showLeadIcon && leadIcon.executeTemplate().example}
  ${title}${
    showTrailingIcon &&
    `
  `
  }${showTrailingIcon && trailingIcon.executeTemplate().example}
</ebay-button>`,
  id: "ebay-button",
  metadata: {
    // controls how this appears when nested in other components
    nestable: false,
  },
};
