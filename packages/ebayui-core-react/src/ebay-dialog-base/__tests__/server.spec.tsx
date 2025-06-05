import * as React from "react";
import { render } from "@testing-library/react";
import { DialogDefaultProps, DialogOpen, HeaderFooterDialog, HeaderFooterDialogDefaultProps } from "./mocks";

describe("dialog-base", () => {
    it("renders basic version", async () => {
        const { getByRole, getByLabelText, getByText } = await render(<HeaderFooterDialog open />);

        expect(getByRole("dialog", { hidden: true })).not.toHaveAttribute("hidden");
        expect(getByLabelText(DialogDefaultProps.a11yCloseText)).toHaveClass("lightbox-dialog__close");
        expect(getByText(DialogDefaultProps.children)).toHaveClass("lightbox-dialog__main");
    });

    it("renders with header and footer", async () => {
        const { getByRole, getByLabelText, getByText, container } = await render(<HeaderFooterDialog open />);

        expect(getByRole("dialog", { hidden: true })).not.toHaveAttribute("hidden");
        expect(getByLabelText(HeaderFooterDialogDefaultProps.a11yCloseText)).toHaveClass("lightbox-dialog__close");
        expect(getByText(HeaderFooterDialogDefaultProps.children)).toHaveClass("lightbox-dialog__main");
        expect(container.querySelector(".lightbox-dialog__header")).toHaveTextContent(
            HeaderFooterDialogDefaultProps.header.props.children,
        );
        expect(getByText(HeaderFooterDialogDefaultProps.footer.props.children)).toHaveClass("lightbox-dialog__footer");
    });

    it("renders in open state", async () => {
        const { getByRole } = await render(<DialogOpen />);
        expect(getByRole("dialog", { hidden: true })).not.toHaveAttribute("hidden");
    });

    it("renders non modal", async () => {
        const { getByRole } = await render(<DialogOpen isModal={false} />);
        expect(getByRole("dialog", { hidden: true })).toHaveAttribute("aria-live", "polite");
    });
});
