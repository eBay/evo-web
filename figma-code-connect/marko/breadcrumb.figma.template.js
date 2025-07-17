// url=https://www.figma.com/design/zEBdEhbonrBOGzZ0fXzWvM/eBay-Evo-Design-System?node-id=67603-81724
const figma = require("figma");
const instance = figma.selectedInstance;

const page1Text = instance.getString("Page 1");
const page2Text = instance.getString("Page 2");
const page3Text = instance.getString("Page 3");
const page4Text = instance.getString("Page 4");

export default {
  example: figma.code`<ebay-breadcrumbs 
  a11y-heading-text="Current pages"
  a11y-menu-button-text="menu"
>
  ${
    page1Text &&
    `<@item href="">
    ${page1Text}
  </@item>`
  }${
    page2Text &&
    `
  <@item href="">
    ${page2Text}
  </@item>`
  }${
    page3Text &&
    `
  <@item href="">
    ${page3Text}
  </@item>`
  }${
    page4Text &&
    `
  <@item href="">
    ${page4Text}
  </@item>`
  }
</ebay-breadcrumbs>`,
  id: "ebay-breadcrumbs",
  metadata: {
    // controls how this appears when nested in other components
    nestable: false,
  },
};
