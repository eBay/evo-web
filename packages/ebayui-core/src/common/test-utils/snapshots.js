import { render, prettyDOM } from "@marko/testing-library";
import { expect } from "vitest";
import visualHTML from "visual-html";
import { diffLines } from "diff";

function snapshotHTML() {
    return async (template, input) => {
        const { container } = await render(template, input);
        expect(prettyDOM(container)).toMatchSnapshot();
    };
}

async function diffServerSnapshots(template, input) {
    const { container } = await render(template, input);
    return async (afterTemplate, afterInput) => {
        const { container: afterContainer } = await render(
            afterTemplate,
            afterInput,
        );
        return diffOnlyChanges(container, afterContainer);
    };
}

function diffOnlyChanges(a, b) {
    const changes = diffLines(a, b);
    return changes
        .filter((part) => part.added || part.removed) // omit unchanged lines
        .map((part) => {
            const prefix = part.added ? "+ " : "- ";
            return part.value
                .split("\n")
                .filter((line) => line.trim() !== "") // clean up empty lines
                .map((line) => prefix + line)
                .join("\n");
        })
        .join("\n");
}
function diffHTML(beforeHTML) {
    const before = visualHTML(beforeHTML);
    return (afterHTML) => diffOnlyChanges(before, visualHTML(afterHTML));
}

export {
    snapshotHTML,
    diffServerSnapshots,
    diffHTML,
    diffOnlyChanges,
    visualHTML,
};
