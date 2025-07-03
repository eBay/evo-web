import React from "react";
import { render } from "@testing-library/react";
import { EbayInlineNotice, EbayNoticeContent } from "../index";

describe("<EbayInlineNotice>", () => {
    describe("when hidden", () => {
        it("should not render the notice component", () => {
            const { container } = render(
                <EbayInlineNotice hidden aria-label="notice">
                    <EbayNoticeContent>
                        <p>I am a sneaky notice!</p>
                    </EbayNoticeContent>
                </EbayInlineNotice>,
            );
            expect(container.childElementCount).toBe(0);
        });
    });

    describe("when aria-label is given", () => {
        it("should add the text to the icon as an aria-label", () => {
            const wrapper = render(
                <EbayInlineNotice status="confirmation" aria-label="Success Confirmation">
                    <EbayNoticeContent>
                        <p>You did it.</p>
                    </EbayNoticeContent>
                </EbayInlineNotice>,
            );
            const icon = wrapper.container.querySelector("svg");
            expect(icon).toHaveAttribute("role", "img");
        });
    });

    describe("on going from hidden -> not hidden", () => {
        it("should call onNoticeShow", () => {
            const spy = jest.fn();
            const { rerender } = render(
                <EbayInlineNotice hidden aria-label="notice" onNoticeShow={spy}>
                    <EbayNoticeContent>
                        <p>Uh oh!</p>
                    </EbayNoticeContent>
                </EbayInlineNotice>,
            );
            expect(spy).not.toHaveBeenCalled();

            rerender(
                <EbayInlineNotice hidden={false} aria-label="notice" onNoticeShow={spy}>
                    <EbayNoticeContent>
                        <p>Uh oh!</p>
                    </EbayNoticeContent>
                </EbayInlineNotice>,
            );
            expect(spy).toHaveBeenCalled();
        });
    });

    describe("on using the notice with no content", () => {
        it("should throw an error", () => {
            jest.spyOn(console, "error").mockImplementation(() => null);
            expect(() => {
                render(<EbayInlineNotice aria-label="error" />);
            }).toThrow(`EbayInlineNotice: Please use a EbayNoticeContent that defines the content of the notice`);
            (console.error as jest.Mock).mockRestore();
        });
    });
});

jest.mock("../../common/random-id");
