import { it, expect, describe } from "vitest";
import { renderToString } from "react-dom/server";
import { EvoCCD } from "../ccd";

describe("EvoCCD SSR", () => {
    it("renders default ccd (no props)", () => {
        expect(renderToString(<EvoCCD a11yText="CCD" />)).toMatchSnapshot();
    });

    it("renders with charger included", () => {
        expect(
            renderToString(<EvoCCD chargerIcon="included" a11yText="Charger included." />),
        ).toMatchSnapshot();
    });

    it("renders with charger not included", () => {
        expect(
            renderToString(<EvoCCD chargerIcon="not-included" a11yText="Charger not included." />),
        ).toMatchSnapshot();
    });

    it("renders with min and max", () => {
        expect(
            renderToString(<EvoCCD min="1000" max="2000" a11yText="1000 - 2000 Watts." />),
        ).toMatchSnapshot();
    });

    it("renders with secondaryType usbpd", () => {
        expect(
            renderToString(
                <EvoCCD min="1000" max="2000" secondaryType="usbpd" a11yText="1000 - 2000 Watts. USB PD" />,
            ),
        ).toMatchSnapshot();
    });

    it("renders with custom units", () => {
        expect(
            renderToString(<EvoCCD min="5" max="20" units="V" a11yText="5 - 20 Volts." />),
        ).toMatchSnapshot();
    });

    it("renders with charger included, min/max, and usbpd", () => {
        expect(
            renderToString(
                <EvoCCD
                    chargerIcon="included"
                    min="1000"
                    max="2000"
                    secondaryType="usbpd"
                    a11yText="Charger included. 1000 - 2000 Watts. USB PD"
                />,
            ),
        ).toMatchSnapshot();
    });

    it("renders with a11yText=null (aria-label omitted)", () => {
        expect(renderToString(<EvoCCD a11yText={null} />)).toMatchSnapshot();
    });
});
