import React from "react";
import { render } from "@testing-library/react";
import { EbayEducationNotice, EbayNoticeContent, EbayEducationNoticeTitle, EbayEducationNoticeFooter } from "../index";

describe("<EbayEducationNotice>", () => {
    it("should render notice snapshot", () => {
        const { asFragment } = render(
            <EbayEducationNotice a11yIconText="a11y notice" educationIcon="theEbayVault24">
                <EbayEducationNoticeTitle>Recommended title format</EbayEducationNoticeTitle>
                <EbayNoticeContent>
                    <p>
                        Follow the order below to optimize market valuation from Price Guide. Player + Set or Season +
                        Manufacturer + Card number + Variant + Grader + Grade
                    </p>
                </EbayNoticeContent>
                <EbayEducationNoticeFooter>Education footer</EbayEducationNoticeFooter>
            </EbayEducationNotice>,
        );

        expect(asFragment()).toMatchSnapshot();
    });
    it("should render notice prominent snapshot", () => {
        const { asFragment } = render(
            <EbayEducationNotice variant="prominent" iconVariant="prominent" a11yDismissText="dismiss notice">
                <EbayEducationNoticeTitle>Recommended title format</EbayEducationNoticeTitle>
                <EbayNoticeContent>
                    <p>
                        Follow the order below to optimize market valuation from Price Guide. Player + Set or Season +
                        Manufacturer + Card number + Variant + Grader + Grade
                    </p>
                </EbayNoticeContent>
            </EbayEducationNotice>,
        );

        expect(asFragment()).toMatchSnapshot();
    });
});
