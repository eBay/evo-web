import React from "react";
import { vi } from "vitest";
import { render, fireEvent, screen } from "@testing-library/react";
import { act } from "@testing-library/react";

import { EbayMenu, EbayMenuItem } from "../index";
import { WithBadges, WithSeparator, Radio } from "./index.stories";

const onKeyDownSpy = vi.fn();
const onClickSpy = vi.fn();
const onSelectSpy = vi.fn();
const onChangeSpy = vi.fn();

describe("<EbayMenu>", () => {
    describe("rendering", () => {
        describe("with separators", () => {
            beforeEach(() => {
                render(<WithSeparator />);
            });

            it("should render the menu", () => {
                expect(screen.getByRole("menu")).toBeInTheDocument();
            });

            it("should render the menu items", () => {
                expect(screen.getAllByRole("menuitem")).toHaveLength(5);
            });

            it("should render the menu separators", () => {
                expect(screen.getAllByRole("separator")).toHaveLength(1);
            });
        });

        describe("with badges", () => {
            beforeEach(() => {
                render(<WithBadges />);
            });

            it("should render the menu", () => {
                expect(screen.getByRole("menu")).toBeInTheDocument();
            });

            it("should render the menu items", () => {
                expect(screen.getAllByRole("menuitem")).toHaveLength(3);
            });

            it("should render the menu badges", () => {
                expect(screen.getByLabelText("item 1 (5 unread items)")).toBeInTheDocument();
                expect(screen.getByLabelText("item 2 (23 unread items)")).toBeInTheDocument();
            });
        });

        describe("with radio buttons", () => {
            beforeEach(() => {
                render(<Radio />);
            });

            it("should render the menu", () => {
                expect(screen.getByRole("menu")).toBeInTheDocument();
            });

            it("should render the menu radio buttons", () => {
                expect(screen.getAllByRole("menuitemradio")).toHaveLength(3);
            });
        });
    });

    describe("interaction", () => {
        beforeEach(() => {
            render(
                <EbayMenu onClick={onClickSpy} onSelect={onSelectSpy} onKeyDown={onKeyDownSpy}>
                    <EbayMenuItem value="1">item1</EbayMenuItem>
                    <EbayMenuItem value="2">item2</EbayMenuItem>
                    <EbayMenuItem value="3" disabled>
                        item3
                    </EbayMenuItem>
                </EbayMenu>,
            );
        });

        it("should not fire onClick, onSelect event when disabled", async () => {
            await act(() => {
                fireEvent.click(screen.getByText("item3"));
            });

            expect(onClickSpy).not.toHaveBeenCalled();
            expect(onSelectSpy).not.toHaveBeenCalled();
        });

        it("should not fire onKeydown event when disabled", async () => {
            await act(() => {
                fireEvent.keyDown(screen.getByText("item3"), { key: "Enter" });
            });

            expect(onClickSpy).not.toHaveBeenCalled();
            expect(onSelectSpy).not.toHaveBeenCalled();
        });

        it("should fire onClick, onSelect event", async () => {
            await act(() => {
                fireEvent.click(screen.getByText("item2"));
            });

            const expectedProps = {
                index: 1,
                checked: [1],
            };

            expect(onClickSpy).toHaveBeenCalledWith(expect.any(Object));
            expect(onSelectSpy).toHaveBeenCalledWith(expect.any(Object), expectedProps);
        });

        it("should fire onKeyDown event", async () => {
            const [item1] = screen.getAllByRole("menuitem");

            await act(() => {
                fireEvent.keyDown(item1, { key: "Esc" });
            });

            const expectedProps = {
                index: 0,
                checked: [],
            };

            expect(onKeyDownSpy).toHaveBeenCalledWith(expect.any(Object), expectedProps);
        });

        it("should fire onKeyDown, onSelect event", async () => {
            const [, item2] = screen.getAllByRole("menuitem");

            await act(() => {
                fireEvent.keyDown(item2, { key: "Enter" });
            });

            const expectedProps = {
                index: 1,
                checked: [1],
            };

            expect(onKeyDownSpy).toHaveBeenCalledWith(expect.any(Object), expectedProps);
            expect(onSelectSpy).toHaveBeenCalledWith(expect.any(Object), expectedProps);
        });
    });

    describe('type="radio"', () => {
        beforeEach(() => {
            render(
                <EbayMenu type="radio" onClick={onClickSpy} onChange={onChangeSpy} onKeyDown={onKeyDownSpy}>
                    <EbayMenuItem value="1" checked>
                        item1
                    </EbayMenuItem>
                    <EbayMenuItem value="2">item2</EbayMenuItem>
                </EbayMenu>,
            );
        });
        it("should fire onClick, onChange event", async () => {
            const [item1, item2] = screen.getAllByRole("menuitemradio");

            expect(item1).toHaveAttribute("aria-checked", "true");
            expect(item2).toHaveAttribute("aria-checked", "false");

            await act(() => {
                fireEvent.click(item2);
            });

            const expectedProps = {
                index: 1,
                indexes: [1],
                checked: [1],
                checkedValues: ["2"],
            };

            expect(onClickSpy).toHaveBeenCalledWith(expect.any(Object));
            expect(onChangeSpy).toHaveBeenCalledWith(expect.any(Object), expectedProps);

            expect(item1).toHaveAttribute("aria-checked", "false");
            expect(item2).toHaveAttribute("aria-checked", "true");
        });

        it("should fire onKeyDown event", async () => {
            const [item1] = screen.getAllByRole("menuitemradio");

            await act(() => {
                fireEvent.keyDown(item1, { key: "Esc" });
            });

            const expectedProps = {
                index: 0,
                indexes: [0],
                checked: [0],
                checkedValues: ["1"],
            };

            expect(onKeyDownSpy).toHaveBeenCalledWith(expect.any(Object), expectedProps);
        });

        it("should fire onKeyDown, onChange event", async () => {
            const [, item2] = screen.getAllByRole("menuitemradio");

            await act(() => {
                fireEvent.keyDown(item2, { key: "Enter" });
            });

            const expectedProps = {
                index: 1,
                indexes: [1],
                checked: [1],
                checkedValues: ["2"],
            };

            expect(onKeyDownSpy).toHaveBeenCalledWith(expect.any(Object), expectedProps);
            expect(onChangeSpy).toHaveBeenCalledWith(expect.any(Object), expectedProps);
        });
    });

    describe('type="checkbox"', () => {
        beforeEach(() => {
            render(
                <EbayMenu type="checkbox" onClick={onClickSpy} onChange={onChangeSpy} onKeyDown={onKeyDownSpy}>
                    <EbayMenuItem value="1" checked>
                        item1
                    </EbayMenuItem>
                    <EbayMenuItem value="2">item2</EbayMenuItem>
                </EbayMenu>,
            );
        });
        it("should fire onClick, onChange event", async () => {
            const [item1, item2] = screen.getAllByRole("menuitemcheckbox");

            expect(item1).toHaveAttribute("aria-checked", "true");
            expect(item2).toHaveAttribute("aria-checked", "false");

            await act(() => {
                fireEvent.click(item2);
            });

            let expectedProps = {
                index: 1,
                indexes: [0, 1],
                checked: [0, 1],
                checkedValues: ["1", "2"],
            };

            expect(onClickSpy).toHaveBeenCalledWith(expect.any(Object));
            expect(onChangeSpy).toHaveBeenCalledWith(expect.any(Object), expectedProps);

            expect(item1).toHaveAttribute("aria-checked", "true");
            expect(item2).toHaveAttribute("aria-checked", "true");

            await act(() => {
                fireEvent.click(item1);
            });

            expectedProps = {
                index: 0,
                indexes: [1],
                checked: [1],
                checkedValues: ["2"],
            };

            expect(onClickSpy).toHaveBeenCalledWith(expect.any(Object));
            expect(onChangeSpy).toHaveBeenCalledWith(expect.any(Object), expectedProps);

            expect(item1).toHaveAttribute("aria-checked", "false");
            expect(item2).toHaveAttribute("aria-checked", "true");
        });

        it("should fire onKeyDown event", async () => {
            const [item1] = screen.getAllByRole("menuitemcheckbox");

            await act(() => {
                fireEvent.keyDown(item1, { key: "Esc" });
            });

            const expectedProps = {
                index: 0,
                indexes: [0],
                checked: [0],
                checkedValues: ["1"],
            };

            expect(onKeyDownSpy).toHaveBeenCalledWith(expect.any(Object), expectedProps);
        });

        it("should fire onKeyDown, onChange event", async () => {
            const [, item2] = screen.getAllByRole("menuitemcheckbox");

            await act(() => {
                fireEvent.keyDown(item2, { key: " " });
            });

            const expectedProps = {
                index: 1,
                indexes: [0, 1],
                checked: [0, 1],
                checkedValues: ["1", "2"],
            };

            expect(onKeyDownSpy).toHaveBeenCalledWith(expect.any(Object), expectedProps);
            expect(onChangeSpy).toHaveBeenCalledWith(expect.any(Object), expectedProps);
        });
    });
});
