import { describe, it, expect } from "vitest";

import { render } from "@marko/testing-library";
import template from "../index.marko";
import * as mock from "./mock";
import { composeStories } from "@storybook/marko";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import * as stories from "../section-notice.stories"; // import all stories from the stories file
const { Basic, WithCustomCTADismiss } = composeStories(stories);
const htmlSnap = snapshotHTML(__dirname);

describe("section-notice", () => {
    it("renders with status", async () => {
        const input = mock.SectionInfo;
        const { getByLabelText, getByText } = await render(template, input);
        const status = getByLabelText(input.a11yText).parentElement;
        expect(status).toMatchSnapshot();

        const containerUsingLabel = status.closest(
            `[aria-labelledby="${status.id}"]`,
        );
        expect(containerUsingLabel).toMatchSnapshot();

        const content = getByText(input.renderBody.text);
        expect(content).toMatchSnapshot();

        const container = content.parentElement;
        expect(container).toMatchSnapshot();
    });

    it("renders with light", async () => {
        const input = mock.SectionLight;
        const { getByText } = await render(template, input);
        const container = getByText(input.renderBody.text).parentElement;
        expect(container).toMatchSnapshot();

        const footer = getByText(input.footer.renderBody.text);
        expect(footer).toMatchSnapshot();
    });

    it("renders basic", async () => {
        await htmlSnap(Basic);
    });
    it("renders with custom CTA", async () => {
        await htmlSnap(WithCustomCTADismiss);
    });
});
