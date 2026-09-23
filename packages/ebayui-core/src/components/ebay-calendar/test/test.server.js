import { describe, it, expect } from "vitest";

import { render } from "@marko/testing-library";
import template from "../index.marko";

describe("given disableAfter is the first day of the current month", () => {
    it("keeps the view on the month containing the last selectable day", async () => {
        const { getAllByRole } = await render(template, {
            navigable: true,
            todayISO: "2025-01-02",
            disableAfter: "2025-01-01",
            locale: "en-US",
        });

        expect(
            getAllByRole("heading").map((heading) => heading.textContent),
        ).to.deep.equal(["January 2025"]);
    });
});
