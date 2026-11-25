import { describe, it, expect } from "vitest";
import { render } from "@marko/testing-library";
import template from "../index.marko";
import * as mock from "./mock";

describe("signal", () => {
    it("renders neutral version when no type is specified", async () => {
        const input = mock.Basic;
        const { getByText } = await render(template, input);
        const el = getByText(/neutral/i);

        expect(el).toMatchSnapshot();
    });

    it("renders recent version", async () => {
        const input = mock.basicRecent;
        const { getByText } = await render(template, input);
        const el = getByText(/recent/i);

        expect(el).toMatchSnapshot();
    });

    it("renders time sensitive version", async () => {
        const input = mock.basicTimeSensitive;
        const { getByText } = await render(template, input);
        const el = getByText(/time sensitive/i);

        expect(el).toMatchSnapshot();
    });

    it("renders trustworthy version", async () => {
        const input = mock.basicTrustworthy;
        const { getByText } = await render(template, input);
        const el = getByText(/trustworthy/i);

        expect(el).toMatchSnapshot();
    });

    it("renders neutral version", async () => {
        const input = mock.basicNeutral;
        const { getByText } = await render(template, input);
        const el = getByText(/neutral/i);

        expect(el).toMatchSnapshot();
    });

    it("renders with custom class", async () => {
        const input = mock.basicWithClass;
        const { getByText } = await render(template, input);
        const el = getByText(/neutral/i);

        expect(el).toMatchSnapshot();
    });

    it("sets the class for tone", async () => {
        const { getByText } = await render(template, mock.basicTone);
        expect(getByText("tone").className).toBe("signal signal--positive");
    });

    it("tone overrides status", async () => {
        const { getByText } = await render(template, mock.toneOverStatus);
        expect(getByText("tone over status").className).toBe(
            "signal signal--warning",
        );
    });

    it("adds strong and subtle emphasis classes", async () => {
        const strong = await render(template, mock.strong);
        expect(strong.getByText("strong").className).toBe(
            "signal signal--neutral signal--strong",
        );
        const subtle = await render(template, mock.subtle);
        expect(subtle.getByText("subtle").className).toBe(
            "signal signal--neutral signal--subtle",
        );
    });

    it("adds no class for default emphasis", async () => {
        const { getByText } = await render(template, mock.defaultEmphasis);
        expect(getByText("default emphasis").className).toBe(
            "signal signal--neutral",
        );
    });

    it("combines emphasis with status", async () => {
        const { getByText } = await render(template, mock.statusWithEmphasis);
        expect(getByText("status emphasis").className).toBe(
            "signal signal--trustworthy signal--strong",
        );
    });

    it("renders the icon before the label", async () => {
        const { getByText } = await render(template, mock.withIcon);
        const root = getByText("label", { exact: false });
        const icon = root.firstElementChild;
        expect(icon?.tagName.toLowerCase()).toBe("svg");
        expect(icon?.getAttribute("class")).toBe("icon icon--12");
        expect(root.firstChild).toBe(icon);
        expect(root.lastChild?.textContent).toBe("label");
    });
});
