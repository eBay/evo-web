import Prism from "prismjs";
import "prismjs/components/prism-css";
import "prismjs/themes/prism-tomorrow.css";

const bemNames = {
  ":root": ":root",
  ".listbox-button": ".menu-button",
  "span.listbox-button": "span.menu-button",
  ".listbox-button .btn, .listbox-button .button":
    '.button[aria-haspopup="listbox"]',
  "span.listbox-button--fluid, span.listbox-button--fluid .btn, span.listbox-button--fluid .button, span.listbox-button--fluid .expand-btn, span.listbox-button--fluid .expand-button, span.listbox-button--fluid div.listbox-button__listbox":
    "span.menu-button--fluid, .menu-button--fluid .menu-button__dropdown",
  "div.listbox-button__listbox": ".menu-button__dropdown",
  "div.listbox-button__listbox--set-position":
    ".menu-button__dropdown--set-position",
  "div.listbox-button__listbox--fixed": ".menu-button__dropdown--fixed",
  '[dir="rtl"] div.listbox-button__listbox':
    '[dir="rtl"] .menu-button__dropdown',
  '.listbox-button button.btn[aria-expanded="true"] ~ div.listbox-button__listbox, .listbox-button button.button[aria-expanded="true"] ~ div.listbox-button__listbox, button.expand-btn[aria-expanded="true"] ~ div.listbox-button__listbox, button.expand-button[aria-expanded="true"] ~ div.listbox-button__listbox':
    '.menu-button > [aria-expanded="true"] ~ .menu-button__dropdown',
  '.listbox-button button[aria-invalid="true"]':
    '.button[aria-haspopup="listbox"][aria-invalid="true"]',
  '.listbox-button:not(.listbox-button--error) button:not([disabled], [aria-disabled="true"], [aria-invalid="true"]).btn--form, .listbox-button:not(.listbox-button--error) button:not([disabled], [aria-disabled="true"], [aria-invalid="true"]).button--form':
    '.button--form[aria-haspopup="listbox"]:not([disabled], [aria-disabled="true"], [aria-invalid="true"])',
  '.listbox-button:not(.listbox-button--error) button:not([disabled], [aria-disabled="true"], [aria-invalid="true"]).btn--form:active, .listbox-button:not(.listbox-button--error) button:not([disabled], [aria-disabled="true"], [aria-invalid="true"]).btn--form:focus, .listbox-button:not(.listbox-button--error) button:not([disabled], [aria-disabled="true"], [aria-invalid="true"]).btn--form:hover, .listbox-button:not(.listbox-button--error) button:not([disabled], [aria-disabled="true"], [aria-invalid="true"]).button--form:active, .listbox-button:not(.listbox-button--error) button:not([disabled], [aria-disabled="true"], [aria-invalid="true"]).button--form:focus, .listbox-button:not(.listbox-button--error) button:not([disabled], [aria-disabled="true"], [aria-invalid="true"]).button--form:hover':
    '.button--form[aria-haspopup="listbox"]:not([disabled], [aria-disabled="true"], [aria-invalid="true"]):active, .button--form[aria-haspopup="listbox"]:not([disabled], [aria-disabled="true"], [aria-invalid="true"]):focus, .button--form[aria-haspopup="listbox"]:not([disabled], [aria-disabled="true"], [aria-invalid="true"]):hover',
  ".listbox-button button.btn--borderless, .listbox-button button.button--borderless, .listbox-button button.expand-btn--borderless, .listbox-button button.expand-button--borderless":
    '.button--borderless[aria-haspopup="listbox"]',
  ".listbox-button button.btn--borderless:focus, .listbox-button button.button--borderless:focus, .listbox-button button.expand-btn--borderless:focus, .listbox-button button.expand-button--borderless:focus":
    '.button--borderless[aria-haspopup="listbox"]:focus',
  '.listbox-button button.btn--borderless[aria-expanded="true"] ~ .listbox-button__listbox, .listbox-button button.button--borderless[aria-expanded="true"] ~ .listbox-button__listbox, .listbox-button button.expand-btn--borderless[aria-expanded="true"] ~ .listbox-button__listbox, .listbox-button button.expand-button--borderless[aria-expanded="true"] ~ .listbox-button__listbox':
    '.menu-button--borderless > [aria-expanded="true"] ~ .menu-button__dropdown',
  ".listbox-button.listbox-button--form button":
    '.button--form[aria-haspopup="listbox"]',
  '.listbox-button.listbox-button--form button[aria-disabled="true"], .listbox-button.listbox-button--form button[disabled]':
    '.button--form[aria-haspopup="listbox"][aria-disabled="true"], .button--form[aria-haspopup="listbox"][disabled]',
  ".listbox-button.listbox-button--form button:focus":
    '.button--form[aria-haspopup="listbox"]:focus',
  '.listbox-button.listbox-button--form button[aria-invalid="true"]':
    '.button--form[aria-haspopup="listbox"][aria-invalid="true"]',
  ".listbox-button.listbox-button--error button:not(.btn--borderless, .button--borderless)":
    '.button[aria-haspopup="listbox"][aria-invalid="true"]:not(.button--borderless)',
  ".listbox-button .btn__label, .listbox-button .button__label":
    '.button[aria-haspopup="listbox"] .button__label',
  ".listbox-button--expanded .btn__label, .listbox-button--expanded .button__label":
    '.button[aria-haspopup="listbox"][aria-expanded="true"] .button__label',
  ".listbox-button.listbox-button--error button .btn__floating-label, .listbox-button.listbox-button--error button .btn__label, .listbox-button.listbox-button--error button .button__floating-label, .listbox-button.listbox-button--error button .button__label":
    '.button[aria-haspopup="listbox"][aria-invalid="true"] .button__floating-label, .button[aria-haspopup="listbox"][aria-invalid="true"] .button__label',
  ".listbox-button .btn__text, .listbox-button .button__text":
    '.button[aria-haspopup="listbox"] .button__text',
  ".listbox-button__options": ".listbox__options",
  '.listbox-button__options[role="listbox"]:focus .listbox-button__option--active[role="option"]':
    '.listbox__options[role="listbox"]:focus .listbox__option--active[role="option"]',
  '.listbox-button__options[role="listbox"]:focus .listbox-button__option--active[role="option"]::after':
    '.listbox__options[role="listbox"]:focus .listbox__option--active[role="option"]::after',
  ".listbox-button__option svg.icon": ".listbox__option svg.icon",
  'div.listbox-button__option[role="option"][aria-selected="true"] svg.icon':
    'div.listbox__option[role="option"][aria-selected="true"] svg.icon',
  ".listbox-button__description": ".listbox__description",
  'div.listbox-button__option[role="option"]':
    'div.listbox__option[role="option"]',
  'div.listbox-button__option[role="option"]:not(:last-child)':
    'div.listbox__option[role="option"]:not(:last-child)',
  'div.listbox-button__option[role="option"]:focus':
    'div.listbox__option[role="option"]:focus',
  'div.listbox-button__option[role="option"]::after':
    'div.listbox__option[role="option"]::after',
  'div.listbox-button__option[role="option"]:not([disabled], [aria-disabled="true"]):hover::after, div.listbox-button__option[role="option"][href]:hover::after':
    'div.listbox__option[role="option"]:not([disabled], [aria-disabled="true"]):hover::after, div.listbox__option[role="option"][href]:hover::after',
  'div.listbox-button__option[role="option"]:not([disabled], [aria-disabled="true"]):focus-visible::after, div.listbox-button__option[role="option"][href]:focus-visible::after':
    'div.listbox__option[role="option"]:not([disabled], [aria-disabled="true"]):focus-visible::after, div.listbox__option[role="option"][href]:focus-visible::after',
  'div.listbox-button__option[role="option"]:not([disabled], [aria-disabled="true"]):active::after, div.listbox-button__option[role="option"][href]:active::after':
    'div.listbox__option[role="option"]:not([disabled], [aria-disabled="true"]):active::after, div.listbox__option[role="option"][href]:active::after',
  'div.listbox-button__option[role="option"][hidden]':
    'div.listbox__option[role="option"][hidden]',
  'div.listbox-button__option[role="option"]:active':
    'div.listbox__option[role="option"]:active',
  'div.listbox-button__option[role="option"]:disabled, div.listbox-button__option[role="option"][aria-disabled="true"]':
    'div.listbox__option[role="option"]:disabled, div.listbox__option[role="option"][aria-disabled="true"]',
  'div.listbox-button__option[role="option"]:first-child':
    'div.listbox__option[role="option"]:first-child',
  'div.listbox-button__option[role="option"]:last-child':
    'div.listbox__option[role="option"]:last-child',
  'div.listbox-button__option[role="option"]:disabled .listbox-button__description, div.listbox-button__option[role="option"][aria-disabled="true"] .listbox-button__description':
    'div.listbox__option[role="option"]:disabled .listbox__description, div.listbox__option[role="option"][aria-disabled="true"] .listbox__description',
  'div.listbox-button__option--active[role="option"]':
    'div.listbox__option--active[role="option"]',
  "span.listbox-button__value": "span.listbox__value",
  '[dir="rtl"] .listbox-button .btn__label, [dir="rtl"] .listbox-button .button__label':
    '[dir="rtl"] .button[aria-haspopup="listbox"] .button__label',
  ".phone-input, .phone-input .listbox-button":
    ".phone-input, .phone-input__country",
  ".phone-input button.btn, .phone-input button.button":
    ".phone-input__trigger",
  ".phone-input button.btn:focus-visible, .phone-input button.button:focus-visible":
    ".phone-input__trigger:focus-visible",
  ".phone-input button.btn svg.icon:last-child, .phone-input button.button svg.icon:last-child":
    ".phone-input__chevron",
  ".phone-input .listbox-button span.fflag, .phone-input .listbox-button svg.flag":
    ".phone-input__flag",
  ".phone-input .listbox-button__value, .phone-input .listbox__value":
    ".phone-input__value",
  ".phone-input .listbox-button__value svg, .phone-input .listbox__value svg":
    ".phone-input__value .phone-input__flag",
  ".phone-input .listbox-button__value span, .phone-input .listbox__value span":
    ".phone-input__country-name, .phone-input__dial-code",
  ".phone-input .listbox-button__value span:last-child, .phone-input .listbox__value span:last-child":
    ".phone-input__dial-code",
  ".phone-input .listbox-button__value span:first-of-type, .phone-input .listbox__value span:first-of-type":
    ".phone-input__country-name",
  ".phone-input .textbox": ".phone-input__textbox",
  ".phone-input--large": ".phone-input--large",
  ".phone-input--fluid, .phone-input--fluid .textbox":
    ".phone-input--fluid, .phone-input--fluid .phone-input__textbox",
  '.phone-input--readonly .listbox-button button[aria-disabled="true"], .phone-input--readonly .listbox-button button[disabled]':
    '.phone-input--readonly .phone-input__trigger[aria-disabled="true"], .phone-input--readonly .phone-input__trigger[disabled]',
  ".phone-input--readonly .textbox span:first-child":
    ".phone-input--readonly .phone-input__prefix",
  ".phone-input.phone-input--readonly .textbox.textbox":
    ".phone-input--readonly .phone-input__textbox",
  ".phone-input--readonly input.textbox__control[readonly]":
    ".phone-input--readonly .phone-input__control[readonly]",
  ".phone-input--disabled span.fflag, .phone-input--disabled svg.flag":
    ".phone-input--disabled .phone-input__flag",
  ".phone-input--disabled .textbox":
    ".phone-input--disabled .phone-input__textbox",
  ".phone-input--disabled .textbox span:first-child":
    ".phone-input--disabled .phone-input__prefix",
  ".phone-input.phone-input--error .textbox.textbox":
    ".phone-input--error .phone-input__textbox",
  ".phone-input .floating-label .floating-label__label": ".phone-input__label",
  ".phone-input .floating-label .textbox > span:first-child":
    ".phone-input--floating-label .phone-input__prefix",
  ".phone-input .floating-label--large .textbox > span:first-child":
    ".phone-input--floating-label.phone-input--large .phone-input__prefix",
  '[dir="rtl"] .phone-input button.btn, [dir="rtl"] .phone-input button.button':
    '[dir="rtl"] .phone-input__trigger',
  '[dir="rtl"] .phone-input .textbox': '[dir="rtl"] .phone-input__textbox',
  '[dir="rtl"] .phone-input .listbox-button__value span:last-child, [dir="rtl"] .phone-input .listbox__value span:last-child':
    '[dir="rtl"] .phone-input__dial-code',
  ':where(#listbox-comparison [data-bridge="true"]) div.listbox__options[data-listbox-legacy~="options"][role="listbox"]:not(.menu-button__dropdown)':
    '.listbox--embedded .listbox__options[role="listbox"]',
  ':where(#listbox-comparison [data-bridge="true"]) .menu-button__dropdown:where([data-listbox-legacy~="listbox"])':
    ".menu-button__dropdown",
  ':where(#listbox-comparison [data-bridge="true"]) .menu-button__dropdown--set-position:where([data-listbox-legacy~="listbox"])':
    ".menu-button__dropdown--set-position",
  ':where(#listbox-comparison [data-bridge="true"]) .phone-input .menu-button__dropdown:not(.menu-button__dropdown--set-position):where([data-listbox-legacy~="listbox"])':
    ".phone-input__dropdown",
};

