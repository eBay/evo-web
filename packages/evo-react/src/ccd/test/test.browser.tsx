import { describe, it, expect } from "vitest";
import { render } from "vitest-browser-react";
import { EvoCCD } from "../ccd";

describe("evo-ccd", () => {
    it("renders an img landmark with the provided a11yText", async () => {
        const screen = await render(
            <EvoCCD a11yText="Charger included. 1000 - 2000 Watts." />,
        );
        const image = screen.getByRole("img", {
            name: "Charger included. 1000 - 2000 Watts.",
        });
        await expect.element(image).toBeInTheDocument();
    });

    it("omits aria-label when a11yText is null", async () => {
        const screen = await render(<EvoCCD a11yText={null} />);
        // no aria-label so we can't query by name; querySelector is intentional here
        const image = screen.container.querySelector(".ccd");
        expect(image).not.toHaveAttribute("aria-label");
    });

    it("renders charger-included icon", async () => {
        const screen = await render(
            <EvoCCD chargerIcon="included" a11yText="Charger included." />,
        );
        const image = screen.getByRole("img", { name: "Charger included." });
        expect(image.element().querySelector(".ccd__charger-icon")).not.toBeNull();
    });

    it("renders charger-not-included icon", async () => {
        const screen = await render(
            <EvoCCD chargerIcon="not-included" a11yText="Charger not included." />,
        );
        const image = screen.getByRole("img", { name: "Charger not included." });
        expect(image.element().querySelector(".ccd__charger-icon")).not.toBeNull();
    });

    it("renders description figure when min and max are set", async () => {
        const screen = await render(
            <EvoCCD min="1000" max="2000" a11yText="1000 - 2000 Watts." />,
        );
        const image = screen.getByRole("img", { name: "1000 - 2000 Watts." });
        expect(image.element().querySelector(".ccd__description-figure")).not.toBeNull();
    });

    it("hides description figure when neither min nor max is set", async () => {
        const screen = await render(<EvoCCD a11yText="CCD" />);
        const image = screen.getByRole("img", { name: "CCD" });
        expect(image.element().querySelector(".ccd__description-figure")).toBeNull();
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
        const image = screen.getByRole("img", { name: "CCD" });
        await expect.element(image).toHaveClass("ccd");
        await expect.element(image).toHaveClass("my-custom-class");
    });
});
