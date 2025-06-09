/* eslint-disable @typescript-eslint/no-require-imports */
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const { EbayButton } = require("@ebay/ui-core-react/ebay-button");
const { describe, it } = require("node:test");
const assert = require("node:assert");

describe("React 16", () => {
    it("should not throw", () => {
        assert.doesNotThrow(() => {
            ReactDOMServer.renderToString(React.createElement(EbayButton, {}, "Button"));
        });
    });
});
