import { render, prettyDOM } from "@marko/testing-library";
import { expect } from "vitest";
import visualHTML from "visual-html";
import { createPatch } from "diff";

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
        return snapshotDiff(container, afterContainer);
    };
}

function diffHTML(beforeHTML) {
    const before = visualHTML(beforeHTML);
    return (afterHTML) => snapshotDiff(before, visualHTML(afterHTML));
}

/**
 * Creates a snapshot diff similar to the snapshot-diff package
 * but using the diff package instead.
 *
 * @param {string} valueA - The first value to compare
 * @param {string} valueB - The second value to compare
 * @param {object} options - Options for the diff
 * @param {string} options.contextLines - Number of context lines to include (default: 3)
 * @param {string} options.stablePatchMark - Mark to use for stable patches (default: "")
 * @returns {string} The formatted diff
 */
function snapshotDiff(valueA, valueB, options = {}) {
    const { contextLines = 3, stablePatchMark = "" } = options;

    // Convert values to strings if they aren't already
    const a = typeof valueA === "string" ? valueA : String(valueA);
    const b = typeof valueB === "string" ? valueB : String(valueB);

    // If values are the same, return no diff message
    if (a === b) {
        return "(no difference)";
    }

    // Create a patch using the diff package
    const patch = createPatch(
        "string",
        a,
        b,
        stablePatchMark,
        stablePatchMark,
        { context: contextLines },
    );

    // Extract just the diff part (remove the header)
    const diffContent = patch.split("\n").slice(4).join("\n");

    // Format the output to be similar to snapshot-diff
    return diffContent
        .replace(/^-/gm, "- ") // Add space after - for readability
        .replace(/^\+/gm, "+ "); // Add space after + for readability
}

export {
    snapshotHTML,
    diffServerSnapshots,
    diffHTML,
    visualHTML,
    snapshotDiff,
};
