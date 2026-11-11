import React, { useState } from "react";
import { vi } from "vitest";
import { render, RenderResult, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { DialogBaseWithState } from "..";
import DialogBase from "../components/dialogBase";
import EbayDialogHeader from "../components/dialog-header";
import { HeaderFooterDialog } from "./mocks";

describe("DialogBase", () => {
    it("should use id from header", () => {
        const wrapper = render(
            <DialogBase
                header={
                    <EbayDialogHeader id="header-id" role="heading">
                        title
                    </EbayDialogHeader>
                }
                open
            >
                dialog content
            </DialogBase>,
        );

        expect(wrapper.getByRole("dialog").getAttribute("aria-labelledby")).toEqual("header-id");
    });

    it("should generate id for header", () => {
        const wrapper = render(
            <DialogBase header={<EbayDialogHeader role="heading">title</EbayDialogHeader>} open>
                dialog content
            </DialogBase>,
        );

        const label = wrapper.getByRole("dialog").getAttribute("aria-labelledby");
        expect(label).toBeTruthy();
        expect(wrapper.getByRole("heading").getAttribute("id")).toEqual(label);
    });

    it("given a closed dialog should return null", () => {
        const wrapper = render(
            <DialogBaseWithState animated={false} classPrefix="drawer-dialog" className="custom-class" />,
        );
        expect(wrapper.container.childElementCount).toBe(0);
    });

    describe("given a DialogBase", () => {
        let wrapper: RenderResult;

        beforeEach(() => {
            wrapper = render(
                <HeaderFooterDialog
                    classPrefix="drawer-dialog"
                    closeButtonClass="closeButtonClass"
                    className="custom-class"
                    open
                />,
            );
        });
        it("should render a DialogBase", () => {
            expect(wrapper.container.querySelector(".custom-class")).toBeInTheDocument();
        });
        it("should render a DialogBase with custom classNames", () => {
            expect(wrapper.container.firstChild).toHaveClass("custom-class");
        });
        it("should render a close button with a custom className", () => {
            expect(wrapper.container.querySelector(".closeButtonClass")).toBeInTheDocument();
        });
        describe("click events", () => {
            const spyCloseBtnClick = vi.fn();
            const spyBackgroundClick = vi.fn();
            beforeEach(() => {
                wrapper = render(
                    <HeaderFooterDialog
                        classPrefix="drawer-dialog"
                        onCloseBtnClick={spyCloseBtnClick}
                        onBackgroundClick={spyBackgroundClick}
                        open
                    />,
                );
            });
            it("when btn cliked then it should trigger onCloseBtnClick event", async () => {
                await userEvent.click(wrapper.container.querySelector(".drawer-dialog__close")!);
                expect(spyCloseBtnClick).toHaveBeenCalled();
            });
            it("when background clicked then it should trigger onBackgroundClick event", async () => {
                await userEvent.click(wrapper.container.querySelector(".drawer-dialog")!);
                expect(spyBackgroundClick).toHaveBeenCalled();
            });
        });
    });

    describe("focus restoration", () => {
        const DialogWithTrigger = ({ animated, onClose = () => {} }: { animated?: boolean; onClose?: () => void }) => {
            const [open, setOpen] = useState(false);
            return (
                <>
                    <button onClick={() => setOpen(true)}>Open</button>
                    <button>Elsewhere</button>
                    <DialogBaseWithState
                        open={open}
                        animated={animated}
                        a11yCloseText="Close"
                        onCloseBtnClick={() => {
                            onClose();
                            setOpen(false);
                        }}
                    >
                        <EbayDialogHeader>title</EbayDialogHeader>
                        dialog content
                    </DialogBaseWithState>
                </>
            );
        };

        it.each([false, true])("returns focus to the trigger on close (animated: %s)", async (animated) => {
            render(<DialogWithTrigger animated={animated} />);
            const trigger = screen.getByRole("button", { name: "Open" });

            await userEvent.click(trigger);
            await userEvent.click(screen.getByRole("button", { name: "Close" }));

            expect(trigger).toHaveFocus();
        });

        it("keeps focus where the close handler moved it", async () => {
            render(<DialogWithTrigger animated={false} onClose={() => screen.getByText("Elsewhere").focus()} />);

            await userEvent.click(screen.getByRole("button", { name: "Open" }));
            await userEvent.click(screen.getByRole("button", { name: "Close" }));

            expect(screen.getByText("Elsewhere")).toHaveFocus();
        });
    });
});
