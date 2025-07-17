// url=https://www.figma.com/design/zEBdEhbonrBOGzZ0fXzWvM/eBay-Evo-Design-System?node-id=30164-31155
const figma = require("figma");

export default {
  example: figma.code`<ebay-pagination a11y-previous-text="previous" a11y-next-text="next" a11y-current-text="Current page">
	<@item type="previous" href="#" disabled=true />
  <@item href="#" current=true>
		1
	</@item>
  <@item href="#">
		2
	</@item>
  <@item href="#">
		3
	</@item>
  <@item href="#">
    4
	</@item>
  <@item href="#">
		5
	</@item>
  <@item href="#">
    6
	</@item>
  <@item href="#">
    7
	</@item>
  <@item href="#">
    8
	</@item>
  <@item href="#">
    9
  </@item>
  <@item type="next" href="#" disabled=true />
</ebay-pagination>`,
  id: "ebay-pagination",
  metadata: {
    // controls how this appears when nested in other components
    nestable: false,
  },
};
