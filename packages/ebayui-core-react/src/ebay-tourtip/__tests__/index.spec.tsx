import React from "react";
import { render, fireEvent, RenderResult } from "@testing-library/react";
import { EbayButton } from "../../ebay-button";
import { EbayTourtip, EbayTourtipContent, EbayTourtipFooter, EbayTourtipHeading, EbayTourtipHost } from "../index";
import { TourtipProps } from "../ebay-tourtip";

const renderComponent = (props?: TourtipProps) =>
    render(
        <EbayTourtip a11yCloseText="close" pointer="bottom" {...props}>
            <EbayTourtipHost>
                <EbayButton>Info</EbayButton>
            </EbayTourtipHost>
            <EbayTourtipHeading type="tourtip">Title</EbayTourtipHeading>
            <EbayTourtipContent>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </EbayTourtipContent>
            <EbayTourtipFooter index="1 / 3">
                <button className="fake-link">Back</button>
                <button className="btn btn--primary">Next</button>
            </EbayTourtipFooter>
        </EbayTourtip>,
    );

const checkIsExpanded = (wrapper: RenderResult) => {
    expect(wrapper.container.querySelector(".tourtip--expanded")).toBeInTheDocument();
    expect(wrapper.container.querySelector("button[aria-expanded=true]")).toBeInTheDocument();
};

const checkIsCollapsed = (wrapper: RenderResult) => {
    expect(wrapper.container.querySelector(".tourtip--expanded")).not.toBeInTheDocument();
    expect(wrapper.container.querySelector("button[aria-expanded=true]")).not.toBeInTheDocument();
};

describe("<EbayTourtip>", () => {
    describe("on tourtip button click", () => {
        it("should expand the infotip", () => {
            const wrapper = renderComponent();
            fireEvent.click(wrapper.container.querySelector("button.tourtip__host"));
            checkIsExpanded(wrapper);
        });
    });

    describe("on tourtip button close click", () => {
        it("should collapse the infotip", () => {
            const wrapper = renderComponent();
            fireEvent.click(wrapper.container.querySelector(".tourtip__close"));
            checkIsCollapsed(wrapper);
        });
    });

    describe("on tourtip collapsed", () => {
        it("should fire an event", () => {
            const spy = jest.fn();
            const wrapper = renderComponent({ onCollapse: spy });
            fireEvent.click(wrapper.container.querySelector("button.tourtip__host"));
            fireEvent.click(wrapper.container.querySelector("button.tourtip__close"));
            expect(spy).toHaveBeenCalled();
        });
    });

    describe("on using the tourtip with no content", () => {
        it("should throw an error", () => {
            jest.spyOn(console, "error").mockImplementation(() => null);
            expect(() => {
                render(<EbayTourtip a11yCloseText="Close" />);
            }).toThrow(`EbayTourtip: Please use a EbayTourtipContent that defines the content of the tourtip`);
            (console.error as jest.Mock).mockRestore();
        });
    });

    describe("on using the tourtip with no host", () => {
        it("should throw an error", () => {
            jest.spyOn(console, "error").mockImplementation(() => null);
            expect(() => {
                render(
                    <EbayTourtip a11yCloseText="close" pointer="bottom">
                        <EbayTourtipHeading type="tourtip">Title</EbayTourtipHeading>
                        <EbayTourtipContent>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </EbayTourtipContent>
                        <EbayTourtipFooter index="1 / 3">
                            <button className="fake-link">Back</button>
                            <button className="btn btn--primary">Next</button>
                        </EbayTourtipFooter>
                    </EbayTourtip>,
                );
            }).toThrow(`EbayTourtip: Please use a EbayTourtipHost that defines the host of the tourtip`);
            (console.error as jest.Mock).mockRestore();
        });
    });

    describe("on tourtip button click", () => {
        it("should pass the property to the button that close the tourtip", () => {
            const wrapper = renderComponent();
            expect(wrapper.container.querySelector('.tourtip__close[aria-label="close"]')).toBeInTheDocument();
        });
        it("should handle focus correctly", () => {
            const wrapper = renderComponent();
            expect(wrapper.container.querySelector('.tourtip__close[aria-label="close"]')).toBeInTheDocument();
            const host = wrapper.container.querySelector("button.tourtip__host");
            expect(host).not.toHaveFocus();
            fireEvent.click(wrapper.container.querySelector("button.tourtip__close"));
            expect(host).toHaveFocus();
        });
    });
});
