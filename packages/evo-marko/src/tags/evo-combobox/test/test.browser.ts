import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { render, fireEvent, cleanup, waitFor } from "@marko/testing-library";
import { composeStories } from "@storybook/marko";
import * as stories from "../combobox.stories";

const { Default, Filtering } = composeStories(stories);

afterEach(cleanup);

let component: Awaited<ReturnType<typeof render>>;

describe("evo-combobox", () => {
    describe("given a default combobox with options", () => {
        beforeEach(async () => {
            component = await render(Default);
        });

        it("renders the combobox input", () => {
            expect(component.getByRole("combobox")).toBeTruthy();
        });

        it("is initially collapsed", () => {
            expect(component.getByRole("combobox")).toHaveAttribute(
                "aria-expanded",
                "false",
            );
        });

        it("has no listbox visible initially", () => {
            expect(component.queryByRole("listbox")).not.toBeInTheDocument();
        });

        describe("when the input receives focus", () => {
            beforeEach(async () => {
                await fireEvent.focus(component.getByRole("combobox"));
            });

            it("expands the combobox", () => {
                expect(component.getByRole("combobox")).toHaveAttribute(
                    "aria-expanded",
                    "true",
                );
            });

            it("shows the listbox", () => {
                expect(component.getByRole("listbox")).toBeVisible();
            });

            it("shows all options", () => {
                expect(component.getAllByRole("option")).toHaveLength(5);
            });

            describe("when ArrowDown is pressed", () => {
                beforeEach(async () => {
                    await fireEvent.keyDown(component.getByRole("combobox"), {
                        key: "ArrowDown",
                    });
                });

                it("highlights the first option", () => {
                    const options = component.getAllByRole("option");
                    expect(options[0]).toHaveClass("combobox__option--active");
                });

                it("sets aria-activedescendant to the first option", () => {
                    const options = component.getAllByRole("option");
                    expect(component.getByRole("combobox")).toHaveAttribute(
                        "aria-activedescendant",
                        options[0].id,
                    );
                });

                describe("when Enter is pressed", () => {
                    beforeEach(async () => {
                        await fireEvent.keyDown(
                            component.getByRole("combobox"),
                            { key: "Enter" },
                        );
                    });

                    it("collapses the combobox", () => {
                        expect(
                            component.getByRole("combobox"),
                        ).toHaveAttribute("aria-expanded", "false");
                    });

                    it("sets the input value to the selected option text", () => {
                        expect(
                            (component.getByRole("combobox") as HTMLInputElement).value,
                        ).toBe("August Campaign");
                    });
                });
            });

            describe("when Escape is pressed", () => {
                beforeEach(async () => {
                    await fireEvent.keyDown(component.getByRole("combobox"), {
                        key: "Escape",
                    });
                });

                it("collapses the combobox", () => {
                    expect(component.getByRole("combobox")).toHaveAttribute(
                        "aria-expanded",
                        "false",
                    );
                });
            });

            describe("when an option is clicked", () => {
                beforeEach(async () => {
                    const options = component.getAllByRole("option");
                    await fireEvent.mouseDown(options[2]);
                    await fireEvent.click(options[2]);
                });

                it("collapses the combobox", async () => {
                    await waitFor(() => {
                        expect(component.getByRole("combobox")).toHaveAttribute(
                            "aria-expanded",
                            "false",
                        );
                    });
                });

                it("sets the input value to the clicked option text", async () => {
                    await waitFor(() => {
                        expect(
                            (component.getByRole("combobox") as HTMLInputElement).value,
                        ).toBe("Basic Offer");
                    });
                });
            });
        });
    });

    describe("given a combobox with autocomplete='list' (filtering)", () => {
        beforeEach(async () => {
            component = await render(Filtering);
        });

        it("renders the combobox input", () => {
            expect(component.getByRole("combobox")).toBeTruthy();
        });

        describe("when the user types text", () => {
            beforeEach(async () => {
                const input = component.getByRole("combobox") as HTMLInputElement;
                await fireEvent.focus(input);
                await fireEvent.input(input, { target: { value: "Basic" } });
            });

            it("expands the combobox", () => {
                expect(component.getByRole("combobox")).toHaveAttribute(
                    "aria-expanded",
                    "true",
                );
            });

            it("filters options to matching ones", () => {
                expect(component.getAllByRole("option")).toHaveLength(3);
            });
        });
    });
});
