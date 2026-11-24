import { mountStyleOwnership } from "./listbox-style-ownership.js";
import listboxCSS from "../../../../packages/skin/dist/listbox-button/listbox-button.css?raw";
import phoneCSS from "../../../../packages/skin/dist/phone-input/phone-input.css?raw";

const compositionCSS = `
    :where(#listbox-comparison [data-bridge="true"]) div.listbox__options[data-listbox-legacy~="options"][role="listbox"]:not(.menu-button__dropdown) {background-color:transparent;cursor:auto}
    :where(#listbox-comparison [data-bridge="true"]) .menu-button__dropdown:where([data-listbox-legacy~="listbox"]) {min-width:0}
    :where(#listbox-comparison [data-bridge="true"]) .menu-button__dropdown--set-position:where([data-listbox-legacy~="listbox"]) {min-width:100%}
    :where(#listbox-comparison [data-bridge="true"]) .phone-input .menu-button__dropdown:not(.menu-button__dropdown--set-position):where([data-listbox-legacy~="listbox"]) {min-width:initial}
  `;

const sourceModules = import.meta.glob(
  [
    "../../../../packages/skin/src/sass/listbox-button/stories/**/*.stories.js",
    "../../../../packages/skin/src/sass/phone-input/stories/*.stories.js",
    "../../../../packages/skin/src/sass/field/stories/*.stories.js",
    "../../../../packages/skin/src/sass/floating-label/stories/*.stories.js",
    "../../../../packages/skin/src/sass/global/stories/*.stories.js",
  ],
  { eager: true },
);
const docs = import.meta.glob(
  "../components/{listbox-button,field,floating-label,phone-input,table}/css+page.marko",
  { eager: true, query: "?raw", import: "default" },
);
const toggles = [
  "open",
  "disabled",
  "ariaDisabled",
  "fluid",
  "long",
  "error",
  "invalid",
  "tokens",
  "abbreviated",
];
const rename = (text) =>
  text
    .replace(
      /\.listbox-button__listbox([\w-]*)/g,
      (_, suffix) =>
        `.menu-button__dropdown${suffix}:where([data-listbox-legacy~="listbox"])`,
    )
    .replace(
      /\.listbox-button__([\w-]+)/g,
      (_, part) =>
        `.listbox__${part}[data-listbox-legacy~="${part.split("--")[0]}"]`,
    )
    .replace(
      /\.listbox-button--([\w-]+)/g,
      (_, suffix) =>
        `.menu-button--listbox-${suffix}:where([data-compat-picker])`,
    )
    .replaceAll(".listbox-button", ".menu-button:where([data-compat-picker])");

function splitSelectors(value) {
  let depth = 0;
  let start = 0;
  const result = [];
  for (let i = 0; i < value.length; i++) {
    if ("([".includes(value[i])) depth++;
    if (")]".includes(value[i])) depth--;
    if (value[i] === "," && !depth) {
      result.push(value.slice(start, i));
      start = i + 1;
    }
  }
  result.push(value.slice(start));
  return result;
}

