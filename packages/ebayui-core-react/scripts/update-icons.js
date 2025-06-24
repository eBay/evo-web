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
const iconsSymbolsFile = resolve(__dirname, `../src/ebay-svg/symbols.tsx`);
const iconsSVG = parseSVG(skinIconsFile);
saveSvgIcons(iconsSVG, iconsSymbolsFile);

const skinSVGSymbols = parseSVGSymbols(skinIconsFile);
console.log(`Found ${skinSVGSymbols.length} icons in Skin.`);
const { iconKeys } = getIconKeys(skinSVGSymbols);

const iconTypesFile = resolve(__dirname, `../src/ebay-icon/types.ts`);
saveIconType(iconKeys, iconTypesFile);

const iconsConstFile = resolve(__dirname, `../src/ebay-icon/__tests__/constants.ts`);
saveIconConstants(iconKeys, iconsConstFile);

const skinFlagFile = join(svgDir, "/flags.svg");
const flagsSymbolsFile = resolve(__dirname, `../src/ebay-svg/flag-symbols.tsx`);
const flagsSVG = parseSVG(skinFlagFile);
saveSvgIcons(flagsSVG, flagsSymbolsFile);

const flagSVGSymbols = parseSVGSymbols(skinFlagFile);
console.log(`Found ${flagSVGSymbols.length} flags in Skin.`);
const { iconKeys: flagKeys } = getIconKeys(flagSVGSymbols);

const flagTypesFile = resolve(__dirname, `../src/ebay-flag/types.ts`);
saveIconType(flagKeys, flagTypesFile);

const flagsConstFile = resolve(__dirname, `../src/ebay-flag/__tests__/constants.ts`);
saveIconConstants(flagKeys, flagsConstFile);