const bemNotes = {
  '.listbox-button:not(.listbox-button--error) button:not([disabled], [aria-disabled="true"], [aria-invalid="true"]).btn--form, .listbox-button:not(.listbox-button--error) button:not([disabled], [aria-disabled="true"], [aria-invalid="true"]).button--form':
    'Replaces the .listbox-button--error class: set aria-invalid="true" on the trigger.',
  '.listbox-button:not(.listbox-button--error) button:not([disabled], [aria-disabled="true"], [aria-invalid="true"]).btn--form:active, .listbox-button:not(.listbox-button--error) button:not([disabled], [aria-disabled="true"], [aria-invalid="true"]).btn--form:focus, .listbox-button:not(.listbox-button--error) button:not([disabled], [aria-disabled="true"], [aria-invalid="true"]).btn--form:hover, .listbox-button:not(.listbox-button--error) button:not([disabled], [aria-disabled="true"], [aria-invalid="true"]).button--form:active, .listbox-button:not(.listbox-button--error) button:not([disabled], [aria-disabled="true"], [aria-invalid="true"]).button--form:focus, .listbox-button:not(.listbox-button--error) button:not([disabled], [aria-disabled="true"], [aria-invalid="true"]).button--form:hover':
    'Replaces the .listbox-button--error class: set aria-invalid="true" on the trigger.',
  '.listbox-button button.btn--borderless[aria-expanded="true"] ~ .listbox-button__listbox, .listbox-button button.button--borderless[aria-expanded="true"] ~ .listbox-button__listbox, .listbox-button button.expand-btn--borderless[aria-expanded="true"] ~ .listbox-button__listbox, .listbox-button button.expand-button--borderless[aria-expanded="true"] ~ .listbox-button__listbox':
    "New modifier: add menu-button--borderless when the trigger is borderless.",
  ".listbox-button.listbox-button--error button:not(.btn--borderless, .button--borderless)":
    'Replaces the .listbox-button--error class: set aria-invalid="true" on the trigger.',
  ".listbox-button.listbox-button--error button .btn__floating-label, .listbox-button.listbox-button--error button .btn__label, .listbox-button.listbox-button--error button .button__floating-label, .listbox-button.listbox-button--error button .button__label":
    'Replaces the .listbox-button--error class: set aria-invalid="true" on the trigger.',
  "span.listbox-button--fluid, span.listbox-button--fluid .btn, span.listbox-button--fluid .button, span.listbox-button--fluid .expand-btn, span.listbox-button--fluid .expand-button, span.listbox-button--fluid div.listbox-button__listbox":
    "The trigger takes .button--fluid",
};