function bridgeRules(css) {
  const sheet = new CSSStyleSheet();
  sheet.replaceSync(css);
  function visit(rules) {
    return [...rules]
      .map((rule) => {
        if (rule.selectorText) {
          const scope = ':where(#listbox-comparison [data-bridge="true"])';
          const selectors = splitSelectors(rename(rule.selectorText))
            .flatMap((selector) => {
              const inner = selector.trim(),
                result = [`${scope} ${inner}`];
              const direction = inner.match(/^(\[dir=["']?rtl["']?\])\s*(.+)$/);
              if (direction)
                result.push(`${direction[1]} ${scope} ${direction[2]}`);
              return result;
            })
            .join(",");
          return `${selectors}{${rule.style.cssText}}`;
        }
        if (rule.cssRules)
          return `@media ${rule.conditionText}{${visit(rule.cssRules)}}`;
        return "";
      })
      .join("\n");
  }
  return visit(sheet.cssRules);
}

function mount() {
  const root = document.getElementById("listbox-comparison");
  if (!root || root.dataset.initialized) return;
  root.dataset.initialized = "true";
  const style = document.createElement("style");
  style.textContent =
    bridgeRules(listboxCSS) + bridgeRules(phoneCSS) + compositionCSS;
  document.head.append(style);
  const cases = [];
  const add = (id, name, html, source) => {
    const template = document.createElement("template");
    template.innerHTML = html;
    template.content
      .querySelectorAll(".listbox-button")
      .forEach((picker, index) => {
        let branch = picker;
        while (
          branch.parentElement &&
          branch.parentElement.tagName !== "TEMPLATE"
        ) {
          const parent = branch.parentElement;
          if (parent.querySelectorAll(".listbox-button").length > 1) break;
          branch = parent;
        }
        cases.push({
          id: `${id}-${index}`,
          name: `${name}${template.content.querySelectorAll(".listbox-button").length > 1 ? ` (${index + 1})` : ""}`,
          html: (() => {
            let html = branch.outerHTML;
            for (
              let parent = branch.parentElement;
              parent;
              parent = parent.parentElement
            ) {
              if (
                !["TABLE", "TBODY", "THEAD", "TR", "TD", "TH"].includes(
                  parent.tagName,
                )
              )
                continue;
              const context = parent.cloneNode(false);
              context.innerHTML = html;
              html = context.outerHTML;
            }
            return html;
          })(),
          source,
        });
      });
  };
  Object.entries(sourceModules)
    .sort(([a], [b]) => a.localeCompare(b))
    .forEach(([file, mod]) => {
      Object.entries(mod).forEach(([key, story]) => {
        if (typeof story !== "function") return;
        const html = story();
        if (
          typeof html === "string" &&
          /class="[^"]*\blistbox-button\b/.test(html)
        )
          add(
            `${file}-${key}`,
            `${mod.default.title.replace("Skin/", "")} / ${key}`,
            html,
            file.split("packages/skin/")[1],
          );
      });
    });
  Object.entries(docs).forEach(([file, text]) => {
    for (const match of text.matchAll(
      /^import (\w+) from "(\/img\/[^";]+)";/gm,
    ))
      text = text.replaceAll(`src=${match[1]}`, `src="${match[2]}"`);
    const demos = [
      ...text.matchAll(/<div class="demo">([\s\S]*?)<\/highlight-code>/g),
    ];
    demos.forEach(([html], index) => {
      const template = document.createElement("template");
      template.innerHTML = html.split("<highlight-code")[0];
      const inner = template.content.querySelector(".demo__inner");
      if (inner?.querySelector(".listbox-button"))
        add(
          `docs-${file}-${index}`,
          `Docs / ${file.split("/")[2]} / example ${index + 1}`,
          inner.innerHTML,
          file,
        );
    });
  });
  const sourceCount = cases.length;
  const base = cases.find(
    (item) => item.name === "Listbox Button/Base / collapsedSelected",
  );
  const extra = (name, change) => {
    const template = document.createElement("template");
    template.innerHTML = base.html;
    change(template.content);
    add(
      `extra-${name}`,
      `Additional / ${name}`,
      template.innerHTML,
      "Supported selectors and boundary cases",
    );
  };
  extra("Scrollable options", (fragment) => {
    const list = fragment.querySelector('[role="listbox"]');
    for (let i = 0; i < 30; i++) {
      const option = list.firstElementChild.cloneNode(true);
      option.setAttribute("aria-selected", "false");
      option.querySelector("span").textContent = `Additional option ${i + 1}`;
      list.append(option);
    }
  });
  extra(
    "Hidden option",
    (fragment) => (fragment.querySelector('[role="option"]').hidden = true),
  );
  extra("All options disabled", (fragment) =>
    fragment
      .querySelectorAll('[role="option"]')
      .forEach((el) => el.setAttribute("aria-disabled", "true")),
  );
  extra("No options", (fragment) =>
    fragment.querySelector('[role="listbox"]').replaceChildren(),
  );
  extra("Floating label unselected", (fragment) => {
    const trigger = fragment.querySelector("button");
    trigger.classList.add("button--floating-label");
    const label = trigger.querySelector(".button__label");
    label.className = "button__floating-label button__floating-label--inline";
    fragment
      .querySelectorAll("[aria-selected]")
      .forEach((el) => el.setAttribute("aria-selected", "false"));
    trigger.querySelector(".button__text").textContent = "";
  });
  extra(
    "Expand button trigger",
    (fragment) =>
      (fragment.querySelector("button").className = "expand-button"),
  );
  extra(
    "Abbreviated expand trigger",
    (fragment) => (fragment.querySelector("button").className = "expand-btn"),
  );
  extra("Fixed positioning", (fragment) =>
    fragment
      .querySelector(".listbox-button__listbox")
      .classList.add("listbox-button__listbox--fixed"),
  );
  extra("Compound external label", (fragment) => {
    const picker = fragment.querySelector(".listbox-button");
    const wrapper = document.createElement("div");
    const label = document.createElement("span");
    label.id = "external-label";
    label.textContent = "Color ";
    picker.before(wrapper);
    wrapper.append(label, picker);
    picker.querySelector(".button__label").remove();
    picker.querySelector(".button__text").id = "selected-value";
    picker
      .querySelector("button")
      .setAttribute("aria-labelledby", "external-label selected-value");
    picker
      .querySelector('[role="listbox"]')
      .setAttribute("aria-labelledby", "external-label");
  });
  extra("Explicit option labels", (fragment) => {
    fragment.querySelector(".button__label").remove();
    fragment
      .querySelectorAll(".listbox-button__value,.button__text")
      .forEach((el) => {
        el.textContent = `Color: ${el.textContent.trim()}`;
      });
  });
  const select = root.querySelector("[data-source]");
  cases.forEach((item) => select.add(new Option(item.name, item.id)));
  const inventory = root.querySelector("[data-source-list]");
  cases.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.name}: ${item.source}`;
    inventory.append(li);
  });
  root.querySelector("[data-coverage]").textContent =
    `${sourceCount} source examples discovered directly from Skin stories and documentation, including Phone Input and Field integrations, plus ${cases.length - sourceCount} boundary cases. Trigger-only alignment sources receive demonstration options.`;
  let currentCase =
    cases.find(
      (item) => item.name === "Listbox Button/Base / collapsedSelected",
    ) || cases[0];
  let widgets = [];
  const controls = Object.fromEntries(
    toggles.map((key) => [key, root.querySelector(`[data-toggle="${key}"]`)]),
  );

  function render() {
    widgets.forEach((widget) => widget.destroy());
    const grid = root.querySelector("[data-comparison-grid]");
    grid.replaceChildren();
    ["existing", "composed"].forEach((side) => {
      const form = document.createElement("form");
      form.className = "listbox-comparison__side";
      form.dataset.side = side;
      form.dataset.bridge = String(
        side === "composed" &&
          root.querySelector("[data-bridge-toggle]").checked,
      );
      form.noValidate = true;
      const heading = document.createElement("h2");
      heading.innerHTML = `<strong>${side === "existing" ? "Listbox Button" : "Menu Button + Listbox"}</strong>`;
      form.append(heading);
      const viewport = document.createElement("div");
      viewport.className = "listbox-comparison__viewport";
      const stage = document.createElement("div");
      stage.className = "listbox-comparison__stage";
      stage.innerHTML = currentCase.html;
      stage.querySelectorAll("script").forEach((el) => el.remove());
      const picker = stage.querySelector(".listbox-button");
      if (!picker.querySelector('[role="listbox"]')) {
        const popup = document.createElement("div");
        popup.className =
          "listbox-button__listbox listbox-button__listbox--set-position";
        popup.innerHTML =
          '<div class="listbox-button__options" role="listbox">' +
          ["One", "Two", "Three"]
            .map(
              (label) =>
                `<div class="listbox-button__option" role="option"><span class="listbox-button__value">${label}</span><svg class="icon icon--16" width="16" height="16"><use href="#icon-tick-16"/></svg></div>`,
            )
            .join("") +
          "</div>";
        picker.append(popup);
      }

      if (side === "composed") {
        picker.dataset.compatPicker = "";
        [picker, ...picker.querySelectorAll("[class]")].forEach((element) => {
          [...element.classList].forEach((name) => {
            if (!name.startsWith("listbox-button")) return;
            const part = name
              .match(/^listbox-button__([\w-]+)/)?.[1]
              .split("--")[0];
            if (part)
              element.dataset.listboxLegacy = [
                ...new Set([
                  ...(element.dataset.listboxLegacy || "")
                    .split(" ")
                    .filter(Boolean),
                  part,
                ]),
              ].join(" ");
            element.classList.replace(
              name,
              name
                .replace("listbox-button__listbox", "menu-button__dropdown")
                .replace("listbox-button__", "listbox__")
                .replace("listbox-button--", "menu-button--listbox-")
                .replace(/^listbox-button$/, "menu-button"),
            );
          });
        });
      }
      const ids = new Map();
      stage.querySelectorAll("[id]").forEach((el, i) => {
        ids.set(el.id, `${side}-source-${i}`);
        el.id = `${side}-source-${i}`;
      });
      stage
        .querySelectorAll(
          "[for],[aria-labelledby],[aria-describedby],[aria-controls]",
        )
        .forEach((el) =>
          [
            "for",
            "aria-labelledby",
            "aria-describedby",
            "aria-controls",
          ].forEach((attr) => {
            if (el.hasAttribute(attr))
              el.setAttribute(
                attr,
                el
                  .getAttribute(attr)
                  .split(" ")
                  .map((id) => ids.get(id) || id)
                  .join(" "),
              );
          }),
        );
      stage.querySelectorAll("icon-symbol[name]").forEach((el) => {
        const use = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "use",
        );
        use.setAttribute("href", `#icon-${el.getAttribute("name")}`);
        el.replaceWith(use);
      });
      viewport.append(stage);
      form.append(viewport);
      const controlsEl = document.createElement("div");
      controlsEl.className = "listbox-comparison__actions";
      controlsEl.innerHTML =
        '<button type="button" class="button button--tertiary" data-close>Close options</button><button type="submit" class="button button--primary">Submit</button><button type="reset" class="button button--secondary">Reset</button>';
      form.append(controlsEl);
      const error = document.createElement("p");
      error.className = "listbox-comparison__error";
      error.hidden = true;
      error.textContent = "Choose an option before submitting.";
      form.append(error);
      const output = document.createElement("output");
      output.className = "listbox-comparison__result";
      output.setAttribute("aria-live", "polite");
      output.textContent = "Submit to inspect form values.";
      form.append(output);
      grid.append(form);
      widgets[side === "existing" ? 0 : 1] = initWidget(
        form,
        picker,
        side,
        error,
        output,
      );
    });
    apply();
    root.querySelector("[data-source-info]").textContent = currentCase.source;
  }

  let measurementFrame;
  function scheduleMeasure() {
    cancelAnimationFrame(measurementFrame);
    measurementFrame = requestAnimationFrame(measure);
  }
  function apply() {
    const state = Object.fromEntries(
      toggles.map((key) => [key, controls[key].checked]),
    );
    widgets.forEach((widget) => widget.apply(state));
    scheduleMeasure();
  }
  function measure() {
    const differences = compareWidgets(widgets, {
      pseudo: true,
      geometry: true,
    });
    root.querySelector("[data-status]").textContent = differences.length
      ? `${differences.length} styling differences in the current state.`
      : "The measured styling and dimensions match in the current state.";
    root.querySelector("[data-differences]").textContent = JSON.stringify(
      differences,
      null,
      2,
    );
    return differences;
  }
  function setCase(id) {
    currentCase = cases.find((item) => item.id === id);
    select.value = id;
    Object.values(controls).forEach((input) => (input.checked = false));
    const t = document.createElement("template");
    t.innerHTML = currentCase.html;
    controls.open.checked =
      t.content.querySelector("button")?.getAttribute("aria-expanded") ===
      "true";
    render();
  }
  select.addEventListener("change", () => setCase(select.value));
  Object.values(controls).forEach((input) =>
    input.addEventListener("change", apply),
  );
  root
    .querySelector("[data-required]")
    .addEventListener("change", () =>
      widgets.forEach(
        (widget) =>
          (widget.native.required =
            root.querySelector("[data-required]").checked),
      ),
    );
  root
    .querySelector("[data-bridge-toggle]")
    .addEventListener("change", (event) => {
      root.querySelector('[data-side="composed"]').dataset.bridge = String(
        event.target.checked,
      );
      measure();
    });
  root
    .querySelector("[data-reset-case]")
    .addEventListener("click", () => setCase(currentCase.id));
  root.querySelector("[data-clear]").addEventListener("click", () => {
    widgets.forEach((widget) => widget.choose(-1, false));
    measure();
  });
  root.querySelector("[data-measure]").addEventListener("click", measure);
  root.addEventListener("change", scheduleMeasure);
  root.addEventListener("load", scheduleMeasure, true);
  window.listboxComparison = {
    cases: cases.map(({ id, name, source }) => ({ id, name, source })),
    setCase,
    sourceCount,
    compare: measure,
    compareRaw: (options) => compareWidgets(widgets, options),
    snapshot: (index, options) => captureWidget(widgets[index], options),
    state: () =>
      Object.fromEntries(toggles.map((key) => [key, controls[key].checked])),
    widgets: () => widgets,
  };
  setCase(currentCase.id);
  window.listboxComparison.styleOwnership = mountStyleOwnership(root, {
    sources: [
      { name: "Listbox Button CSS", css: listboxCSS },
      { name: "Phone Input CSS", css: phoneCSS },
      { name: "POC adjustments", css: compositionCSS },
    ],
    rename,
    api: window.listboxComparison,
  });
}

