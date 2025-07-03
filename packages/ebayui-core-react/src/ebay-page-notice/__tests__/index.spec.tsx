import React from "react";
import { act, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { EbayNoticeContent, EbayPageNotice, EbayPageNoticeTitle } from "../index";

jest.mock("../../common/random-id");

const clickEvent = expect.objectContaining({ type: "click" });

describe("<EbayPageNotice>", () => {
    describe("when a page title exists", () => {
        it("should render the title within the notice content", () => {
            const noticeContentSelector = "div.page-notice__main";
            const wrapper = render(
                <EbayPageNotice status="confirmation">
                    <EbayNoticeContent>
                        <EbayPageNoticeTitle>Here is the title</EbayPageNoticeTitle>
                        <p id="details">Here is some details</p>
                    </EbayNoticeContent>
                </EbayPageNotice>,
            );
            expect(wrapper.container.querySelector(noticeContentSelector)).toBeTruthy();
            expect(wrapper.container.querySelector(`${noticeContentSelector} > p#details`)).toBeTruthy();
            expect(wrapper.getByText("Here is the title")).toBeTruthy();
        });
    });

    describe("when aria-label is given", () => {
        it("should add the text to the icon as an aria-label", () => {
            const wrapper = render(
                <EbayPageNotice status="confirmation" aria-label="Success Confirmation">
                    <EbayNoticeContent>
                        <p>You did it.</p>
                    </EbayNoticeContent>
                </EbayPageNotice>,
            );
            expect(wrapper.container.querySelector("svg")).toHaveAttribute("role", "img");
        });
    });

    describe("on using the notice with no content", () => {
        it("should throw an error", () => {
            jest.spyOn(console, "error").mockImplementation(() => null);
            expect(() => {
                render(<EbayPageNotice />);
            }).toThrow(`EbayPageNotice: Please use a EbayNoticeContent that defines the content of the notice`);
            (console.error as jest.Mock).mockRestore();
        });
    });

    describe("when allyDismissText is provided...", () => {
        let wrapper;
        let dismissButton;
        const dismissMock = jest.fn();

        beforeEach(() => {
            wrapper = render(
                <EbayPageNotice
                    status="information"
                    aria-label="Information"
                    a11yDismissText="Close"
                    onDismiss={dismissMock}
                >
                    <EbayNoticeContent>
                        <p>Content</p>
                    </EbayNoticeContent>
                </EbayPageNotice>,
            );
            dismissButton = wrapper.getByRole("button", { name: "Close" });
        });

        it("should add a close button with the provided label.", () => {
            expect(dismissButton).not.toBeNull();
        });

        it("should hide the notice when the dismiss button is clicked.", async () => {
            expect(wrapper.getByRole("region", { name: "Information" })).toBeVisible();
            act(() => {
                dismissButton.click();
            });
            expect(wrapper.queryByRole("region", { name: "Information" })).toBeNull();
            expect(dismissMock).toHaveBeenCalledWith(clickEvent);
        });

        it("should hide the notice when the user focuses the dismiss button and presses space", async () => {
            expect(wrapper.getByRole("region", { name: "Information" })).toBeVisible();
            dismissButton.focus();

            await userEvent.type(dismissButton, " ");
            expect(wrapper.queryByRole("region", { name: "Information" })).toBeNull();
            expect(dismissMock).toHaveBeenCalled();
        });
    });
});
