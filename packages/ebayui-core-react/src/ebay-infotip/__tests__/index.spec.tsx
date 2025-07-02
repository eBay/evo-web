import React from "react";
import { render, fireEvent, RenderResult } from "@testing-library/react";
import { EbayInfotip, EbayInfotipContent, EbayInfotipHeading } from "../index";
import { InfotipProps } from "../ebay-infotip";

jest.mock("../../common/random-id");

const renderComponent = (props?: InfotipProps) =>
    render(
        <EbayInfotip a11yCloseText="" {...props}>
            <EbayInfotipHeading>Title</EbayInfotipHeading>
            <EbayInfotipContent>
                <p>Info content</p>
            </EbayInfotipContent>
        </EbayInfotip>,
    );

const checkIsExpanded = (wrapper: RenderResult) => {
    expect(wrapper.container.querySelector(".infotip--expanded")).toBeInTheDocument();
    expect(wrapper.container.querySelector("button[aria-expanded=true]")).toBeInTheDocument();
};

const checkIsCollapsed = (wrapper: RenderResult) => {
    expect(wrapper.container.querySelector(".infotip--expanded")).not.toBeInTheDocument();
    expect(wrapper.container.querySelector("button[aria-expanded=true]")).not.toBeInTheDocument();
};

describe("<EbayInfotip>", () => {
    describe("on infotip button click", () => {
        it("should expand the infotip", () => {
            const wrapper = renderComponent();
            fireEvent.click(wrapper.container.querySelector("button.infotip__host"));
            checkIsExpanded(wrapper);
        });
    });

    describe("on infotip button close click", () => {
        it("should collapse the infotip", () => {
            const wrapper = renderComponent();
            fireEvent.click(wrapper.container.querySelector(".infotip__close"));
            checkIsCollapsed(wrapper);
        });
    });

    describe("on infotip expanded", () => {
        it("should fire an event", () => {
            const spy = jest.fn();
            const wrapper = renderComponent({ onExpand: spy });
            fireEvent.click(wrapper.container.querySelector("button.infotip__host"));

            expect(spy).toHaveBeenCalled();
        });
    });

    describe("on infotip collapsed", () => {
        it("should fire an event", () => {
            const spy = jest.fn();
            const wrapper = renderComponent({ onCollapse: spy });
            fireEvent.click(wrapper.container.querySelector("button.infotip__host"));
            fireEvent.click(wrapper.container.querySelector("button.infotip__close"));

            expect(spy).toHaveBeenCalled();
        });
    });

    describe("on using the infotip with no content", () => {
        it("should throw an error", () => {
            jest.spyOn(console, "error").mockImplementation(() => null);
            expect(() => {
                render(<EbayInfotip a11yCloseText="Close" />);
            }).toThrow(`EbayInfotip: Please use a EbayInfotipContent that defines the content of the infotip`);
            (console.error as jest.Mock).mockRestore();
        });
    });

    describe("on using the close button", () => {
        it("should pass the property to the button that close the infotip", () => {
            const wrapper = render(
                <EbayInfotip a11yCloseText="Dismiss info">
                    <EbayInfotipHeading>Title</EbayInfotipHeading>
                    <EbayInfotipContent>
                        <p>Info content</p>
                    </EbayInfotipContent>
                </EbayInfotip>,
            );

            expect(wrapper.container.querySelector('.infotip__close[aria-label="Dismiss info"]')).toBeInTheDocument();
        });

        it("should focus the button element", () => {
            const { getByLabelText } = render(
                <EbayInfotip a11yCloseText="Dismiss info" aria-label="info">
                    <EbayInfotipContent>
                        <p>Info content</p>
                    </EbayInfotipContent>
                </EbayInfotip>,
            );

            const host = getByLabelText("info");

            fireEvent.click(host);
            expect(host).not.toHaveFocus();

            const close = getByLabelText("Dismiss info");

            fireEvent.click(close);
            expect(host).toHaveFocus();
        });
    });
});
