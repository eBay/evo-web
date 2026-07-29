import { create } from "storybook/theming";

const evoWebLogo = `data:image/svg+xml,${encodeURIComponent(`
  <svg xmlns="http://www.w3.org/2000/svg" width="145" height="40" viewBox="0 0 145 40">
    <rect width="40" height="40" rx="12" fill="#191919"/>
    <g transform="translate(8 8)" fill="none" stroke="#ffffff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="16 18 22 12 16 6"/>
      <polyline points="8 6 2 12 8 18"/>
    </g>
    <text x="48" y="28" fill="#191919" font-family="Market Sans, Arial, sans-serif" font-size="24" font-weight="600" letter-spacing="-0.64">Evo Web</text>
  </svg>
`)}`;

export default create({
  base: "light",

  // Typography
  fontBase: '"Market Sans", Arial',
  colorSecondary: "#0968f6",
  appBg: "#f7f7f7",
  appHoverBg: "#f7f7f7",

  // Brand assets
  brandTitle: "EVO React",
  brandUrl: "/",
  brandImage: evoWebLogo,
  brandTarget: "/",
});