function initWidget(form, picker, side, error, output) {
  const controller = new AbortController();
  const on = (el, name, fn) =>
    el.addEventListener(name, fn, { signal: controller.signal });
  let prefix = side === "existing" ? "listbox-button" : "listbox";
  const trigger = picker.querySelector("button");
  const popup = picker.querySelector(
    side === "existing" ? ".listbox-button__listbox" : ".menu-button__dropdown",
  );
  const list = picker.querySelector('[role="listbox"]');
  const options = [...list.querySelectorAll('[role="option"]')];
  if (side === "existing" && options[0]?.classList.contains("listbox__option"))
    prefix = "listbox";
  form.dataset.mixedContent = String(list === popup);
  const value = trigger.querySelector(".button__text,.btn__text");
  const originals = options.map(
    (option) => option.querySelector(`.${prefix}__value`).innerHTML,
  );
  const native = document.createElement("select");
  native.hidden = true;
  native.name = "selection";
  native.required = document.querySelector("[data-required]").checked;
  native.add(new Option("Choose an option", ""));
  const sourceOptions = [...(picker.querySelector("select")?.options || [])];
  const nativeValues = options.map(
    (_, i) => sourceOptions[i]?.value ?? String(i),
  );
  options.forEach((option, i) =>
    native.add(
      new Option(
        option.textContent.trim(),
        nativeValues[i],
        false,
        option.getAttribute("aria-selected") === "true",
      ),
    ),
  );
  picker.querySelectorAll("select").forEach((el) => el.remove());
  form.append(native);
  let selected = options.findIndex(
    (option) => option.getAttribute("aria-selected") === "true",
  );
  native.value = selected < 0 ? "" : nativeValues[selected];
  let active = selected;
  const originalTriggerHTML = value?.innerHTML;
  const descendantClasses = [...trigger.querySelectorAll("[class]")].map(
    (el) => [el, el.getAttribute("class")],
  );
  const initialDisabled = trigger.disabled;
  const initialAriaDisabled = trigger.getAttribute("aria-disabled");
  const initialInvalid = trigger.getAttribute("aria-invalid");
  const originalPopupStyle = popup.getAttribute("style") || "";
  const originalClasses = picker.className;
  const originalButtonClasses = trigger.className;
  let search = "",
    searchTime = 0;
  trigger.type = "button";
  trigger.dataset.trigger = "";
  trigger.setAttribute("aria-controls", `${side}-list`);
  list.id = `${side}-list`;
  list.tabIndex = -1;
  if (!list.hasAttribute("aria-labelledby") && !list.hasAttribute("aria-label"))
    list.setAttribute("aria-label", "Choose an option");
  options.forEach((option, i) => {
    option.id = `${side}-option-${i}`;
    option.dataset.option = String(i);
  });
  const blocked = () =>
    trigger.disabled || trigger.getAttribute("aria-disabled") === "true";
  const enabled = () =>
    options
      .map((option, i) => ({ option, i }))
      .filter(
        ({ option }) =>
          option.getAttribute("aria-disabled") !== "true" && !option.hidden,
      );
  function setActive(i) {
    active = i;
    options.forEach((option, j) =>
      option.classList.toggle(`${prefix}__option--active`, i === j),
    );
    if (i < 0) list.removeAttribute("aria-activedescendant");
    else list.setAttribute("aria-activedescendant", `${side}-option-${i}`);
    if (i >= 0 && document.activeElement === list)
      options[i].scrollIntoView({ block: "nearest" });
  }
  function close(focus = false) {
    if (popup.className.includes("--fixed"))
      popup.setAttribute("style", originalPopupStyle);
    trigger.setAttribute("aria-expanded", "false");
    picker.classList.remove(
      side === "existing"
        ? "listbox-button--expanded"
        : "menu-button--listbox-expanded",
    );
    if (focus) trigger.focus();
  }
  function positionFixed() {
    if (
      !popup.className.includes("--fixed") ||
      trigger.getAttribute("aria-expanded") !== "true"
    )
      return;
    const rect = trigger.getBoundingClientRect();
    popup.style.top = `${rect.bottom + 4}px`;
    popup.style.left = `${rect.left}px`;
    popup.style.right = "auto";
    popup.style.minWidth = `${rect.width}px`;
    popup.style.width = `${Math.max(rect.width, Math.min(320, innerWidth - 64))}px`;
  }
  function open() {
    if (blocked()) return;
    trigger.setAttribute("aria-expanded", "true");
    picker.classList.add(
      side === "existing"
        ? "listbox-button--expanded"
        : "menu-button--listbox-expanded",
    );
    positionFixed();
    list.focus();
    setActive(
      enabled().some((item) => item.i === selected)
        ? selected
        : (enabled()[0]?.i ?? -1),
    );
  }
  function choose(i, focus = true) {
    if (i >= 0 && options[i]?.getAttribute("aria-disabled") === "true") return;
    selected = i;
    native.value = i < 0 ? "" : nativeValues[i];
    options.forEach((option, j) =>
      option.setAttribute("aria-selected", String(i === j)),
    );
    if (value) {
      const flag = i >= 0 ? options[i].querySelector(".fflag,svg.flag") : null;
      value.innerHTML =
        i < 0
          ? "Choose an option"
          : flag
            ? flag.outerHTML
            : options[i].querySelector(`.${prefix}__value`).innerHTML;
    }
    if (i >= 0 && options[i].querySelector(".fflag,svg.flag"))
      trigger.setAttribute(
        "aria-label",
        `${trigger.dataset.listboxButtonPrefix || ""}${options[i].textContent.trim()}`,
      );
    const dialPrefix = picker
      .closest(".phone-input")
      ?.querySelector(".textbox > span");
    if (dialPrefix) {
      const code =
        i >= 0
          ? options[i].querySelector(".fflag,svg.flag")?.dataset.countryCode
          : "";
      dialPrefix.textContent = code ? `+${code}` : "";
    }
    const floating = trigger.querySelector(
      ".button__floating-label,.btn__floating-label",
    );
    if (floating)
      floating.classList.toggle(
        floating.classList.contains("btn__floating-label")
          ? "btn__floating-label--inline"
          : "button__floating-label--inline",
        i < 0,
      );
    error.hidden = true;
    trigger.setAttribute(
      "aria-invalid",
      initialInvalid === "true" ||
        document.querySelector('[data-toggle="invalid"]').checked
        ? "true"
        : "false",
    );
    close(focus);
  }
  on(trigger, "click", () =>
    trigger.getAttribute("aria-expanded") === "true" ? close() : open(),
  );
  on(picker, "keydown", (event) => {
    if (blocked()) {
      if (["Enter", " "].includes(event.key)) event.preventDefault();
      return;
    }
    const openNow = trigger.getAttribute("aria-expanded") === "true";
    if (event.key === "Escape") {
      event.preventDefault();
      close(true);
      return;
    }
    if (["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key)) {
      event.preventDefault();
      if (!openNow) {
        open();
        return;
      }
      const items = enabled(),
        pos = items.findIndex((item) => item.i === active);
      const next =
        event.key === "Home"
          ? 0
          : event.key === "End"
            ? items.length - 1
            : Math.max(
                0,
                Math.min(
                  items.length - 1,
                  pos + (event.key === "ArrowDown" ? 1 : -1),
                ),
              );
      if (items[next]) setActive(items[next].i);
    } else if (
      (event.key === "Enter" || event.key === " ") &&
      openNow &&
      event.target === list
    ) {
      event.preventDefault();
      if (active >= 0) choose(active);
    } else if (event.key === "Tab" && openNow) {
      if (event.shiftKey) {
        trigger.focus();
        event.preventDefault();
      } else close(true);
    } else if (
      event.key.length === 1 &&
      event.key !== " " &&
      !event.ctrlKey &&
      !event.metaKey &&
      !event.altKey
    ) {
      event.preventDefault();
      if (!openNow) open();
      const now = Date.now();
      search = now - searchTime > 700 ? event.key : search + event.key;
      searchTime = now;
      const match = enabled().find(({ option }) =>
        option.textContent
          .trim()
          .toLowerCase()
          .startsWith(search.toLowerCase()),
      );
      if (match) setActive(match.i);
    }
  });
  options.forEach((option, i) => on(option, "click", () => choose(i)));
  on(form.querySelector("[data-close]"), "click", () => close(true));
  on(document, "pointerdown", (event) => {
    if (!picker.contains(event.target)) close();
  });
  on(picker, "focusout", (event) => {
    if (!picker.contains(event.relatedTarget)) close();
  });
  on(native, "invalid", (event) => event.preventDefault());
  on(form, "submit", (event) => {
    event.preventDefault();
    if (!native.checkValidity()) {
      error.hidden = false;
      trigger.setAttribute("aria-invalid", "true");
      trigger.focus();
      output.textContent = "Not submitted. Choose an option.";
    } else
      output.textContent = `Submitted values: ${JSON.stringify(Object.fromEntries(new FormData(form)))}`;
  });
  on(form, "reset", (event) => {
    event.preventDefault();
    document.querySelector("[data-reset-case]").click();
  });
  function apply(state) {
    if (popup.className.includes("--fixed"))
      popup.setAttribute("style", originalPopupStyle);
    picker.className = originalClasses;
    const modifier =
      side === "existing" ? "listbox-button" : "menu-button--listbox";
    ["fluid", "error"].forEach((name) => {
      if (state[name])
        picker.classList.add(
          `${modifier}--${name}`.replace("listbox--", "listbox-"),
        );
    });
    if (side === "existing") {
      if (state.fluid) picker.classList.add("listbox-button--fluid");
      if (state.error) picker.classList.add("listbox-button--error");
    }
    trigger.className = originalButtonClasses;
    descendantClasses.forEach(([el, classes]) =>
      el.setAttribute("class", classes),
    );
    const floating = trigger.querySelector(
      ".button__floating-label,.btn__floating-label",
    );
    if (floating)
      floating.classList.toggle(
        floating.classList.contains("btn__floating-label")
          ? "btn__floating-label--inline"
          : "button__floating-label--inline",
        selected < 0,
      );
    trigger.disabled = initialDisabled || state.disabled;
    trigger.setAttribute(
      "aria-disabled",
      state.ariaDisabled ? "true" : initialAriaDisabled || "false",
    );
    trigger.setAttribute(
      "aria-invalid",
      state.invalid ? "true" : initialInvalid || "false",
    );
    native.disabled = blocked();
    if (state.abbreviated) {
      [trigger, ...trigger.querySelectorAll("[class]")].forEach((el) =>
        [...el.classList].forEach((name) => {
          if (name.startsWith("button"))
            el.classList.replace(name, name.replace("button", "btn"));
        }),
      );
    }
    options.forEach(
      (option, i) =>
        (option.querySelector(`.${prefix}__value`).innerHTML = state.long
          ? `${originals[i]} with a very long descriptive option label for comparison`
          : originals[i]),
    );
    if (
      value &&
      selected >= 0 &&
      !options[selected].querySelector(".fflag,svg.flag")
    )
      value.innerHTML = options[selected].querySelector(
        `.${prefix}__value`,
      ).innerHTML;
    if (value && selected < 0 && originalTriggerHTML)
      value.innerHTML = originalTriggerHTML;
    const tokens = {
      "--listbox-button-background-color": "var(--color-background-primary)",
      "--listbox-button-border-color": "var(--color-foreground-primary)",
      "--listbox-button-foreground-color": "var(--color-foreground-accent)",
      "--listbox-button-invalid-border-color":
        "var(--color-foreground-primary)",
      "--listbox-button-disabled-border-color": "var(--color-border-medium)",
      "--listbox-button-disabled-foreground-color":
        "var(--color-foreground-secondary)",
      "--listbox-button-label-color": "var(--color-foreground-primary)",
      "--listbox-button-border-radius": "0px",
      "--listbox-button-listbox-border-radius": "0px",
      "--listbox-button-subtitle-color": "var(--color-foreground-primary)",
      "--listbox-option-disabled-foreground-color":
        "var(--color-foreground-secondary)",
      "--combobox-textbox-focus-background-color":
        "var(--color-background-secondary)",
    };
    Object.entries(tokens).forEach(([name, val]) =>
      state.tokens
        ? picker.style.setProperty(name, val)
        : picker.style.removeProperty(name),
    );
    trigger.setAttribute("aria-expanded", String(state.open && !blocked()));
    positionFixed();
  }
  return {
    form,
    picker,
    trigger,
    popup,
    list,
    options,
    value,
    native,
    apply,
    choose,
    destroy: () => controller.abort(),
  };
}

function captureWidget(widget, { pseudo = false, geometry = false } = {}) {
  const targets = [
    widget.picker,
    widget.trigger,
    widget.trigger.querySelector(".button__cell,.btn__cell"),
    widget.trigger.querySelector(
      ".button__label,.btn__label,.button__floating-label,.btn__floating-label",
    ),
    widget.value,
    widget.popup,
    widget.list,
    ...widget.options.flatMap((option) => [
      option,
      ...option.querySelectorAll("span,svg"),
    ]),
  ];
  const root = widget.picker.getBoundingClientRect();
  return targets.map((el) => {
    if (!el) return null;
    const capture = (suffix) => {
      const style = getComputedStyle(el, suffix);
      if (suffix && style.content === "none") return null;
      const rect = el.getBoundingClientRect();
      return Object.fromEntries(
        [...style]
          .filter((prop) => !prop.startsWith("--"))
          .map((prop) => {
            let val = style.getPropertyValue(prop);
            if (
              style.position === "fixed" &&
              el.getClientRects().length &&
              [
                "top",
                "right",
                "bottom",
                "left",
                "inset-block-start",
                "inset-block-end",
                "inset-inline-start",
                "inset-inline-end",
              ].includes(prop)
            ) {
              const horizontal = [
                "left",
                "right",
                "inset-inline-start",
                "inset-inline-end",
              ].includes(prop);
              val = `relative:${horizontal ? rect.x - root.x : rect.y - root.y}`;
            }
            return [prop, val];
          }),
      );
    };
    const result = { style: capture(null) };
    if (pseudo) {
      result.before = capture("::before");
      result.after = capture("::after");
    }
    if (geometry && el.getClientRects().length) {
      const r = el.getBoundingClientRect();
      result.rect = {
        width: r.width,
        height: r.height,
        x: r.x - root.x,
        y: r.y - root.y,
      };
    }
    return result;
  });
}
function compareWidgets(widgets, options) {
  if (widgets.length !== 2) return [];
  const [a, b] = widgets.map((widget) => captureWidget(widget, options));
  const differences = [];
  a.forEach((item, i) => {
    if (!item || !b[i]) {
      if (Boolean(item) !== Boolean(b[i]))
        differences.push({ target: i, property: "presence" });
      return;
    }
    for (const group of Object.keys(item)) {
      if (!item[group] || !b[i][group]) {
        if (Boolean(item[group]) !== Boolean(b[i][group]))
          differences.push({ target: i, property: group });
        continue;
      }
      for (const prop of Object.keys(item[group]))
        if (
          item[group][prop] !== b[i][group][prop] &&
          !(
            group === "rect" &&
            Math.abs(item[group][prop] - b[i][group][prop]) <= 1 / 60 + 0.0001
          )
        )
          differences.push({
            target: i,
            property: `${group}.${prop}`,
            existing: item[group][prop],
            composed: b[i][group][prop],
          });
    }
  });
  return differences;
}

if (document.readyState !== "loading") setTimeout(mount, 0);
else document.addEventListener("DOMContentLoaded", mount, { once: true });
