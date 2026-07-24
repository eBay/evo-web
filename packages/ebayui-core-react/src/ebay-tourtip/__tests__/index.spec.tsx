/* eslint-disable vitest/expect-expect */
import React, { useState } from "react";
import { vi } from "vitest";
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
            <EbayTourtipFooter index="1 of 3">
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

    describe("on tourtip button close click", () => {
        it("should collapse the infotip", () => {
            const wrapper = renderComponent();
            fireEvent.click(wrapper.container.querySelector(".tourtip__close"));
            checkIsCollapsed(wrapper);
        });
    });

    describe("on tourtip collapsed", () => {
        it("should fire an event", () => {
            const spy = vi.fn();
            const wrapper = renderComponent({ onCollapse: spy });
            fireEvent.click(wrapper.container.querySelector("button.tourtip__host"));
            fireEvent.click(wrapper.container.querySelector("button.tourtip__close"));
            expect(spy).toHaveBeenCalled();
        });
    });

    describe("on using the tourtip with no content", () => {
        it("should throw an error", () => {
            vi.spyOn(console, "error").mockImplementation(() => null);
            expect(() => {
                render(<EbayTourtip a11yCloseText="Close" />);
            }).toThrow(`EbayTourtip: Please use a EbayTourtipContent that defines the content of the tourtip`);
            (console.error as jest.Mock).mockRestore();
        });
    });

    describe("on using the tourtip with no host", () => {
        it("should throw an error", () => {
            vi.spyOn(console, "error").mockImplementation(() => null);
            expect(() => {
                render(
                    <EbayTourtip a11yCloseText="close" pointer="bottom">
                        <EbayTourtipHeading type="tourtip">Title</EbayTourtipHeading>
                        <EbayTourtipContent>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </EbayTourtipContent>
                        <EbayTourtipFooter index="1 of 3">
                            <button className="fake-link">Back</button>
                            <button className="btn btn--primary">Next</button>
                        </EbayTourtipFooter>
                    </EbayTourtip>,
                );
            }).toThrow(`EbayTourtip: Please use a EbayTourtipHost that defines the host of the tourtip`);
            (console.error as jest.Mock).mockRestore();
        });
    });

    describe("on using the open prop", () => {
        it("should start collapsed when open is false", () => {
            const wrapper = renderComponent({ open: false });
            checkIsCollapsed(wrapper);
        });

        it("should start expanded when open is true", () => {
            const wrapper = renderComponent({ open: true });
            checkIsExpanded(wrapper);
        });

        it("should update visibility when open prop changes", () => {
            const ControlledTourtip = () => {
                const [open, setOpen] = useState(true);
                return (
                    <>
                        <button onClick={() => setOpen(true)}>Open</button>
                        <button onClick={() => setOpen(false)}>Close</button>
                        <EbayTourtip a11yCloseText="close" pointer="bottom" open={open}>
                            <EbayTourtipHost>
                                <EbayButton>Info</EbayButton>
                            </EbayTourtipHost>
                            <EbayTourtipHeading type="tourtip">Title</EbayTourtipHeading>
                            <EbayTourtipContent>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </EbayTourtipContent>
                        </EbayTourtip>
                    </>
                );
            };
            const wrapper = render(<ControlledTourtip />);
            checkIsExpanded(wrapper);
            fireEvent.click(wrapper.getByText("Close"));
            checkIsCollapsed(wrapper);
            fireEvent.click(wrapper.getByText("Open"));
            checkIsExpanded(wrapper);
        });
    });

    describe("on region accessible name", () => {
        it("should assign each simultaneously-rendered tourtip a unique, non-empty heading id", () => {
            const wrapper = render(
                <>
                    <EbayTourtip a11yCloseText="close" pointer="bottom">
                        <EbayTourtipHost>
                            <EbayButton>First</EbayButton>
                        </EbayTourtipHost>
                        <EbayTourtipHeading type="tourtip">First title</EbayTourtipHeading>
                        <EbayTourtipContent>
                            <p>First content</p>
                        </EbayTourtipContent>
                    </EbayTourtip>
                    <EbayTourtip a11yCloseText="close" pointer="bottom">
                        <EbayTourtipHost>
                            <EbayButton>Second</EbayButton>
                        </EbayTourtipHost>
                        <EbayTourtipHeading type="tourtip">Second title</EbayTourtipHeading>
                        <EbayTourtipContent>
                            <p>Second content</p>
                        </EbayTourtipContent>
                    </EbayTourtip>
                </>,
            );

            const headingIds = Array.from(wrapper.container.querySelectorAll(".tourtip__heading")).map((el) =>
                el.getAttribute("id"),
            );
            expect(headingIds).toHaveLength(2);
            headingIds.forEach((id) => expect(id).toBeTruthy());
            expect(new Set(headingIds).size).toBe(headingIds.length);

            const overlays = wrapper.container.querySelectorAll(".tourtip__overlay");
            overlays.forEach((overlay, i) => {
                expect(overlay).toHaveAttribute("aria-labelledby", headingIds[i]);
            });
        });

        it("should respect a consumer-supplied heading id instead of overriding it", () => {
            const wrapper = render(
                <EbayTourtip a11yCloseText="close" pointer="bottom">
                    <EbayTourtipHost>
                        <EbayButton>Info</EbayButton>
                    </EbayTourtipHost>
                    <EbayTourtipHeading type="tourtip" id="custom-heading-id">
                        Title
                    </EbayTourtipHeading>
                    <EbayTourtipContent>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </EbayTourtipContent>
                </EbayTourtip>,
            );

            const heading = wrapper.container.querySelector(".tourtip__heading");
            expect(heading).toHaveAttribute("id", "custom-heading-id");
            expect(wrapper.container.querySelector(".tourtip__overlay")).toHaveAttribute(
                "aria-labelledby",
                "custom-heading-id",
            );
        });
    });
});
