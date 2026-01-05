import React, { useState } from "react";
import { act, fireEvent, render, screen } from "@testing-library/react";
import { EbaySnackbarDialog, EbaySnackbarDialogAction } from "../index";

vi.useFakeTimers();

describe("<EbaySnackbarDialog />", () => {
    function openSnackbar() {
        const button = screen.getByText("Open");
        fireEvent.click(button);
    }

    beforeEach(() => {
        const Component = () => {
            const [open, setOpen] = useState(false);
            return (
                <>
                    <button onClick={() => setOpen(true)}>Open</button>
                    {/* We switch off animation so we can test DOM elements presence or not */}
                    <EbaySnackbarDialog open={open} animated={false}>
                        <p>Snackbar text</p>
                        <EbaySnackbarDialogAction>Action</EbaySnackbarDialogAction>
                    </EbaySnackbarDialog>
                </>
            );
        };

        render(<Component />);
    });

    it("should open the snackbar", () => {
        openSnackbar();

        expect(screen.getByText("Snackbar text")).toBeInTheDocument();
    });

    it(`should close the snackbar on clicking the action`, () => {
        openSnackbar();

        const action = screen.getByText("Action");
        fireEvent.click(action);
        expect(action).not.toBeInTheDocument();
    });

    it(`should close the snackbar after 6 seconds`, () => {
        openSnackbar();

        const snackbar = screen.getByText("Snackbar text");

        vi.advanceTimersByTime(3000 /* 3 seconds */);

        // Make sure that after 3 seconds is still open
        expect(snackbar).toBeInTheDocument();

        act(() => {
            vi.advanceTimersByTime(3000 /* 3 seconds */);
        });

        expect(snackbar).not.toBeInTheDocument();
    });

    it(`should not close when the element is focused`, () => {
        openSnackbar();

        const snackbar = screen.getByText("Snackbar text");

        fireEvent.focus(snackbar);

        vi.advanceTimersByTime(7000 /* 7 seconds */);

        expect(snackbar).toBeInTheDocument();
    });

    it(`should close on blur after 6 seconds`, () => {
        openSnackbar();
        const snackbar = screen.getByText("Snackbar text");
        fireEvent.focus(snackbar);
        vi.advanceTimersByTime(7000 /* 7 seconds */);
        expect(snackbar).toBeInTheDocument();

        fireEvent.blur(snackbar);

        act(() => {
            vi.advanceTimersByTime(7000 /* 7 seconds */);
        });

        expect(snackbar).not.toBeInTheDocument();
    });

    it(`should not close when the mouse enter the snackbar`, () => {
        openSnackbar();

        const snackbar = screen.getByText("Snackbar text");

        fireEvent.mouseEnter(snackbar);

        vi.advanceTimersByTime(7000 /* 7 seconds */);

        expect(snackbar).toBeInTheDocument();
    });

    it(`should close on mouse leave after 6 seconds`, () => {
        openSnackbar();
        const snackbar = screen.getByText("Snackbar text");
        fireEvent.mouseEnter(snackbar);
        vi.advanceTimersByTime(7000 /* 7 seconds */);
        expect(snackbar).toBeInTheDocument();

        fireEvent.mouseLeave(snackbar);

        act(() => {
            vi.advanceTimersByTime(7000 /* 7 seconds */);
        });

        expect(snackbar).not.toBeInTheDocument();
    });

    it(`should not close when the snackbar is on focus but the mouse leave`, () => {
        openSnackbar();
        const snackbar = screen.getByText("Snackbar text");
        fireEvent.mouseEnter(snackbar);
        fireEvent.focus(snackbar);
        vi.advanceTimersByTime(7000 /* 7 seconds */);
        expect(snackbar).toBeInTheDocument();

        fireEvent.mouseLeave(snackbar);

        act(() => {
            vi.advanceTimersByTime(7000 /* 7 seconds */);
        });

        expect(snackbar).toBeInTheDocument();
    });

    it(`should not close when the snackbar is on mouse enter but the focus got lost`, () => {
        openSnackbar();
        const snackbar = screen.getByText("Snackbar text");
        fireEvent.mouseEnter(snackbar);
        fireEvent.focus(snackbar);
        vi.advanceTimersByTime(7000 /* 7 seconds */);
        expect(snackbar).toBeInTheDocument();

        fireEvent.blur(snackbar);

        act(() => {
            vi.advanceTimersByTime(7000 /* 7 seconds */);
        });

        expect(snackbar).toBeInTheDocument();
    });
});
