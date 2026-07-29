import React from "react";
import { addons, types, useGlobals } from "storybook/manager-api";
import { Select } from "storybook/internal/components";
import { MoonIcon, SunIcon } from "@storybook/icons";
import { darkTheme, lightTheme } from "./theme";

const ADDON_ID = "@evo-web/storybook-addon-theme/color-scheme";
const GLOBAL_KEY = "colorScheme";
type ColorScheme = "light" | "dark";
const systemDarkMode = window.matchMedia("(prefers-color-scheme: dark)");

const options = [
  { title: "Light", value: "light" },
  { title: "Dark", value: "dark" },
];

// Module-level so the MutationObserver can read the current value outside React.
let currentScheme: ColorScheme | undefined;
let appliedManagerScheme: string | undefined;
const observedIframes = new WeakSet<HTMLIFrameElement>();

function applyToManager() {
  const desired = currentScheme ?? (systemDarkMode.matches ? "dark" : "light");
  if (appliedManagerScheme !== desired) {
    addons.setConfig({ theme: desired === "dark" ? darkTheme : lightTheme });
    appliedManagerScheme = desired;
  }
}

function applyToIframe() {
  const iframe = document.getElementById(
    "storybook-preview-iframe",
  ) as HTMLIFrameElement | null;
  if (!iframe) return;

  if (!observedIframes.has(iframe)) {
    observedIframes.add(iframe);
    iframe.addEventListener("load", applyToIframe);
  }

  const desired = currentScheme ?? "light dark";
  if (iframe.style.colorScheme !== desired) {
    iframe.style.colorScheme = desired;
  }

  const root = iframe.contentDocument?.documentElement;
  if (!root) return;

  if (currentScheme === undefined) {
    root.removeAttribute("data-color-scheme");
  } else {
    root.setAttribute("data-color-scheme", currentScheme);
  }
}

function applyColorScheme() {
  applyToManager();
  applyToIframe();
}

// Re-apply on any DOM mutation. getElementById + a string comparison is
// essentially free, and this catches every edge case: iframe recreation,
// React reconciliation resetting styles, deferred attribute setting, etc.
new MutationObserver(applyToIframe).observe(document.documentElement, {
  childList: true,
  subtree: true,
});

systemDarkMode.addEventListener("change", () => {
  if (currentScheme === undefined) {
    applyToManager();
  }
});

applyToManager();

const ColorSchemeTool = () => {
  const [globals, updateGlobals] = useGlobals();
  const storedScheme = globals[GLOBAL_KEY];
  const current: ColorScheme | undefined =
    storedScheme === "light" || storedScheme === "dark"
      ? storedScheme
      : undefined;

  // Keep the manager and preview synchronized with Storybook's persisted global.
  currentScheme = current;
  applyColorScheme();

  return (
    <Select
      icon={current === "dark" ? <MoonIcon /> : <SunIcon />}
      ariaLabel="Color scheme"
      tooltip="Change color scheme"
      resetLabel="System"
      onReset={() => {
        currentScheme = undefined;
        updateGlobals({ [GLOBAL_KEY]: undefined });
      }}
      defaultOptions={current}
      options={options}
      onSelect={(value) => {
        const selectedScheme =
          value === "light" || value === "dark" ? value : undefined;
        currentScheme = selectedScheme;
        updateGlobals({ [GLOBAL_KEY]: selectedScheme });
      }}
    />
  );
};

addons.register(ADDON_ID, () => {
  addons.add(ADDON_ID, {
    type: types.TOOL,
    title: "Color scheme",
    match: ({ viewMode }) => viewMode === "story" || viewMode === "docs",
    render: () => <ColorSchemeTool />,
  });
});
