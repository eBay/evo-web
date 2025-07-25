import React from "react";
import { render } from "@testing-library/react";
import { EbayPhoneInput } from "../index";

describe("EbayPhoneInput render", () => {
    it("renders basic component", () => {
        const { container } = render(<EbayPhoneInput />);
        expect(container.firstChild).toMatchSnapshot();
    });

    it("renders with all props", () => {
        const { container } = render(
            <EbayPhoneInput
                countryCode="us"
                value="5551234567"
                locale="en-US"
                floatingLabel="Phone Number"
                disabled={false}
                readonly={false}
                invalid={false}
                className="custom-phone-input"
            />,
        );
        expect(container.firstChild).toMatchSnapshot();
    });

    it("renders disabled state", () => {
        const { container } = render(
            <EbayPhoneInput countryCode="us" floatingLabel="Phone Number" value="5551234567" disabled />,
        );
        expect(container.firstChild).toMatchSnapshot();
    });

    it("renders readonly state", () => {
        const { container } = render(
            <EbayPhoneInput countryCode="us" floatingLabel="Phone Number" value="5551234567" readonly />,
        );
        expect(container.firstChild).toMatchSnapshot();
    });

    it("renders invalid state", () => {
        const { container } = render(
            <EbayPhoneInput countryCode="us" floatingLabel="Phone Number" value="invalid" invalid />,
        );
        expect(container.firstChild).toMatchSnapshot();
    });

    it("renders with different country", () => {
        const { container } = render(
            <EbayPhoneInput countryCode="gb" floatingLabel="Phone Number" value="2071234567" />,
        );
        expect(container.firstChild).toMatchSnapshot();
    });

    it("renders with custom locale", () => {
        const { container } = render(
            <EbayPhoneInput countryCode="fr" locale="fr-FR" floatingLabel="Numéro de téléphone" />,
        );
        expect(container.firstChild).toMatchSnapshot();
    });
});
