import { EbayAccordion } from "../../../ebay-accordion";
import { EbayButton, EbayButtonCell } from "../../../ebay-button";
import { EbayFakeMenuItem } from "../../../ebay-fake-menu";
import { EbayFakeMenuButtonItem } from "../../../ebay-fake-menu-button";
import { EbayMenuItem } from "../../../ebay-menu";
import { EbayMenuButtonItem } from "../../../ebay-menu-button";

describe("public component display names", () => {
    it.each([
        ["EbayAccordion", "EbayAccordion", EbayAccordion],
        ["EbayButton", "EbayButton", EbayButton],
        ["EbayButtonCell", "EbayButtonCell", EbayButtonCell],
        ["EbayFakeMenuItem", "EbayFakeMenuItem", EbayFakeMenuItem],
        ["EbayFakeMenuButtonItem", "EbayFakeMenuItem", EbayFakeMenuButtonItem],
        ["EbayMenuItem", "EbayMenuItem", EbayMenuItem],
        ["EbayMenuButtonItem", "EbayMenuItem", EbayMenuButtonItem],
    ])("preserves the canonical name for %s", (_exportName, displayName, Component) => {
        expect(Component.displayName).toBe(displayName);
    });

    it("preserves shared item identities", () => {
        expect(EbayFakeMenuButtonItem).toBe(EbayFakeMenuItem);
        expect(EbayMenuButtonItem).toBe(EbayMenuItem);
    });
});
