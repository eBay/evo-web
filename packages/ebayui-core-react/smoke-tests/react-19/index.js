import React from "react";
import { renderToString } from "react-dom/server";
import { EbayButton } from "@ebay/ui-core-react/ebay-button";
import { describe, it } from "vitest";
import assert from "node:assert";

describe("React 19", () => {
    it("should not throw", () => {
        assert.doesNotThrow(() => {
            renderToString(React.createElement(EbayButton, {}, "Button"));
        });
    });
});
