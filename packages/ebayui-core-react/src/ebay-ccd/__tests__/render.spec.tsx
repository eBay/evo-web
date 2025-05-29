import React from "react";
import { render } from "@testing-library/react";
import { EbayCCD } from "../";

describe("EbayCCD", () => {
    it("renders default ccd", () => {
        const { container } = render(<EbayCCD />);
        expect(container).toMatchSnapshot();
    });

    it("renders ccd with charger included", () => {
        const { container } = render(<EbayCCD chargerIcon="included" />);
        expect(container).toMatchSnapshot();
    });

    it("renders ccd with charger not included", () => {
        const { container } = render(<EbayCCD chargerIcon="not-included" />);
        expect(container).toMatchSnapshot();
    });

    it("renders ccd with usbpd included", () => {
        const { container } = render(<EbayCCD secondaryType="usbpd" />);
        expect(container).toMatchSnapshot();
    });

    it("renders ccd with charger included and usbpd", () => {
        const { container } = render(<EbayCCD chargerIcon="included" secondaryType="usbpd" />);
        expect(container).toMatchSnapshot();
    });

    it("renders ccd with custom a11y", () => {
        const { container } = render(<EbayCCD chargerIcon="included" secondaryType="usbpd" a11yText="custom text" />);
        expect(container).toMatchSnapshot();
    });

    it("renders with min and max", () => {
        const { container } = render(<EbayCCD min="1" max="10" />);
        expect(container).toMatchSnapshot();
    });

    it("renders with min and max but with charger included", () => {
        const { container } = render(<EbayCCD min="1" max="10" chargerIcon="included" />);
        expect(container).toMatchSnapshot();
    });

    it("renders with min and max but with no charger included", () => {
        const { container } = render(<EbayCCD min="1" max="10" chargerIcon="not-included" />);
        expect(container).toMatchSnapshot();
    });
});
