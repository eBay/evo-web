import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { EbayChartLegend } from "../index";

const defaultItems = [
    { name: "Organic", value: 1234 },
    { name: "Direct", value: "$567.89" },
    { name: "Referral", value: undefined },
];

describe("EbayChartLegend", () => {
    it("renders the chart-legend container", () => {
        const { container } = render(<EbayChartLegend items={defaultItems} />);
        expect(container.querySelector(".chart-legend")).toBeTruthy();
    });

    it("renders the chart-legend__list dl element", () => {
        const { container } = render(<EbayChartLegend items={defaultItems} />);
        expect(container.querySelector(".chart-legend__list")).toBeTruthy();
    });

    it("renders one chart-legend__item per item", () => {
        const { container } = render(<EbayChartLegend items={defaultItems} />);
        expect(container.querySelectorAll(".chart-legend__item")).toHaveLength(3);
    });

    it("renders the item name in dt.chart-legend__label", () => {
        render(<EbayChartLegend items={defaultItems} />);
        expect(screen.getByText("Organic")).toBeTruthy();
        expect(screen.getByText("Direct")).toBeTruthy();
    });

    it("renders numeric value in dd.chart-legend__value", () => {
        render(<EbayChartLegend items={[{ name: "A", value: 42 }]} />);
        expect(screen.getByText("42")).toBeTruthy();
    });

    it("renders string value in dd.chart-legend__value", () => {
        render(<EbayChartLegend items={[{ name: "A", value: "$567.89" }]} />);
        expect(screen.getByText("$567.89")).toBeTruthy();
    });

    it("handles undefined value gracefully", () => {
        const { container } = render(<EbayChartLegend items={[{ name: "A", value: undefined }]} />);
        const dd = container.querySelector(".chart-legend__value");
        expect(dd).toBeTruthy();
        expect(dd!.textContent).toBe("");
    });

    it("passes className to the container", () => {
        const { container } = render(<EbayChartLegend items={[]} className="custom-class" />);
        expect(container.querySelector(".chart-legend.custom-class")).toBeTruthy();
    });

    it("passes extra HTML attributes to the container", () => {
        const { container } = render(<EbayChartLegend items={[]} data-testid="my-legend" />);
        expect(container.querySelector('[data-testid="my-legend"]')).toBeTruthy();
    });
});
