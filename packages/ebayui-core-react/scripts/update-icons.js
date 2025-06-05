/*
 This script extracts SVG icons from Skin and saves them as React TSX
 */
const { resolve, dirname, join } = require("path");
const {
    saveIconType,
    saveIconConstants,
    saveSvgIcons,
    parseSVG,
    parseSVGSymbols,
    getIconKeys,
} = require("./update-icons-helpers");

const skinDir = dirname(require.resolve("@ebay/skin/package.json"));
const svgDir = join(skinDir, "dist/svg");
const skinIconsFile = join(svgDir, "/icons.svg");
const typesFile = resolve(__dirname, `../src/ebay-icon/types.ts`);
const constFile = resolve(__dirname, `../src/ebay-icon/__tests__/constants.ts`);
const ebaySymbolsFile = resolve(__dirname, `../src/ebay-svg/symbols.tsx`);

const skinSVG = parseSVG(skinIconsFile);

saveSvgIcons(skinSVG, ebaySymbolsFile);

const skinSVGSymbols = parseSVGSymbols(skinIconsFile);
console.log(`Found ${skinSVGSymbols.length} icons in Skin.`);
const { iconKeys } = getIconKeys(skinSVGSymbols);
saveIconType(iconKeys, typesFile);
saveIconConstants(iconKeys, constFile);