const groups = [
  {
    id: "wrapper",
    owner: "Menu Button",
    title: "Inline wrapper and trigger alignment",
    summary: "Anchors the popup and aligns the trigger inline.",
  },
  {
    id: "trigger-padding",
    owner: "Button",
    title: "Trigger padding aligned with options",
    summary: "Trigger padding that lines the value up with the option text.",
  },
  {
    id: "fluid",
    owner: "Menu Button",
    title: "Full-width trigger and popup",
    summary: "Full-width trigger and popup.",
  },
  {
    id: "popup",
    owner: "Menu Button",
    title: "Popup surface, placement and visibility",
    summary: "Popup background, shadow, 8px corners, scrolling and placement.",
  },
  {
    id: "popup-width",
    owner: "Menu Button",
    title: "Intrinsic versus trigger-width popup sizing",
    summary: "Intrinsic or trigger-width popup sizing.",
  },
  {
    id: "field",
    owner: "Button",
    title: "Form-field trigger colors and validation states",
    summary: "Form-field trigger colors, focus, disabled and invalid states.",
  },
  {
    id: "borderless",
    owner: "Button",
    title: "Borderless trigger and focus appearance",
    summary: "Borderless trigger with a focus underline.",
  },
  {
    id: "trigger-label",
    owner: "Button",
    title: "Trigger label, selected value and RTL spacing",
    summary: "Trigger label, selected value, error color and RTL spacing.",
  },
  {
    id: "option-surface",
    owner: "Listbox",
    title: "Options container and embedded background",
    summary: "Options container, transparent inside a popup.",
  },
  {
    id: "active",
    owner: "Listbox",
    title: "Keyboard-active option and state layer",
    summary: "Keyboard-active option highlight and bold text.",
  },
  {
    id: "icons",
    owner: "Listbox",
    title: "Selection tick and status-icon spacing",
    summary: "Selection tick and status-icon spacing.",
  },
  {
    id: "description",
    owner: "Listbox",
    title: "Option descriptions and disabled descriptions",
    summary: "Option descriptions, including disabled ones.",
  },
  {
    id: "option-corners",
    owner: "Listbox",
    title: "First and last option corners",
    summary: "Rounded state layer on the first and last option.",
  },
  {
    id: "options",
    owner: "Listbox",
    title: "Option layout, pointer states, hidden and disabled options",
    summary:
      "Option layout, padding, state layers, hidden and disabled options.",
  },
  {
    id: "value",
    owner: "Listbox",
    title: "Option-value flex sizing and no-wrap text",
    summary: "Option value sizing and no-wrap text.",
  },
  {
    id: "phone-layout",
    owner: "Phone Input",
    title: "Country trigger layout, large and fluid variants",
    summary: "Country picker and textbox layout, large and fluid sizes.",
  },
  {
    id: "phone-join",
    owner: "Phone Input",
    title: "Joined borders, corners and focus seam",
    summary: "Joined borders, split corners and the focus seam.",
  },
  {
    id: "phone-icons",
    owner: "Phone Input",
    title: "Country-flag dimensions and chevron spacing",
    summary: "Country-flag size and chevron spacing.",
  },
  {
    id: "phone-content",
    owner: "Phone Input",
    title: "Country name, dial code and responsive truncation",
    summary: "Country name, dial code and truncation.",
  },
  {
    id: "phone-readonly",
    owner: "Phone Input",
    title: "Read-only compound field",
    summary: "Read-only appearance across the joined field.",
  },
  {
    id: "phone-disabled",
    owner: "Phone Input",
    title: "Disabled flags, textbox border and dial prefix",
    summary: "Disabled flag, textbox border and dial prefix.",
  },
  {
    id: "phone-error",
    owner: "Phone Input",
    title: "Error border across the joined field",
    summary: "Error border across the joined field.",
  },
  {
    id: "phone-floating",
    owner: "Phone Input",
    title: "Floating-label stacking and dial-prefix spacing",
    summary: "Floating-label stacking and dial-prefix spacing.",
  },
  {
    id: "phone-rtl",
    owner: "Phone Input",
    title: "RTL split corners and LTR telephone content",
    summary: "Mirrored corners while phone numbers stay left to right.",
  },
  {
    id: "phone-width",
    owner: "Phone Input",
    title: "Intrinsic country-popup minimum width",
    summary: "Minimum width for the country popup.",
  },
  {
    id: "shared",
    owner: "Shared Skin",
    title: "Shared shadow and state-layer tokens",
    summary: "Shadow and state-layer tokens from shared Skin foundations.",
  },
];

