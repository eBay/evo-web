import postcss from "postcss";

import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "path";
const semanticTokens = resolve(
    __dirname,
    "../../../node_modules",
    "@ebay/design-tokens/dist/css/evo-light.css",
);
const coreTokens = resolve(
    __dirname,
    "../../../node_modules",
    "@ebay/design-tokens/dist/css/evo-core.css",
);

const coreTokensOutput = resolve(
    __dirname,
    "../src/components/token-doc.json",
);

async function generate(file: string, color: boolean) {
    const items = [] as postcss.Declaration[];
    const data = await readFile(file, {
        encoding: "utf-8",
    });

    postcss.parse(data).walkRules((rule) => {
        rule.walkDecls((decl) => {
            items.push(decl);
        });
    });

    const ret = [] as {[key: string]: any}[];
    for (let item of items) {
        if (
            !color ||
            item.value.startsWith("#") ||
            item.value.startsWith("var(--color")
        ) {
            const value = color ? item.value : `var(${item.prop})`
            ret.push({
                value,
                prop: item.prop
            })
        }
    }
    return ret;
}

async function tokens(): Promise<void> {
    try {
        const data = {} as {[key:string]: any};
        data["core"] = await generate(coreTokens, true);
        data["semantic"] = await generate(semanticTokens, false);

        await writeFile(coreTokensOutput, JSON.stringify(data));
    } catch (e) {
        console.log(e);
    }
}

export { tokens };
