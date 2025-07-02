import React from "react";
import { act, render } from "@testing-library/react";
import { EbayButton } from "../../ebay-button";
import { EbayNoticeContent, EbaySectionNotice } from "../index";
import userEvent from "@testing-library/user-event";
import { eventOfType } from "../../common/event-utils/__tests__/helpers";

describe("<EbaySectionNotice>", () => {
    describe("when a button is added in the children of the main section notice", () => {
        it("should render the button as well as the notice content", () => {
            const wrapper = render(
                <EbaySectionNotice>
                    <EbayNoticeContent>
                        <p id="content">Here is some content</p>
                    </EbayNoticeContent>
                    <EbayButton id="actionButton">Action</EbayButton>
                </EbaySectionNotice>,
            );

            expect(wrapper.getByText("Here is some content")).toBeTruthy();
            expect(wrapper.getByRole("button").textContent).toContain("Action");
        });
    });

    describe("when aria-label is given", () => {
        it("should set SVG role=`img`", () => {
            const wrapper = render(
                <EbaySectionNotice status="confirmation" aria-label="Success Confirmation">
                    <EbayNoticeContent>
                        <p>You did it.</p>
                    </EbayNoticeContent>
                </EbaySectionNotice>,
            );
            expect(wrapper.container.querySelector("svg")).toHaveAttribute("role", "img");
        });

        it("should add the text to the main section as an aria-label if there is no status", () => {
            const wrapper = render(
                <EbaySectionNotice aria-label="Success Confirmation">
                    <EbayNoticeContent>
                        <p>You did it.</p>
                    </EbayNoticeContent>
                </EbaySectionNotice>,
            );

            expect(wrapper.getByRole("region")).toHaveAttribute("aria-label", "Success Confirmation");
        });
    });

    describe("on using the notice with no content", () => {
        it("should throw an error", () => {
            jest.spyOn(console, "error").mockImplementation(() => null);
            expect(() => {
                render(<EbaySectionNotice />);
            }).toThrow(`EbaySectionNotice: Please use a EbayNoticeContent that defines the content of the notice`);
            (console.error as jest.Mock).mockRestore();
        });
    });

    describe("when allyDismissText is provided...", () => {
        let wrapper;
        let dismissButton;
        const dismissMock = jest.fn();

        beforeEach(() => {
            wrapper = render(
                <EbaySectionNotice
                    status="information"
                    aria-label="Information"
                    a11yDismissText="Close"
                    onDismiss={dismissMock}
                >
                    <EbayNoticeContent>
                        <p>Content</p>
                    </EbayNoticeContent>
                </EbaySectionNotice>,
            );
            dismissButton = wrapper.getByRole("button", { name: "Close" });
        });

        it("should add a close button with the provided label.", () => {
            expect(dismissButton).not.toBeNull();
        });

        it("should hide the notice when the dismiss button is clicked.", () => {
            expect(wrapper.getByRole("region", { name: "Information" })).toBeVisible();
            act(() => {
                dismissButton.click();
            });

            expect(wrapper.queryByRole("region", { name: "Information" })).toBeNull();
            expect(dismissMock).toHaveBeenCalledWith(eventOfType("click"));
        });

        it("should hide the notice when the user focuses the dismiss button and presses space", async () => {
            expect(wrapper.getByRole("region", { name: "Information" })).toBeVisible();
            dismissButton.focus();
            await userEvent.type(dismissButton, " ");
            expect(wrapper.queryByRole("region", { name: "Information" })).toBeNull();
            expect(dismissMock).toHaveBeenCalled();
        });
    });

    describe("id generation", () => {
        test("should generate unique id for aria-labelledby and header", () => {
            const wrapper = render(
                <EbaySectionNotice status="information" aria-label="Important notice">
                    <EbayNoticeContent>Test notice content</EbayNoticeContent>
                </EbaySectionNotice>,
            );

            const section = wrapper.getByRole("region");
            const header = wrapper.container.querySelector(".section-notice__header");
            expect(header).toHaveAttribute("id", section.getAttribute("aria-labelledby"));
        });
    });
});
