/// <reference types="@testing-library/jest-dom" />
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { EbayChip } from "../index";

describe("EbayChip", () => {
    const handleDelete = jest.fn();

    it("renders without crashing", () => {
        render(
            <EbayChip onDelete={handleDelete} a11yDeleteButtonText="Remove">
                Chip Content
            </EbayChip>,
        );
        expect(screen.getByText("Chip Content")).toBeInTheDocument();
    });

    it("calls onDelete when delete button is clicked", async () => {
        render(
            <EbayChip onDelete={handleDelete} a11yDeleteButtonText="Remove">
                Chip Content
            </EbayChip>,
        );
        await userEvent.click(screen.getByLabelText("Remove"));
        expect(handleDelete).toHaveBeenCalled();
    });
});
