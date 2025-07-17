// url=https://www.figma.com/design/zEBdEhbonrBOGzZ0fXzWvM/eBay-Evo-Design-System?node-id=25465-5522
const figma = require("figma");
const instance = figma.selectedInstance;

const label = instance.getString("Label");
const value = instance.getString("Input text");

export default {
  example: figma.code`import type { Input as TextboxInput } from "<ebay-textbox>";
export type Input = TextboxInput;

class {}

<span class="field">
  ${
    label &&
    `<label class="field__label field__label--start" for="textbox">
      ${label}
  </label>`
  }
  <ebay-textbox
      ...input
      id="textbox"
      multiline
      value="${value}"
      on-change("emit", "change")
      on-input-change("emit", "inputChange")
      on-focus("emit", "focus")
      on-blur("emit", "blur")
      on-keypress("emit", "keypress")
      on-keyup("emit", "keyup")
      on-keydown("emit", "keydown")
      on-invalid("emit", "invalid")
      on-floating-label-init("emit", "floating-label-init")
      on-button-click("emit", "button-click")
  />
</span>`,
  id: "ebay-textbox-multiline",
  metadata: {
    // controls how this appears when nested in other components
    nestable: false,
  },
};