function classify(source, selector) {
  if (selector === ":root") return "shared";
  if (source === "POC adjustments") {
    if (selector.includes(".phone-input")) return "phone-width";
    return selector.includes(".listbox__options")
      ? "option-surface"
      : "popup-width";
  }
  if (source === "Phone Input CSS") {
    if (selector.startsWith('[dir="rtl"]')) return "phone-rtl";
    if (selector.includes("floating-label")) return "phone-floating";
    if (selector.includes("--readonly")) return "phone-readonly";
    if (selector.includes("--disabled")) return "phone-disabled";
    if (selector.includes("--error")) return "phone-error";
    if (selector.includes("__value")) return "phone-content";
    if (selector.includes("svg.icon") || selector.includes("fflag"))
      return "phone-icons";
    if (
      selector.includes("button.") ||
      (selector.includes(".textbox") && !selector.includes("--fluid"))
    )
      return "phone-join";
    return "phone-layout";
  }
  if (selector.includes("__description")) return "description";
  if (selector.includes("__option--active")) return "active";
  if (selector.includes("__option") && /:(first|last)-child/.test(selector))
    return "option-corners";
  if (selector.includes("__option") && selector.includes("svg.icon"))
    return "icons";
  if (selector.includes("__options")) return "option-surface";
  if (selector.includes("__option")) return "options";
  if (selector.includes("__value")) return "value";
  if (selector.includes("__listbox") && !selector.includes("--fluid"))
    return "popup";
  if (selector.includes("--fluid")) return "fluid";
  if (/__(label|floating-label|text)/.test(selector)) return "trigger-label";
  if (selector.includes("--borderless")) return "borderless";
  if (
    selector.includes("button") &&
    ![".listbox-button", "span.listbox-button"].includes(selector)
  ) {
    if (selector === ".listbox-button .btn, .listbox-button .button")
      return "trigger-padding";
    return "field";
  }
  return [".listbox-button", "span.listbox-button"].includes(selector)
    ? "wrapper"
    : null;
}

