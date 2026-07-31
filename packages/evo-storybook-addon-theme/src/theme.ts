import evo from "@ebay/design-tokens/esm/evo";
import { create } from "storybook/theming";

function createEvoWebLogo(
  iconBackground: string,
  iconForeground: string,
  textColor: string,
) {
  return `data:image/svg+xml,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="145" height="40" viewBox="0 0 145 40">
      <rect width="40" height="40" rx="12" fill="${iconBackground}"/>
      <g transform="translate(8 8)" fill="none" stroke="${iconForeground}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="16 18 22 12 16 6"/>
        <polyline points="8 6 2 12 8 18"/>
      </g>
      <text x="48" y="28" fill="${textColor}" font-family="Market Sans, Arial, sans-serif" font-size="24" font-weight="600" letter-spacing="-0.64">Evo Web</text>
    </svg>
  `)}`;
}

const brand = {
  fontBase: '"Market Sans", Arial',
  brandTitle: "Evo Web",
  brandUrl: "/evo-web",
  brandTarget: "_self",
};

const lightColors = evo.light.color.semantic;
const darkColors = evo.dark.color.semantic;

// Storybook theme processing does not support CSS custom properties, so use
// resolved Evo design-token values from the ESM export.
export const lightTheme = create({
  ...brand,
  base: "light",
  colorSecondary: lightColors.background.accent.value,
  appBg: lightColors.background.secondary.value,
  appHoverBg: lightColors.background.secondary.value,
  brandImage: createEvoWebLogo(
    lightColors.background.strong.value,
    lightColors.foreground.onStrong.value,
    lightColors.foreground.primary.value,
  ),
});

export const darkTheme = create({
  ...brand,
  base: "dark",
  colorSecondary: darkColors.background.accent.value,
  appBg: darkColors.background.secondary.value,
  appHoverBg: darkColors.background.primary.value,
  brandImage: createEvoWebLogo(
    darkColors.background.strong.value,
    darkColors.foreground.onStrong.value,
    darkColors.foreground.primary.value,
  ),
});

export function getSelectedColorScheme() {
  const globals = new URLSearchParams(window.location.search).get("globals");
  return globals?.match(/(?:^|;)colorScheme:(light|dark)(?:;|$)/)?.[1];
}

export function getPreferredTheme() {
  const selectedScheme = getSelectedColorScheme();
  const isDark =
    selectedScheme === "dark" ||
    (selectedScheme !== "light" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);

  return isDark ? darkTheme : lightTheme;
}
