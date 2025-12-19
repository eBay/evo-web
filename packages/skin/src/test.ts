// Example: my-component.test.tsx
import { onTestFailed, test, beforeAll, describe } from "vitest";
import visualHTML from "visual-html";
import { server } from "vitest/browser";

const { readFile, writeFile, removeFile } = server.commands;

const storyFiles = import.meta.glob("../src/**/*.stories.@(js|jsx|ts|tsx)", {
    eager: true,
});
// import { genFailure, getDir } from "./test/generate-failures";

beforeAll(async () => {
    const icons = await readFile(`dist/svg/icons.svg`);
    const container = document.createElement("div");
    container.style.height = "0";
    container.style.width = "0";
    container.innerHTML = icons;
    document.head.appendChild(container);
});
for (const file in storyFiles) {
    describe(`Rendering stories from ${file}`, () => {
        const module = storyFiles[file];
        for (const [storyName, storyFn] of Object.entries(module)) {
            if (storyName === "default") continue;

            test(`renders ${storyName} from ${file}`, async ({ annotate }) => {
                // onTestFailed(async ({ annotate, task }) => {
                //     await genFailure(output, module.default.title, storyName);
                // });
                const html = typeof storyFn === "function" ? storyFn() : "";
                document.body.innerHTML = html;
                await document.fonts.ready;
                await Promise.all(
                    Array.from(document.querySelectorAll("img")).map((el) => {
                        return new Promise<void>((resolve) => {
                            el.onload = () => {
                                resolve();
                            };
                        });
                    }),
                );
                await Promise.all(
                    Array.from(document.querySelectorAll("video")).map((el) => {
                        return new Promise<void>((resolve) => {
                            if (el.readyState >= 1) {
                                resolve();
                            } else {
                                el.addEventListener(
                                    "loadedmetadata",
                                    () => resolve(),
                                    { once: true },
                                );
                            }
                        });
                    }),
                );

                await expect(document.body).toMatchScreenshot();
                document.body.innerHTML = "";
            });
        }
    });
}
