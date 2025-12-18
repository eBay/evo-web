// Example: my-component.test.tsx
import { onTestFailed, test, describe } from "vitest";
import visualHTML from "visual-html";

const storyFiles = import.meta.glob("../src/**/*.stories.@(js|jsx|ts|tsx)", {
    eager: true,
});
import { genFailure, getDir } from "./test/generate-failures";

for (const file in storyFiles) {
    describe(`Rendering stories from ${file}`, () => {
        const module = storyFiles[file];
        for (const [storyName, storyFn] of Object.entries(module)) {
            if (storyName === "default") continue;

            test(`renders ${storyName} from ${file}`, async ({ annotate }) => {
                onTestFailed(async ({ annotate, task }) => {
                    await genFailure(output, module.default.title, storyName);
                });
                const html = typeof storyFn === "function" ? storyFn() : "";
                document.body.innerHTML = html;
                const output = visualHTML(document.body);

                await annotate(
                    `Failure comparison at: "${getDir(module.default.title, storyName)}"`,
                    "error",
                );
                await expect(output).toMatchFileSnapshot(
                    `./test/${module.default.title}-${storyName}.html`,
                );
                document.body.innerHTML = "";
            });
        }
    });
}
