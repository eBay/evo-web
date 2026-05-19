import { describe, it, expect } from "vitest";
import { render } from "vitest-browser-react";
import { EvoCCD } from "../ccd";

describe("evo-ccd", () => {
    it("renders a figure landmark with the provided a11yText", async () => {
        const screen = await render(
            <EvoCCD a11yText="Charger included. 1000 - 2000 Watts." />,
        );
        const figure = screen.getByRole("figure", {
            name: "Charger included. 1000 - 2000 Watts.",
        });
        await expect.element(figure).toBeInTheDocument();
    });

    it("omits aria-label when a11yText is null", async () => {
        const screen = await render(<EvoCCD a11yText={null} />);
        const figure = screen.getByRole("figure");
        await expect.element(figure).not.toHaveAttribute("aria-label");
    });

    it("renders charger-included icon", async () => {
        const screen = await render(
            <EvoCCD chargerIcon="included" a11yText="Charger included." />,
        );
        const figure = screen.getByRole("figure");
        expect(figure.element().querySelector(".ccd__charger-icon")).not.toBeNull();
    });

    it("renders charger-not-included icon", async () => {
        const screen = await render(
            <EvoCCD chargerIcon="not-included" a11yText="Charger not included." />,
        );
        const figure = screen.getByRole("figure");
        expect(figure.element().querySelector(".ccd__charger-icon")).not.toBeNull();
    });

    it("renders description figure when min and max are set", async () => {
        const screen = await render(
            <EvoCCD min="1000" max="2000" a11yText="1000 - 2000 Watts." />,
        );
        const figure = screen.getByRole("figure");
        expect(figure.element().querySelector(".ccd__description-figure")).not.toBeNull();
    });

    it("hides description figure when neither min nor max is set", async () => {
        const screen = await render(<EvoCCD a11yText="CCD" />);
        const figure = screen.getByRole("figure");
        expect(figure.element().querySelector(".ccd__description-figure")).toBeNull();
    });

    it("shows USB PD label when secondaryType is usbpd", async () => {
        const screen = await render(
            <EvoCCD min="1000" max="2000" secondaryType="usbpd" a11yText="1000 - 2000 Watts. USB PD" />,
        );
        await expect.element(screen.getByText("USB PD")).toBeInTheDocument();
    });

    it("renders custom units label", async () => {
        const screen = await render(
            <EvoCCD min="5" max="20" units="V" a11yText="5 - 20 Volts." />,
        );
        await expect.element(screen.getByText("V")).toBeInTheDocument();
    });

    it("applies extra className to root div", async () => {
        const screen = await render(
            <EvoCCD className="my-custom-class" a11yText="CCD" />,
        );
        const figure = screen.getByRole("figure");
        await expect.element(figure).toHaveClass("ccd");
        await expect.element(figure).toHaveClass("my-custom-class");
    });
});