function parseRules(sources, rename) {
  const records = [];
  sources.forEach(({ name, css }) => {
    const sheet = new CSSStyleSheet();
    sheet.replaceSync(css);
    let index = 0;
    function visit(rules, conditions = []) {
      for (const rule of rules) {
        if (rule.selectorText) {
          const selector = rule.selectorText.replace(/\s+/g, " ");
          const group = classify(name, selector);
          records.push({
            id: `${name}-${++index}`,
            source: name,
            group,
            selector,
            target: name === "POC adjustments" ? selector : rename(selector),
            conditions,
            css: rule.style.cssText,
            properties: [...rule.style],
          });
        } else if (rule.cssRules)
          visit(rule.cssRules, [
            ...conditions,
            rule.cssText.slice(0, rule.cssText.indexOf("{")).trim(),
          ]);
      }
    }
    visit(sheet.cssRules);
  });
  return records;
}

const element = (tag, text, className) => {
  const el = document.createElement(tag);
  if (text) el.textContent = text;
  if (className) el.className = className;
  return el;
};

function appendNames(el, text) {
  text
    .split(
      /\b(Menu Button|Listbox Button|Phone Input|Shared Skin|Listbox|Button)\b/g,
    )
    .forEach((part, index) => {
      el.append(
        index % 2 ? element("strong", part) : document.createTextNode(part),
      );
    });
}

