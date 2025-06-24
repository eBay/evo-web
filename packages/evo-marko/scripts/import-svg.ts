/**
 * Loads DS4 and DS6 icons from skin and adds them to the evo-icon symbols.
 */

import * as fs from "fs";
import * as cp from "child_process";
import * as path from "path";
import { createRequire } from "module";
import { fileURLToPath } from "url";
import * as cheerio from "cheerio";
import { minify } from "html-minifier";
import {
  getExampleNumber,
  getCountries,
  getCountryCallingCode,
} from "libphonenumber-js/max";
import examples from "libphonenumber-js/mobile/examples";
const tempIgnore: string[] = [];

const require = createRequire(import.meta.url);

const skinDir = path.dirname(require.resolve("@ebay/skin/package.json"));
const svgDir = path.join(skinDir, "dist/svg");

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const outputBaseDir = path.join(__dirname, "../src/tags");
const outputCommonDir = path.join(__dirname, "../src/common");
const examplesMap: Map<string, string[]> = new Map();
const iconSizes = [
  "12",
  "16",
  "18",
  "20",
  "24",
  "30",
  "32",
  "40",
  "64",
  "12-colored",
  "16-colored",
  "18-colored",
  "20-colored",
  "24-colored",
  "30-colored",
  "32-colored",
  "48-colored",
  "64-colored",
];

const skipExamples = [
  "star-dynamic",
  "eek-arrow",
  "eek-range-arrow",
  "avatar-signed-out",
];

interface Countries {
  countryCode?: string;
  callingCode?: string;
  mask?: string;
}

const sizeMatcher = new RegExp(`-(${iconSizes.join("|")})(?:-fit)?$`);

const htmlMinifierOptions = {
  keepClosingSlash: true,
  removeAttributeQuotes: true,
  removeOptionalTags: true,
  collapseWhitespace: true,
};

function getOutputDir(fileName: string) {
  return path.join(outputBaseDir, `evo-${fileName}`, "tags");
}

function getExamples(fileName: string) {
  return path.join(outputBaseDir, `evo-${fileName}`, "examples", "all.marko");
}

function setupDir(fileName: string) {
  const outputDir = getOutputDir(fileName);
  const example = getExamples(fileName);
  cp.execSync(`rm -rf ${JSON.stringify(outputDir)}`);
  cp.execSync(`rm -rf ${JSON.stringify(example)}`);
  fs.mkdirSync(outputDir);
  fs.writeFileSync(example, `div.icon-examples`);
}

function addIcons(component: string, iconMap: Map<string, string>) {
  let svgFile = path.join(svgDir, `icons.svg`);
  if (component === "flag") {
    svgFile = path.join(svgDir, `flags.svg`);
  }
  const svgContent = fs.readFileSync(svgFile, "utf-8");
  const $ = cheerio.load(svgContent);

  for (const el of Array.from($("symbol"))) {
    const $symbol = $(el)!;
    if ($symbol.attr("id")?.startsWith(component)) {
      const name = $symbol.attr("id")?.replace(/^(?:svg-)?icon-/, "") ?? "";
      if ($symbol.html()?.indexOf("url(#") || -1 > -1) {
        // Find matching def
      }
      const symbolContent = minify($.html($symbol), htmlMinifierOptions);

      iconMap.set(name, symbolContent);
    }
  }
}
function generateFile(type: string, iconMap: Map<string, string>) {
  for (const [name, themes] of iconMap) {
    let postfixName = "";
    if (type === "icon") {
      postfixName = "-icon";
    }
    const iconFolder = path.join(
      getOutputDir(type),
      `evo${postfixName}-${name}`,
    );
    const index = path.join(iconFolder, "index.marko");

    if (!fs.existsSync(iconFolder)) fs.mkdirSync(iconFolder);
    const filePath = path.join(iconFolder, "symbol.ts");
    const content = `export function symbol() {
    // eslint-disable-next-line max-len,quotes
    return ${JSON.stringify(themes)};
};`;

    fs.writeFileSync(filePath, `${content.trim()}\n`);
    if (type === "image-placeholder") {
      // don't write index for image placeholder
      continue;
    }

    const size = name.match(sizeMatcher)?.[1] || "";

    fs.writeFileSync(
      index,
      `import { symbol } from "./symbol";
import type { Input as IconInput } from "../../${
        type === "icon" ? "" : "../evo-icon/"
      }index.marko"
export type Input = Omit<IconInput, \`_\${string}\`>;
<evo-icon ...input _name="${name}" _size="${size}" _type="${type}" _symbol=symbol/>
`,
    );
  }
}

function generateExamples(type: string, iconsList: string[]) {
  const exampleFile = path.join(getExamples(type));
  const file = fs.readFileSync(exampleFile, "utf-8");
  const exampleHTML: string[] = [];
  for (const name of iconsList) {
    if (skipExamples.indexOf(name) > -1) {
      continue;
    }
    const postfixName = type === "icon" ? "-icon" : "";
    const iconName = `evo${postfixName}-${name}`;
    exampleHTML.push(`    div
        span.icon
            ${iconName}
        span.text
            -- ${iconName}\n`);
  }
  fs.writeFileSync(exampleFile, `${file}\n${exampleHTML.join("\n")}`);
}

function generateIcon(componentName: string) {
  const icons = new Map();
  addIcons(componentName, icons);
  generateFile(componentName, icons);
  const iconList = Array.from(icons.keys());
  examplesMap.set(componentName, iconList);
  if (componentName === "flag") {
    generateFlagComponent(icons);
  }
}

function generateFlagComponent(iconMap: Map<string, string>) {
  const twoDititCountries = getCountries();
  const countries: Countries = {};
  for (const [name] of iconMap) {
    const countryMap = twoDititCountries.find(
      (country) => country === name.slice(5).toUpperCase(),
    );
    if (countryMap && tempIgnore.indexOf(countryMap) === -1) {
      const country: Countries = {
        countryCode: countryMap,
        callingCode: getCountryCallingCode(countryMap),
      };
      const exampleNumber = getExampleNumber(countryMap, examples);
      if (exampleNumber) {
        const mask = exampleNumber.formatNational().replace(/\d/g, "0");
        if (mask) {
          country.mask = mask;
        }
      }
      countries[countryMap] = country;
    }
  }
  fs.writeFileSync(
    path.join(outputCommonDir, "countries", "countries.ts"),
    `export default ${JSON.stringify(countries)};`,
  );
}

setupDir("icon");
// setupDir("star-rating");
// setupDir("image-placeholder");
// setupDir("flag");

generateIcon("icon");
// generateIcon("star-rating");
// generateIcon("image-placeholder");
// generateIcon("flag");

examplesMap.forEach((items, componentName) => {
  items.sort((a, b) => {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  });
  generateExamples(componentName, items);
});
