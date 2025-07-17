// url=https://www.figma.com/design/zEBdEhbonrBOGzZ0fXzWvM/eBay-Evo-Design-System?node-id=72990-81100
const figma = require("figma");

export default {
  example: figma.code`<ebay-progress-stepper a11yHeadingText='Shipment progress' defaultState="attention">
  <@step>
    <@title>Started</@title>
    July 3rd
  </@step>
  <@step>
    <@title>Shipped</@title>
    July 4th
  </@step>
  <@step current>
    <@title>In Progress</@title>
    July 5th
  </@step>
  <@step>
    <@title>Delivered</@title>
    July 6th
  </@step>
</ebay-progress-stepper>`,
  id: "ebay-progress-stepper",
  metadata: {
    // controls how this appears when nested in other components
    nestable: false,
  },
};
