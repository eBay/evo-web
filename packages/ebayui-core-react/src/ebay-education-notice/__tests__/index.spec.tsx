import React from "react";
import { vi } from "vitest";
import { render } from "@testing-library/react";
import { EbayEducationNotice, EbayNoticeContent, EbayEducationNoticeTitle } from "../index";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";

describe("<EbayEducationNotice>", () => {
    it("should not render without title", () => {
        expect(() => {
            render(
                <EbayEducationNotice
                    variant="prominent"
                    iconVariant="prominent"
                    a11yDismissText="dismiss notice"
                    educationIcon="theEbayVault24"
                >
                    <EbayNoticeContent>
                        <p>
                            Follow the order below to optimize market valuation from Price Guide. Player + Set or Season
                            + Manufacturer + Card number + Variant + Grader + Grade
                        </p>
                    </EbayNoticeContent>
                </EbayEducationNotice>,
            );
        }).toThrow(
            "<EbayEducationNoticeTitle>: Please use a <EbayEducationNoticeTitle> that defines the content of the notice",
        );
    });

    it("onDismiss being fired", async () => {
        const onDismissMock = vi.fn();
        const { getByRole } = render(
            <EbayEducationNotice
                a11yDismissText="notice dismiss"
                onDismiss={onDismissMock}
                educationIcon="theEbayVault24"
            >
                <EbayEducationNoticeTitle>Recommended title format</EbayEducationNoticeTitle>
                <EbayNoticeContent>
                    <p>
                        Follow the order below to optimize market valuation from Price Guide. Player + Set or Season +
                        Manufacturer + Card number + Variant + Grader + Grade
                    </p>
                </EbayNoticeContent>
            </EbayEducationNotice>,
        );

        const dismissBtn = getByRole("button", { name: "notice dismiss" });
        expect(dismissBtn).toBeInTheDocument();
        await act(async () => {
            await userEvent.click(dismissBtn);
        });

        expect(onDismissMock).toHaveBeenCalledTimes(1);
    });
});
