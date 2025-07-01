// Example: my-component.test.tsx
import { test, describe } from "vitest";
import visualHTML from "visual-html";

const storyFiles = import.meta.glob("../src/**/*.stories.@(js|jsx|ts|tsx)", {
    eager: true,
});

for (const file in storyFiles) {
    describe(`Rendering stories from ${file}`, () => {
        const module = storyFiles[file];
        for (const [storyName, storyFn] of Object.entries(module)) {
            if (storyName === "default") continue;

            it(`renders ${storyName} from ${file}`, async () => {
                // Run story function to get HTML string
                const html = typeof storyFn === "function" ? storyFn() : "";

                // Mount into DOM
                const container = document.createElement("div");
                container.innerHTML = html;
                document.body.appendChild(container);

                await expect(
                    visualHTML(document.body)).toMatchFileSnapshot(`./test/${module.default.title}-${storyName}.html`);

                // Cleanup
                document.body.removeChild(container);
            });
        }
    });
}
