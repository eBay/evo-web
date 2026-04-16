import React from "react";
import { addons, types, useGlobals } from "storybook/manager-api";
import { Select } from "storybook/internal/components";
import { MoonIcon, SunIcon } from "@storybook/icons";
import theme from "./theme";

addons.setConfig({ theme });

const ADDON_ID = "evo/color-scheme-toggle";
const GLOBAL_KEY = "colorScheme";

const options = [
  { title: "Light", value: "light" },
  { title: "Dark", value: "dark" },
];

// Module-level so the MutationObserver can read the current value outside React.
let currentScheme: string | undefined;

function applyToIframe() {
  const iframe = document.getElementById(
    "storybook-preview-iframe",
  ) as HTMLIFrameElement | null;
  if (!iframe) return;
  const desired = currentScheme ?? "light dark";
  if (iframe.style.colorScheme !== desired) {
    iframe.style.colorScheme = desired;
  }
}

// Re-apply on any DOM mutation. getElementById + a string comparison is
// essentially free, and this catches every edge case: iframe recreation,
// React reconciliation resetting styles, deferred attribute setting, etc.
new MutationObserver(applyToIframe).observe(document.documentElement, {
  childList: true,
  subtree: true,
});

const ColorSchemeTool = () => {
  const [globals, updateGlobals] = useGlobals();
  const current: string | undefined = globals[GLOBAL_KEY];

  // Sync persisted globals → module variable on every render.
  // Skip undefined during view-mode transitions to avoid clobbering
  // an active selection. The onReset callback handles intentional resets.
  if (current !== undefined) {
    currentScheme = current;
  }
  applyToIframe();

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
        currentScheme = value;
        updateGlobals({ [GLOBAL_KEY]: value });
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
