import { server } from "vitest/browser";

const { readFile, writeFile, removeFile } = server.commands;
import fs from "fs";

export function getDir(failureDirectory, name) {
    return `src/test/failures/${failureDirectory}-${name}.html`;
}

export async function genFailure(
    newHtml: string,
    failureDirectory: string,
    name: string,
) {
    const oldHtml = await readFile(`src/test/${failureDirectory}-${name}.html`);
    const tokens = await readFile(`dist/tokens/evo-core.css`);
    const tokensLight = await readFile(`dist/tokens/evo-light.css`);
    const icons = await readFile(`dist/svg/icons.svg`);
    const file =  getDir(failureDirectory, name);

    await writeFile(
        file,
        `
        <head>
            <div style="height: 0; width:0;>
            ${icons}
            </div>
        </head>
        <style>
        ${tokens}
        ${tokensLight}
        </style>
        <div style="display:flex;flex-direction: row;justify-content: center;align-items: center; gap: 8px;">
            <div style="flex: 1; display: flex; flex-direction: column; overflow: auto;">
                <h2 style="text-align:center;">Current</h2>
                <div style="border: 1px dotted; padding: 8px; overflow: auto;">${oldHtml}</div>
            </div>
            <div style="flex: 1; display: flex; flex-direction: column; overflow: auto;">
                <h2 style="text-align:center;">Actual</h2>
                <div style="border: 1px dotted; padding: 8px; overflow: auto;">${newHtml}</div>
            </div>
        </div>
        `,
    );
}