function paragraph(text) {
  const el = element("p");
  appendNames(el, text);
  return el;
}

function ruleText(rule) {
  const note =
    rule.source === "POC adjustments"
      ? "/* POC adjustment */\n"
      : rule.source === "Phone Input CSS" &&
          (!rule.selector.includes(".listbox-button") ||
            rule.selector.includes(".listbox__"))
        ? "/* Existing shared selectors */\n"
        : "";
  const declarations = rule.css
    .trim()
    .replace(/;$/, "")
    .split(/;\s+/)
    .map((declaration) => `${declaration};`);
  const selector = bemNames[rule.selector] ?? rule.selector;
  const bemNote = bemNotes[rule.selector]
    ? `/* ${bemNotes[rule.selector]} */\n`
    : "";
  const body = `${bemNote}${selector} {\n  ${declarations.join("\n  ")}\n}`;
  return rule.conditions.reduceRight(
    (inner, condition) =>
      `${condition} {\n  ${inner.replaceAll("\n", "\n  ")}\n}`,
    note + body,
  );
}

export function mountStyleOwnership(root, { sources, rename }) {
  const records = parseRules(sources, rename);
  const lanes = Object.fromEntries(
    ["menu-button", "component", "shared"].map((name) => [
      name,
      root.querySelector(`[data-style-lane="${name}"]`),
    ]),
  );
  const search = root.querySelector("[data-style-search]");
  const filter = root.querySelector("[data-style-filter]");
  const count = root.querySelector("[data-style-count]");
  const cards = [];
  for (const group of groups) {
    const rules = records.filter((rule) => rule.group === group.id);
    if (!rules.length) continue;
    const lane =
      group.owner === "Menu Button"
        ? "menu-button"
        : group.owner === "Shared Skin"
          ? "shared"
          : "component";
    const card = element("article", null, "compatibility-map__card");
    card.dataset.styleGroup = group.id;
    card.dataset.owner = group.owner;
    card.append(
      ...(lane === "component"
        ? []
        : [element("strong", group.owner, "compatibility-map__owner")]),
      element("h4", group.title),
      paragraph(group.summary),
    );
    const code = element("code", null, "language-css");
    code.innerHTML = Prism.highlight(
      rules.map(ruleText).join("\n\n"),
      Prism.languages.css,
      "css",
    );
    const pre = element("pre", null, "language-css");
    pre.tabIndex = 0;
    pre.append(code);
    card.append(pre);
    lanes[lane].append(card);
    cards.push({
      card,
      group,
      rules,
      text: [
        group.owner,
        group.title,
        group.summary,
        ...rules.map(
          (r) => `${r.selector} ${bemNames[r.selector] ?? ""} ${r.css}`,
        ),
      ]
        .join(" ")
        .toLowerCase(),
    });
  }
  const componentOwners = ["Button", "Listbox", "Phone Input"];
  const subheadings = Object.fromEntries(
    componentOwners.map((owner) => {
      const heading = element("h4", owner, "compatibility-map__subheading");
      const first = [...lanes.component.children].find(
        (card) => card.dataset.owner === owner,
      );
      if (first) lanes.component.insertBefore(heading, first);
      return [owner, heading];
    }),
  );
  const unknown = records.filter((rule) => !rule.group);
  const menuButtonRules = records.filter(
    (rule) =>
      groups.find((group) => group.id === rule.group)?.owner === "Menu Button",
  ).length;
  appendNames(
    root.querySelector("[data-style-total]"),
    `${records.length} rules inventoried: ${menuButtonRules} for Menu Button, ${records.length - menuButtonRules - unknown.length - records.filter((rule) => rule.group === "shared").length} for Listbox or Phone Input, ${records.filter((rule) => rule.group === "shared").length} shared foundation rule. ${unknown.length} unassigned.`,
  );
  function update() {
    let visible = 0;
    for (const { card, group, rules, text } of cards) {
      card.hidden =
        (filter.value !== "all" && filter.value !== group.owner) ||
        !text.includes(search.value.trim().toLowerCase());
      if (!card.hidden) visible += rules.length;
    }
    const shownCards = (lane, owner) =>
      cards
        .filter(
          (entry) =>
            !entry.card.hidden &&
            entry.card.parentElement === lanes[lane] &&
            (!owner || entry.group.owner === owner),
        )
        .map((entry) => entry.card);
    let row = 3;
    let firstComponentRow = null;
    for (const owner of componentOwners) {
      const shown = shownCards("component", owner);
      subheadings[owner].hidden = !shown.length;
      if (!shown.length) continue;
      subheadings[owner].style.gridRow = String(row++);
      firstComponentRow ??= row;
      shown.forEach((card) => {
        card.style.gridRow = String(row++);
      });
    }
    lanes.component.parentElement.hidden = firstComponentRow === null;
    const menuButtonCards = shownCards("menu-button");
    lanes["menu-button"].parentElement.hidden = !menuButtonCards.length;
    menuButtonCards.forEach((card, index) => {
      card.style.gridRow = String((firstComponentRow ?? 3) + index);
    });
    const sharedCards = shownCards("shared");
    lanes.shared.parentElement.hidden = !sharedCards.length;
    count.textContent = `${visible} of ${records.length} rules shown.`;
  }
  search.addEventListener("input", update);
  filter.addEventListener("change", update);
  update();
  return { records, unassigned: unknown };
}
