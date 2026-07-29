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
  brandUrl: "/",
  brandTarget: "/",
};

export const lightTheme = create({
  ...brand,
  base: "light",
  colorSecondary: "#0968f6",
  appBg: "#f7f7f7",
  appHoverBg: "#f7f7f7",
  brandImage: createEvoWebLogo("#191919", "#ffffff", "#191919"),
});

export const darkTheme = create({
  ...brand,
  base: "dark",
  colorSecondary: "#4d93fc",
  appBg: "#191919",
  appHoverBg: "#000000",
  brandImage: createEvoWebLogo("#f7f7f7", "#191919", "#f7f7f7"),
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
