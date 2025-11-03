import postcss from "postcss";

import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "path";
const coreTokens = resolve(
    __dirname,
    "../../../node_modules",
    "@ebay/design-tokens/dist/css/",
);

const coreTokensOutput = resolve(
    __dirname,
    "../src/components/token-doc.json",
);

async function generate(fileName: string, color?: (value: string) => boolean) {
    const items = [] as postcss.Declaration[];
    const data = await readFile(resolve(coreTokens, `${fileName}.css`), {
        encoding: "utf-8",
    });

    postcss.parse(data).walkRules((rule) => {
        rule.walkDecls((decl) => {
            items.push(decl);
        });
    });

    const ret = [] as {[key: string]: any}[];
    for (let item of items) {
        if (!color || color(item.value)) {
            const value = color ? item.value : `var(${item.prop})`;
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
        data["core"] = await generate("evo-core", (value) => value.startsWith("#"));
        data["expressive"] = await generate("evo-core", (value) => value.startsWith("var(--color"));
        data["semantic"] = await generate("evo-light");
        data["live"] = await generate("evo-live-dark");

        await writeFile(coreTokensOutput, JSON.stringify(data));
    } catch (e) {
        console.log(e);
    }
}

export { tokens };
